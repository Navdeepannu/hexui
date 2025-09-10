"use client";

import React from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { LucideProps } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockData,
  CodeBlockFiles,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/ui/kibo-ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { BundledLanguage } from "shiki";
import {
  Eye,
  Code2,
  FileText,
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  X,
} from "lucide-react";
// removed unused Tabler icon imports
type BlockConfig = {
  data: CodeBlockData[];
  defaultValue?: string; // language key matching CodeBlockData.language
};

export type CodePreviewProps = HTMLAttributes<HTMLDivElement> & {
  initialTab?: "preview" | "source" | "code";
  preview?: ReactNode;
  source?: BlockConfig;
  code?: BlockConfig;
  lineNumbers?: boolean;
  codeHeight?: number | string; // fixed height for code panes; enables vertical scroll
  // Optional initial width for preview device (in px). If omitted, uses full width.
  initialPreviewWidth?: number;
};

export function CodePreview({
  className,
  initialTab = "preview",
  preview,
  source,
  code,
  lineNumbers = true,
  codeHeight,
  ...props
}: CodePreviewProps) {
  const showSource = Boolean(source?.data?.length);
  const showCode = Boolean(code?.data?.length);
  const viewportHeight =
    typeof codeHeight === "number"
      ? `${codeHeight}px`
      : (codeHeight ?? "400px");

  // Resizable preview state
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [previewWidth, setPreviewWidth] = useState<number | "auto">(
    typeof props.initialPreviewWidth === "number"
      ? props.initialPreviewWidth
      : "auto",
  );
  // device presets (px) — mobile, tablet, laptop, full
  const presets: Array<{
    key: string;
    width: number | "auto";
    title: string;
    Icon: React.ComponentType<LucideProps>;
  }> = [
    { key: "mobile", width: 375, title: "Mobile", Icon: Smartphone },
    { key: "tablet", width: 820, title: "Tablet", Icon: Tablet },
    { key: "laptop", width: 1024, title: "Laptop", Icon: Monitor },
    { key: "full", width: "auto", title: "Fill", Icon: Maximize2 },
  ];
  const dragState = useRef<{ startX: number; startW: number } | null>(null);

  const clampWidth = useCallback((w: number) => {
    const min = 320; // minimum device width
    const max = containerRef.current?.clientWidth
      ? Math.min(containerRef.current.clientWidth - 32, 1440)
      : 1024;
    return Math.max(min, Math.min(max, w));
  }, []);

  const onMouseDownHandle = useCallback(
    (e: React.MouseEvent) => {
      if (previewWidth === "auto") {
        // initialize starting width to 60% of container if auto
        const cw = containerRef.current?.clientWidth ?? 900;
        setPreviewWidth(Math.round(cw * 0.6));
        dragState.current = { startX: e.clientX, startW: Math.round(cw * 0.6) };
      } else {
        dragState.current = { startX: e.clientX, startW: previewWidth };
      }
      window.addEventListener("mousemove", onMouseMoveWindow);
      window.addEventListener("mouseup", onMouseUpWindow);
      e.preventDefault();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [previewWidth],
  );

  const onMouseMoveWindow = useCallback(
    (e: MouseEvent) => {
      if (!dragState.current) return;
      const dx = e.clientX - dragState.current.startX;
      const next = clampWidth(dragState.current.startW + dx);
      setPreviewWidth(next);
    },
    [clampWidth],
  );

  const onMouseUpWindow = useCallback(() => {
    dragState.current = null;
    window.removeEventListener("mousemove", onMouseMoveWindow);
    window.removeEventListener("mouseup", onMouseUpWindow);
  }, [onMouseMoveWindow]);

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", onMouseMoveWindow);
      window.removeEventListener("mouseup", onMouseUpWindow);
    };
  }, [onMouseMoveWindow, onMouseUpWindow]);

  // Determine default tab based on provided content
  const defaultTab = ((): "preview" | "source" | "code" => {
    if (
      initialTab &&
      ((initialTab === "source" && showSource) ||
        (initialTab === "code" && showCode) ||
        initialTab === "preview")
    )
      return initialTab;
    if (preview) return "preview";
    if (showSource) return "source";
    return "code";
  })();

  // Fullscreen overlay state
  const [isFullscreen, setIsFullscreen] = useState(false);

  const contentWidthStyle: CSSProperties =
    previewWidth === "auto"
      ? { width: "100%" }
      : ({
          width: `${previewWidth}px`,
          marginLeft: "auto",
          marginRight: "auto",
        } as CSSProperties);

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="p-2 sm:p-3">
        <Tabs defaultValue={defaultTab}>
          <div className="tems-center mb-2 flex justify-between gap-2">
            <TabsList className="flex-1 flex-wrap">
              {preview && (
                <TabsTrigger value="preview">
                  <Eye className="mr-1 h-3.5 w-3.5" /> Preview
                </TabsTrigger>
              )}
              {showSource && (
                <TabsTrigger value="source">
                  <FileText className="mr-1 h-3.5 w-3.5" /> Source
                </TabsTrigger>
              )}
              {showCode && (
                <TabsTrigger value="code">
                  <Code2 className="mr-1 h-3.5 w-3.5" /> Code
                </TabsTrigger>
              )}
            </TabsList>

            {preview && (
              <div className="flex items-center gap-2">
                {/* grouped presets: visible on mobile and desktop, hidden on tablet (md) */}
                <div className="flex items-center md:hidden lg:flex">
                  <div className="bg-background/50 inline-flex items-center gap-1 rounded-md border p-1">
                    {presets.slice(0, 3).map(({ key, width, title, Icon }) => {
                      const active = previewWidth === width;
                      const btn = (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setPreviewWidth(width)}
                          aria-label={`Set preview to ${title} size`}
                          aria-pressed={active}
                          className={cn(
                            "inline-flex h-8 w-8 items-center justify-center rounded text-xs",
                            active
                              ? "ring-ring/50 bg-foreground text-background ring-2"
                              : "text-foreground hover:bg-muted/20",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      );

                      return (
                        <Tooltip key={key}>
                          <TooltipTrigger asChild>{btn}</TooltipTrigger>
                          <TooltipContent sideOffset={6}>
                            {title}
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>

                {/* full width button: always visible and separate */}
                <div className="flex items-center">
                  {presets.slice(3).map(({ key, width, title, Icon }) => {
                    const active = previewWidth === width;
                    const fullBtn = (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPreviewWidth(width)}
                        aria-label={`Set preview to ${title} size`}
                        aria-pressed={active}
                        className={cn(
                          "inline-flex h-8 w-8 items-center justify-center rounded border text-xs shadow-sm",
                          "bg-background border-border hover:bg-muted/30",
                          "dark:bg-popover/30 dark:border-border/30 dark:hover:bg-popover/40",
                          active
                            ? "ring-ring/50 bg-foreground text-background ring-2"
                            : "text-foreground",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    );

                    return (
                      <Tooltip key={key}>
                        <TooltipTrigger asChild>{fullBtn}</TooltipTrigger>
                        <TooltipContent sideOffset={6}>{title}</TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {preview && (
            <TabsContent value="preview">
              <div
                ref={containerRef}
                className="relative"
                style={{ height: viewportHeight }}
              >
                {/* Viewport with absolute-centered preview so width changes do not reflow surrounding layout */}
                <div className="relative h-full w-full overflow-auto p-2">
                  <div
                    className="absolute top-0 left-1/2 h-full -translate-x-1/2"
                    style={{
                      width:
                        previewWidth === "auto" ? "100%" : `${previewWidth}px`,
                    }}
                  >
                    <div className="bg-background ring-border/60 h-full w-full overflow-auto rounded-lg ring-1">
                      {/* Render user preview inside frame */}
                      <div className="flex h-full w-full items-center justify-center">
                        {preview}
                      </div>
                    </div>

                    {/* Drag handle (hidden when full width) */}
                    {previewWidth !== "auto" && (
                      <div
                        role="separator"
                        aria-label="Resize preview"
                        onMouseDown={onMouseDownHandle}
                        className="border-border/60 bg-border/80 hover:bg-foreground/30 absolute top-1/2 right-[-6px] z-10 h-8 w-2 -translate-y-1/2 cursor-col-resize rounded border dark:border-white/20 dark:bg-white/25 dark:hover:bg-white/45"
                      >
                        <span className="sr-only">Drag to resize</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {showSource && (
            <TabsContent value="source">
              <div className="flex justify-center">
                <div style={contentWidthStyle} className="w-full">
                  <CodeBlock
                    defaultValue={
                      source?.defaultValue ?? source!.data[0].language
                    }
                    data={source!.data}
                  >
                    <CodeBlockHeader className="justify-between">
                      <CodeBlockFiles
                        childrenAction={({
                          language,
                          filename,
                        }: CodeBlockData) => (
                          <CodeBlockFilename key={language} value={language}>
                            {filename}
                          </CodeBlockFilename>
                        )}
                      />
                      <div className="flex items-center gap-1">
                        <CodeBlockSelect>
                          <CodeBlockSelectTrigger>
                            <CodeBlockSelectValue
                              placeholder={
                                source?.defaultValue ?? source!.data[0].language
                              }
                            />
                          </CodeBlockSelectTrigger>
                          <CodeBlockSelectContent
                            childrenAction={({
                              language,
                              filename,
                            }: CodeBlockData) => (
                              <CodeBlockSelectItem
                                key={language}
                                value={language}
                              >
                                {filename}
                              </CodeBlockSelectItem>
                            )}
                          />
                        </CodeBlockSelect>
                        <CodeBlockCopyButton />
                      </div>
                    </CodeBlockHeader>
                    <CodeBlockBody
                      childrenAction={({ language, code }: CodeBlockData) => (
                        <CodeBlockItem
                          key={language}
                          value={language}
                          lineNumbers={lineNumbers}
                          style={
                            {
                              maxHeight:
                                typeof codeHeight === "number"
                                  ? `${codeHeight}px`
                                  : (codeHeight ?? "380px"),
                              overflow: "auto",
                            } as CSSProperties
                          }
                        >
                          <CodeBlockContent
                            language={language as BundledLanguage}
                          >
                            {code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    />
                  </CodeBlock>
                </div>
              </div>
            </TabsContent>
          )}

          {showCode && (
            <TabsContent value="code">
              <div className="flex justify-center">
                <div style={contentWidthStyle} className="w-full">
                  <CodeBlock
                    defaultValue={code?.defaultValue ?? code!.data[0].language}
                    data={code!.data}
                  >
                    <CodeBlockHeader className="justify-between">
                      <CodeBlockFiles
                        childrenAction={({
                          language,
                          filename,
                        }: CodeBlockData) => (
                          <CodeBlockFilename key={language} value={language}>
                            {filename}
                          </CodeBlockFilename>
                        )}
                      />
                      <div className="flex items-center gap-1">
                        <CodeBlockSelect>
                          <CodeBlockSelectTrigger>
                            <CodeBlockSelectValue
                              placeholder={
                                code?.defaultValue ?? code!.data[0].language
                              }
                            />
                          </CodeBlockSelectTrigger>
                          <CodeBlockSelectContent
                            childrenAction={({
                              language,
                              filename,
                            }: CodeBlockData) => (
                              <CodeBlockSelectItem
                                key={language}
                                value={language}
                              >
                                {filename}
                              </CodeBlockSelectItem>
                            )}
                          />
                        </CodeBlockSelect>
                        <CodeBlockCopyButton />
                      </div>
                    </CodeBlockHeader>
                    <CodeBlockBody
                      childrenAction={({ language, code }: CodeBlockData) => (
                        <CodeBlockItem
                          key={language}
                          value={language}
                          lineNumbers={lineNumbers}
                          style={
                            {
                              maxHeight:
                                typeof codeHeight === "number"
                                  ? `${codeHeight}px`
                                  : (codeHeight ?? "380px"),
                              overflow: "auto",
                            } as CSSProperties
                          }
                        >
                          <CodeBlockContent
                            language={language as BundledLanguage}
                          >
                            {code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    />
                  </CodeBlock>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
        {isFullscreen &&
          createPortal(
            <div
              className="bg-background/90 fixed inset-0 z-[2000] backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 z-[2001] flex items-start justify-end p-4">
                <button
                  type="button"
                  className="border-border text-foreground bg-background/70 hover:bg-background pointer-events-auto inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm shadow-sm dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15"
                  onClick={() => setIsFullscreen(false)}
                  aria-label="Close fullscreen"
                >
                  <X className="h-4 w-4" />
                  <span>Close</span>
                </button>
              </div>
              <div className="flex h-screen w-screen items-center justify-center">
                <div className="relative h-full w-full max-w-[1440px]">
                  <div className="bg-background ring-border/60 h-full w-full overflow-auto rounded-lg ring-1">
                    <div className="flex h-full w-full items-center justify-center">
                      {preview}
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </div>
  );
}

export default CodePreview;
