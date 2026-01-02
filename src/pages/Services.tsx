import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { ServiceCard } from "@/components/ui/Cards";
import { Link } from "react-router-dom";
import { TrendingUp, Palette, FileText, Target, Users, Code, ArrowRight, CheckCircle } from "lucide-react";
import { FloatingElement, ParallaxSection, DonutChart, BarChart, MetricBadge, ProgressCard } from "@/components/MarketingGraphics";
import { motion } from "framer-motion";

const services = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Marketing",
    description: "Data-driven strategies to accelerate pipeline and revenue growth across every channel. From demand gen to ABM.",
    href: "/services/growth-marketing",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Website & Product Design",
    description: "Conversion-focused UI/UX that transforms visitors into customers. Beautiful design that performs.",
    href: "/services/design",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Strategy & SEO",
    description: "Authority-building content systems that drive organic traffic, leads, and thought leadership.",
    href: "/services/content-seo",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Paid Media & Performance",
    description: "High-ROI advertising campaigns across search, social, and programmatic channels.",
    href: "/services/paid-media",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community & Social Growth",
    description: "Build engaged audiences and turn followers into brand advocates and customers.",
    href: "/services/social-growth",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "High-performance web applications built for scale, speed, and conversions.",
    href: "/services/development",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-xl">
              <span className="section-label">Our Services</span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                Full-Stack Growth{" "}
                <span className="text-gradient">Capabilities</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                End-to-end services to scale your brand from startup to market leader. 
                Strategy to execution, we've got you covered.
              </p>
            </AnimatedSection>

            {/* Graphics */}
            <div className="relative hidden lg:block h-72">
              <FloatingElement delay={0} direction="up" className="absolute top-0 right-0">
                <ProgressCard />
              </FloatingElement>
              <FloatingElement delay={0.5} direction="down" className="absolute bottom-0 left-10">
                <MetricBadge value="6x" label="ROI Average" trend="+180%" />
              </FloatingElement>
              <FloatingElement delay={1} direction="left" className="absolute top-20 left-0">
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <DonutChart percentage={94} size={80} color="primary" label="Delivery" />
                </motion.div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <ServiceCard {...service} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-card/50 border-y border-border overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Our Process</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4">
              How We Deliver Results
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { step: "01", title: "Discovery", description: "Deep-dive into your business, market, competitors, and goals." },
                { step: "02", title: "Strategy", description: "Data-backed roadmap with clear milestones and KPIs." },
                { step: "03", title: "Execution", description: "Agile implementation with weekly sprints and updates." },
                { step: "04", title: "Optimization", description: "Continuous testing, learning, and scaling what works." },
              ].map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <div className="relative p-6 rounded-xl bg-background border border-border h-full hover:border-primary/50 transition-all">
                    <span className="text-4xl font-display font-bold text-primary/20">{item.step}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <ParallaxSection speed={0.15}>
              <motion.div
                className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-2">Project Timeline</p>
                    <BarChart data={[30, 60, 45, 80, 65, 90, 75, 95]} colors={["primary", "primary", "accent", "accent", "primary", "warning", "accent", "primary"]} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 rounded-lg p-4 text-center">
                    <DonutChart percentage={88} size={70} color="accent" />
                    <p className="text-xs text-muted-foreground mt-2">On-time Delivery</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-gradient">4.9</p>
                    <p className="text-xs text-muted-foreground">Client Rating</p>
                    <div className="flex justify-center gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="text-warning text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Let's Build Your Growth Engine
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Ready to scale? Book a strategy call and let's explore how we can help.
            </p>
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
