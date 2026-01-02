import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { FAQSection } from "@/components/FAQSection";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ParallaxSection, FloatingElement, DonutChart, BarChart } from "@/components/MarketingGraphics";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "For companies just getting started with growth",
    price: "$5K",
    period: "/month",
    features: ["1 core service focus", "Monthly strategy calls", "Basic analytics dashboard", "Email support", "2-week sprints"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For scaling companies ready to accelerate",
    price: "$15K",
    period: "/month",
    features: ["2-3 integrated services", "Weekly strategy calls", "Advanced analytics & reporting", "Dedicated account manager", "Priority support", "Custom integrations"],
    cta: "Scale Now",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For market leaders who need it all",
    price: "Custom",
    period: "",
    features: ["Full-stack services", "Embedded team model", "Executive-level strategy", "24/7 priority support", "Custom SLAs", "Revenue-share options"],
    cta: "Contact Sales",
    popular: false,
  },
];

const pricingFaqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What's included in the onboarding process?",
    answer: "All plans include a comprehensive onboarding process with discovery calls, strategy sessions, and setup of tracking and analytics.",
  },
  {
    question: "Do you offer project-based pricing?",
    answer: "Yes, we offer project-based pricing for specific initiatives. Contact us to discuss your requirements and get a custom quote.",
  },
  {
    question: "What happens if I need to pause my subscription?",
    answer: "We offer flexible pause options for up to 3 months. Your data and configurations are preserved during the pause period.",
  },
  {
    question: "Is there a minimum contract length?",
    answer: "We recommend a 3-month minimum to see meaningful results, but we don't lock you into long-term contracts.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-xl">
              <span className="section-label">Pricing</span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Transparent Pricing</h1>
              <p className="text-lg text-muted-foreground">Flexible engagement models designed for your stage of growth. No hidden fees, no surprises.</p>
            </AnimatedSection>

            {/* Floating Graphics */}
            <div className="relative hidden lg:block h-64">
              <FloatingElement delay={0} direction="up" className="absolute top-0 right-0">
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-5 shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-sm font-medium text-foreground mb-3">Average ROI</p>
                  <DonutChart percentage={340} size={80} color="primary" />
                  <p className="text-xs text-muted-foreground mt-2 text-center">340% return</p>
                </motion.div>
              </FloatingElement>

              <FloatingElement delay={0.5} direction="down" className="absolute bottom-0 left-10">
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="text-xs text-muted-foreground mb-2">Client Growth</p>
                  <BarChart data={[40, 55, 70, 85, 95]} colors={["primary", "accent", "primary", "accent", "primary"]} />
                </motion.div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 0.1}>
                <motion.div 
                  className={`relative h-full p-8 rounded-2xl border transition-all ${plan.popular ? "bg-gradient-to-b from-primary/10 to-accent/5 border-primary/50" : "bg-card border-border hover:border-primary/30"}`}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-bold text-primary-foreground">Most Popular</div>}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6"><span className="font-display text-4xl font-bold text-foreground">{plan.price}</span><span className="text-muted-foreground">{plan.period}</span></div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => <li key={f} className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-primary shrink-0" /><span className="text-foreground">{f}</span></li>)}
                  </ul>
                  <GradientButton variant={plan.popular ? "primary" : "outline"} className="w-full" asChild>
                    <Link to="/contact">{plan.cta}</Link>
                  </GradientButton>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 lg:py-32 bg-card/50 border-y border-border overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Why MWX?</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-4">What's Included</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Every plan includes our core features</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ParallaxSection speed={0.1}>
              <motion.div
                className="p-6 rounded-xl bg-background border border-border text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Fast Execution</h3>
                <p className="text-sm text-muted-foreground">2-week sprint cycles for rapid iteration</p>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed={-0.1}>
              <motion.div
                className="p-6 rounded-xl bg-background border border-border text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">Expert team at your fingertips</p>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed={0.15}>
              <motion.div
                className="p-6 rounded-xl bg-background border border-border text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-warning/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Flexible Team</h3>
                <p className="text-sm text-muted-foreground">Scale up or down as needed</p>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogoMarquee title="Trusted by growth-focused teams" />

      {/* FAQ Section */}
      <FAQSection 
        faqs={pricingFaqs} 
        title="Pricing Questions"
        subtitle="Common questions about our pricing and engagement models"
      />

      <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">We offer project-based, retainer, and performance-based pricing models.</p>
            <GradientButton size="lg" asChild><Link to="/contact">Let's Talk<ArrowRight className="w-5 h-5" /></Link></GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
