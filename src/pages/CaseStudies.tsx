import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ParallaxSection, FloatingElement, DonutChart, BarChart, MetricBadge } from "@/components/MarketingGraphics";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "TechScale SaaS",
    industry: "B2B SaaS",
    services: ["Growth Marketing", "Content SEO"],
    problem: "Struggling to generate qualified leads despite strong product-market fit.",
    strategy: "Implemented full-funnel demand gen with ABM targeting and content-led SEO.",
    outcome: "3.2x MQLs in 90 days, 45% reduction in CAC",
    quote: "MWX transformed our entire growth engine.",
    author: "Sarah Chen, VP Marketing",
    icon: <TrendingUp className="w-6 h-6" />,
    metrics: { value: 320, label: "MQL Growth" },
  },
  {
    title: "FinFlow Fintech",
    industry: "Fintech",
    services: ["Content Strategy", "SEO"],
    problem: "Zero organic presence in a competitive fintech space.",
    strategy: "Built authority content hub with technical SEO overhaul.",
    outcome: "2x organic traffic in 6 months, #1 rankings for 15 target keywords",
    quote: "Their strategic approach doubled our organic traffic.",
    author: "Marcus Johnson, CEO",
    icon: <BarChart3 className="w-6 h-6" />,
    metrics: { value: 200, label: "Traffic Growth" },
  },
  {
    title: "CloudBase Platform",
    industry: "Cloud Infrastructure",
    services: ["Website Design", "Development"],
    problem: "Outdated website with poor conversion rates.",
    strategy: "Complete redesign focused on conversion optimization and speed.",
    outcome: "3x conversion rate, 60% faster load times",
    quote: "Best investment we made this year.",
    author: "Elena Rodriguez, CMO",
    icon: <Globe className="w-6 h-6" />,
    metrics: { value: 300, label: "Conversion Lift" },
  },
  {
    title: "MetaLabs Web3",
    industry: "Web3 / Crypto",
    services: ["Community Growth", "Social Media"],
    problem: "Needed to build community from scratch for token launch.",
    strategy: "Discord community building with influencer partnerships.",
    outcome: "50K+ community members, successful $10M raise",
    quote: "They understood Web3 like no other agency.",
    author: "Jake Torres, Founder",
    icon: <Users className="w-6 h-6" />,
    metrics: { value: 50, label: "K Members" },
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-xl">
              <span className="section-label">Our Work</span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Case Studies</h1>
              <p className="text-lg text-muted-foreground">Real results for real companies. No fluff, just outcomes that drive growth.</p>
            </AnimatedSection>

            {/* Floating Graphics */}
            <div className="relative hidden lg:block h-80">
              <FloatingElement delay={0} direction="up" className="absolute top-0 right-10">
                <MetricBadge value="3.2x" label="Avg. Growth" trend="+124%" />
              </FloatingElement>

              <FloatingElement delay={0.5} direction="down" className="absolute top-20 left-0">
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-xs text-muted-foreground mb-2">Results Delivered</p>
                  <BarChart data={[45, 65, 80, 90, 95, 100]} colors={["primary", "accent", "primary", "accent", "primary", "accent"]} />
                </motion.div>
              </FloatingElement>

              <FloatingElement delay={1} direction="left" className="absolute bottom-0 right-0">
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-xs text-muted-foreground mb-2">Client Success</p>
                  <div className="flex items-center gap-3">
                    <DonutChart percentage={99} size={60} color="accent" />
                    <div>
                      <p className="text-lg font-bold text-foreground">99%</p>
                      <p className="text-xs text-muted-foreground">Retention</p>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <StaggerContainer className="space-y-8">
            {caseStudies.map((study, index) => (
              <StaggerItem key={study.title}>
                <ParallaxSection speed={index % 2 === 0 ? 0.05 : -0.05}>
                  <motion.div 
                    className="group p-8 lg:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">{study.icon}</div>
                          <div>
                            <h3 className="font-display text-xl font-bold text-foreground">{study.title}</h3>
                            <p className="text-sm text-muted-foreground">{study.industry}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.services.map((s) => (
                            <span key={s} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">{s}</span>
                          ))}
                        </div>
                        {/* Metric Visualization */}
                        <div className="bg-background/50 rounded-lg p-4">
                          <DonutChart percentage={study.metrics.value > 100 ? 100 : study.metrics.value} size={80} color={index % 2 === 0 ? "primary" : "accent"} />
                          <p className="text-xs text-muted-foreground text-center mt-2">{study.metrics.label}</p>
                        </div>
                      </div>
                      <div className="lg:col-span-2 space-y-4">
                        <div><span className="text-sm font-semibold text-primary">Challenge:</span><p className="text-muted-foreground">{study.problem}</p></div>
                        <div><span className="text-sm font-semibold text-primary">Strategy:</span><p className="text-muted-foreground">{study.strategy}</p></div>
                        <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                          <span className="text-sm font-semibold text-primary">Outcome:</span>
                          <p className="text-lg font-display font-bold text-foreground">{study.outcome}</p>
                        </div>
                        <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">"{study.quote}" <span className="block text-sm mt-1 not-italic">— {study.author}</span></blockquote>
                      </div>
                    </div>
                  </motion.div>
                </ParallaxSection>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogoMarquee title="Join these successful companies" />

      <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">Want Results Like These?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss your growth goals and create your success story.</p>
            <GradientButton size="lg" asChild><Link to="/contact">Start a Conversation<ArrowRight className="w-5 h-5" /></Link></GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
