import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { Link } from "react-router-dom";
import { ArrowRight, Target, DollarSign, LineChart, Megaphone, Repeat, CheckCircle } from "lucide-react";

const deliverables = [
  "PPC campaign strategy and management",
  "Social media advertising (Meta, LinkedIn, Twitter)",
  "Programmatic and display advertising",
  "Retargeting and remarketing campaigns",
  "Performance reporting and ROAS optimization",
];

const process = [
  { step: "01", title: "Audit", description: "Analyze current ad spend, performance, and opportunities." },
  { step: "02", title: "Strategy", description: "Channel mix, audience targeting, and budget allocation." },
  { step: "03", title: "Launch", description: "Campaign setup, creative production, and launch." },
  { step: "04", title: "Optimize", description: "Continuous A/B testing and performance optimization." },
];

const pricing = [
  { model: "Management Fee", description: "% of ad spend managed", range: "15-20% of spend" },
  { model: "Retainer + Fee", description: "Base + performance", range: "$5K+ / mo" },
  { model: "Performance", description: "CPA or ROAS-based", range: "Custom" },
];

const PaidMedia = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">← Back to Services</Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <span className="section-label">Service</span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">Paid Media & Performance</h1>
            <p className="text-lg text-muted-foreground">High-ROI advertising campaigns across search, social, and programmatic. Every dollar tracked, every result measured.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <span className="section-label">What You Get</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">Deliverables</h2>
              <ul className="space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <DollarSign className="w-6 h-6" />, label: "ROAS Focus" },
                  { icon: <LineChart className="w-6 h-6" />, label: "Data-Driven" },
                  { icon: <Megaphone className="w-6 h-6" />, label: "Multi-Channel" },
                  { icon: <Repeat className="w-6 h-6" />, label: "Retargeting" },
                ].map((item) => (
                  <div key={item.label} className="p-6 rounded-xl bg-card border border-border text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">{item.icon}</div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50 border-y border-border">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Our Process</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4">How We Execute</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="relative p-6 rounded-xl bg-background border border-border h-full">
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full">
                    <span className="text-xs font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Investment</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4">Pricing Models</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((item) => (
              <StaggerItem key={item.model}>
                <div className="p-6 rounded-xl bg-card border border-border text-center h-full">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.model}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <p className="text-lg font-semibold text-gradient">{item.range}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">Ready to Maximize Ad Performance?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">Let's turn your ad spend into revenue.</p>
            <GradientButton size="lg" asChild>
              <Link to="/contact">Get Started<ArrowRight className="w-5 h-5" /></Link>
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PaidMedia;
