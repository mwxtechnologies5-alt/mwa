import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const Terms = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="section-label">Legal</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Terms of Service</h1>
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
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                  <p>By accessing or using MWX Technologies' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Services</h2>
                  <p>MWX Technologies provides growth marketing, web development, design, and related digital services. The specific scope of services will be defined in individual client agreements.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
                  <p>Clients are responsible for:</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Providing accurate and complete information</li>
                    <li>Timely feedback and approvals</li>
                    <li>Ensuring they have rights to provided materials</li>
                    <li>Payment of agreed fees</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                  <p>Upon full payment, clients receive ownership of deliverables created specifically for them. MWX Technologies retains rights to pre-existing materials, tools, and methodologies.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
                  <p>Payment terms are specified in individual agreements. Late payments may incur interest charges and suspension of services.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
                  <p>Both parties agree to maintain confidentiality of proprietary information shared during the engagement.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                  <p>MWX Technologies' liability is limited to the fees paid for services. We are not liable for indirect, incidental, or consequential damages.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                  <p>Either party may terminate services with 30 days written notice. Client is responsible for payment of work completed prior to termination.</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Contact</h2>
                  <p>For questions about these terms, contact us at: legal@mwxtech.com</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
