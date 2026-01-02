import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";

const Cookies = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="section-label">Legal</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Cookie Policy</h1>
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
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
                  <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
                  <p>We use cookies for the following purposes:</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li><strong className="text-foreground">Essential cookies:</strong> Required for the website to function properly</li>
                    <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong className="text-foreground">Marketing cookies:</strong> Used to track visitors across websites for advertising purposes</li>
                    <li><strong className="text-foreground">Preference cookies:</strong> Remember your preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
                  <div className="bg-card border border-border rounded-xl p-6 mt-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 text-foreground">Cookie Type</th>
                          <th className="text-left py-2 text-foreground">Purpose</th>
                          <th className="text-left py-2 text-foreground">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="py-2">Session</td>
                          <td className="py-2">Essential functionality</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-2">Analytics</td>
                          <td className="py-2">Usage tracking</td>
                          <td className="py-2">2 years</td>
                        </tr>
                        <tr>
                          <td className="py-2">Preferences</td>
                          <td className="py-2">User settings</td>
                          <td className="py-2">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
                  <p>You can control and manage cookies in various ways:</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                    <li>Delete existing cookies through your browser settings</li>
                    <li>Use browser extensions to block tracking cookies</li>
                  </ul>
                  <p className="mt-4">Please note that disabling cookies may affect the functionality of our website.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Your Consent</h2>
                  <p>By continuing to use our website, you consent to our use of cookies as described in this policy.</p>
                </div>

                <div className="pt-4">
                  <GradientButton variant="outline">Update Cookie Preferences</GradientButton>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p>If you have questions about our cookie policy, please contact us at: privacy@mwxtech.com</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
