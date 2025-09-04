"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
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
} from "lucide-react";

type BlockConfig = {
  data: CodeBlockData[];
  defaultValue?: string; // language key matching CodeBlockData.language
};

export type CodePreviewProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
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
  title,
  description,
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
      : (codeHeight ?? "380px");

  // Resizable preview state
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [previewWidth, setPreviewWidth] = useState<number | "auto">(
    typeof (props as any).initialPreviewWidth === "number"
      ? (props as any).initialPreviewWidth
      : "auto",
  );
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

  return (
    <div
      className={cn("bg-background rounded-lg border", className)}
      {...props}
    >
      {(title || description) && (
        <div className="border-b p-4">
          {title && (
            <h3 className="text-sm leading-none font-medium">{title}</h3>
          )}
          {description && (
            <p className="text-muted-foreground mt-1 text-sm">{description}</p>
          )}
        </div>
      )}

      <div className="p-3">
        <Tabs defaultValue={defaultTab}>
          <div className="mb-2 flex items-center justify-between gap-2">
            <TabsList className="flex-wrap">
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
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="border-border text-foreground bg-background/70 hover:bg-background inline-flex items-center gap-1 rounded border px-2 py-1 text-xs shadow-sm dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15"
                  onClick={() => setPreviewWidth(375)}
                  aria-label="Set preview to mobile size"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>Mobile</span>
                </button>
                <button
                  type="button"
                  className="border-border text-foreground bg-background/70 hover:bg-background inline-flex items-center gap-1 rounded border px-2 py-1 text-xs shadow-sm dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15"
                  onClick={() => setPreviewWidth(768)}
                  aria-label="Set preview to tablet size"
                >
                  <Tablet className="h-3.5 w-3.5" />
                  <span>Tablet</span>
                </button>
                <button
                  type="button"
                  className="border-border text-foreground bg-background/70 hover:bg-background inline-flex items-center gap-1 rounded border px-2 py-1 text-xs shadow-sm dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15"
                  onClick={() => setPreviewWidth("auto")}
                  aria-label="Set preview to full width"
                >
                  <Monitor className="h-3.5 w-3.5" />
                  <span>Full</span>
                </button>
              </div>
            )}
          </div>

          {preview && (
            <TabsContent value="preview">
              <div
                ref={containerRef}
                className="bg-card relative rounded-md border"
                style={{ height: viewportHeight }}
              >
                {/* Viewport centers content */}
                <div className="flex h-full w-full items-center justify-center overflow-auto p-4">
                  <div
                    className="relative h-full max-h-full"
                    style={{
                      width:
                        previewWidth === "auto" ? "100%" : `${previewWidth}px`,
                    }}
                  >
                    <div className="bg-background h-full w-full overflow-auto rounded-md border">
                      {/* Render user preview inside frame */}
                      <div className="flex h-full w-full items-center justify-center p-4">
                        {preview}
                      </div>
                    </div>

                    {/* Drag handle */}
                    <div
                      role="separator"
                      aria-label="Resize preview"
                      onMouseDown={onMouseDownHandle}
                      className="border-border/60 bg-border/80 hover:bg-foreground/30 absolute top-1/2 right-[-6px] z-10 h-8 w-2 -translate-y-1/2 cursor-col-resize rounded border dark:border-white/20 dark:bg-white/25 dark:hover:bg-white/45"
                    >
                      <span className="sr-only">Drag to resize</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {showSource && (
            <TabsContent value="source">
              <CodeBlock
                defaultValue={source?.defaultValue ?? source!.data[0].language}
                data={source!.data}
              >
                <CodeBlockHeader className="justify-between">
                  <CodeBlockFiles
                    childrenAction={({ language, filename }: CodeBlockData) => (
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
                          <CodeBlockSelectItem key={language} value={language}>
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
                      <CodeBlockContent language={language as BundledLanguage}>
                        {code}
                      </CodeBlockContent>
                    </CodeBlockItem>
                  )}
                />
              </CodeBlock>
            </TabsContent>
          )}

          {showCode && (
            <TabsContent value="code">
              <CodeBlock
                defaultValue={code?.defaultValue ?? code!.data[0].language}
                data={code!.data}
              >
                <CodeBlockHeader className="justify-between">
                  <CodeBlockFiles
                    childrenAction={({ language, filename }: CodeBlockData) => (
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
                          <CodeBlockSelectItem key={language} value={language}>
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
                      <CodeBlockContent language={language as BundledLanguage}>
                        {code}
                      </CodeBlockContent>
                    </CodeBlockItem>
                  )}
                />
              </CodeBlock>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}

export default CodePreview;
