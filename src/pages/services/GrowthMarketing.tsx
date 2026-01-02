import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, BarChart3, Users, Zap, CheckCircle } from "lucide-react";

const deliverables = [
  "Full-funnel demand generation strategy",
  "Account-based marketing (ABM) campaigns",
  "Marketing automation & nurture sequences",
  "Lead scoring and qualification frameworks",
  "Revenue attribution and analytics",
];

const process = [
  {
    step: "01",
    title: "Audit & Discovery",
    description: "We analyze your current funnel, channels, and metrics to identify gaps and opportunities.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Build a custom growth playbook with clear tactics, timelines, and success metrics.",
  },
  {
    step: "03",
    title: "Campaign Execution",
    description: "Launch and manage campaigns across channels with weekly performance updates.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description: "Continuous testing, refinement, and scaling of high-performing initiatives.",
  },
];

const pricing = [
  { model: "Retainer", description: "Monthly engagement with dedicated team", range: "$10K - $25K/mo" },
  { model: "Project", description: "Fixed-scope initiatives with clear deliverables", range: "$15K - $75K" },
  { model: "Performance", description: "Revenue-share or lead-based pricing", range: "Custom" },
];

const GrowthMarketing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
              ← Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <span className="section-label">Service</span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Growth Marketing
            </h1>
            <p className="text-lg text-muted-foreground">
              Data-driven strategies to accelerate pipeline and revenue growth across every channel. 
              We turn marketing spend into measurable business outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <span className="section-label">What You Get</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
                Deliverables
              </h2>
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
                  { icon: <Target className="w-6 h-6" />, label: "Targeted Campaigns" },
                  { icon: <BarChart3 className="w-6 h-6" />, label: "Data-Driven" },
                  { icon: <Users className="w-6 h-6" />, label: "ABM Expertise" },
                  { icon: <Zap className="w-6 h-6" />, label: "Fast Execution" },
                ].map((item) => (
                  <div key={item.label} className="p-6 rounded-xl bg-card border border-border text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                      {item.icon}
                    </div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-card/50 border-y border-border">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Our Process</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4">
              How We Execute
            </h2>
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

      {/* Pricing */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Investment</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4">
              Pricing Models
            </h2>
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

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Accelerate Growth?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss your growth goals and build a strategy that delivers.
            </p>
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default GrowthMarketing;
