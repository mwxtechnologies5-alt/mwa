import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Weekly growth strategies and insights",
  "Exclusive case studies and playbooks",
  "Early access to new tools and resources",
  "Industry trends and market analysis",
  "Tips from top growth leaders",
];

const Newsletter = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="section-label">Newsletter</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Growth Insights Weekly</h1>
            <p className="text-lg text-muted-foreground">Join 10,000+ growth professionals getting actionable insights delivered every Tuesday.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold text-foreground">What You'll Get</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">10,000+</span> subscribers · <span className="text-foreground font-medium">45%</span> average open rate
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div
                className="p-8 bg-card border border-border rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Subscribe Now</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        className="w-full h-12 pl-12 pr-4 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <GradientButton size="lg" className="w-full">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </GradientButton>
                  <p className="text-xs text-center text-muted-foreground">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
