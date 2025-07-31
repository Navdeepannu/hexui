import { Container } from "@/components/basic/container";
import Link from "next/link";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                HexUI is an open-source component library. We do not collect
                personal information from users who visit our website or use our
                components.
              </p>
              <p className="text-muted-foreground mb-4">
                Our website may use analytics tools to understand how visitors
                interact with our site. This data is aggregated and anonymous.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                How We Use Information
              </h2>
              <p className="text-muted-foreground mb-4">
                Any information we collect is used solely to:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Improve our website and documentation</li>
                <li>Understand which components are most popular</li>
                <li>Fix bugs and improve performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Third-Party Services
              </h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services such as:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Vercel for hosting</li>
                <li>GitHub for source code management</li>
                <li>Analytics services for usage insights</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These services have their own privacy policies that govern their
                collection and use of information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                Our website may use cookies to enhance your browsing experience.
                These cookies are used for theme preferences and basic
                functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Data Security
              </h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect any
                information collected. However, since we collect minimal data,
                security risks are inherently low.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground mb-4">
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-foreground mb-4 text-2xl font-semibold">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy, please
                contact us through our{" "}
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
