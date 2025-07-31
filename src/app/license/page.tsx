import { Container } from "@/components/basic/container";
import Link from "next/link";

export default function License() {
  return (
    <div className="bg-background min-h-screen">
      <Container className="py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground mb-6 inline-block text-sm transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-foreground mb-4 text-4xl font-bold">
              MIT License
            </h1>
            <p className="text-muted-foreground">Copyright (c) 2025 HexUI</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="mb-8 rounded-lg bg-neutral-100 p-6 dark:bg-zinc-900">
              <pre className="text-foreground overflow-x-auto text-sm whitespace-pre-wrap">
                {`MIT License

Copyright (c) 2025 HexUI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
              </pre>
            </div>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                What This Means
              </h2>
              <p className="text-muted-foreground mb-4">
                HexUI is released under the MIT License, which means:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>✅ Commercial use is allowed</li>
                <li>✅ Modification is allowed</li>
                <li>✅ Distribution is allowed</li>
                <li>✅ Private use is allowed</li>
                <li>✅ You can sell products that use HexUI</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Requirements
              </h2>
              <p className="text-muted-foreground mb-4">
                The only requirement is that you include the original copyright
                notice and license in any substantial portion of the software.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Limitations
              </h2>
              <p className="text-muted-foreground mb-4">
                The license comes with no warranty. The authors are not liable
                for any issues that may arise from using the software.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Questions?
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about the license, feel free to reach
                out through our{" "}
                <Link
                  href="https://github.com/navdeepannu/nestui"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  GitHub repository
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
