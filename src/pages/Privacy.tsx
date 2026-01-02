import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const Privacy = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="section-label">Legal</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-invert prose-primary">
            <AnimatedSection>
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p>MWX Technologies ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Personal identification information (name, email address, phone number)</li>
                    <li>Company information (company name, website, industry)</li>
                    <li>Usage data (how you interact with our website)</li>
                    <li>Technical data (IP address, browser type, device information)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about our services</li>
                    <li>Send newsletters and marketing materials (with your consent)</li>
                    <li>Analyze website usage and improve user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                  <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                  <p>If you have questions about this privacy policy, please contact us at:</p>
                  <p className="mt-2">Email: privacy@mwxtech.com</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
