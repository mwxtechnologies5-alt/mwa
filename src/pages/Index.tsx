import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { ServiceCard, TestimonialCard, StatCard } from "@/components/ui/Cards";
import { FAQSection } from "@/components/FAQSection";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import {
  RevenueCard,
  StatsDashboard,
  ProgressCard,
  MultiDonutChart,
  FloatingElement,
  ParallaxSection,
  MetricBadge,
  NotificationCard,
  BarChart,
  DonutChart,
  IntegrationCard,
  HowItWorksStep,
} from "@/components/MarketingGraphics";
import { TrendingUp, Palette, FileText, Target, Users, Code, ArrowRight, Play, CheckCircle, Zap, Shield, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Marketing",
    description: "Data-driven strategies to accelerate pipeline and revenue growth across every channel.",
    href: "/services/growth-marketing",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Website & Product Design",
    description: "Conversion-focused UI/UX that transforms visitors into customers.",
    href: "/services/design",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Strategy & SEO",
    description: "Authority-building content systems that drive organic traffic and leads.",
    href: "/services/content-seo",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Paid Media & Performance",
    description: "High-ROI advertising campaigns across search, social, and programmatic.",
    href: "/services/paid-media",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community & Social Growth",
    description: "Build engaged audiences and turn followers into brand advocates.",
    href: "/services/social-growth",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "High-performance web applications built for scale and conversions.",
    href: "/services/development",
  },
];

const testimonials = [
  {
    quote: "MWX transformed our entire growth engine. We went from 200 to 800 MQLs per month in just one quarter.",
    author: "Sarah Chen",
    role: "VP Marketing",
    company: "TechScale",
  },
  {
    quote: "Their strategic approach to content and SEO doubled our organic traffic in 6 months. Results speak.",
    author: "Marcus Johnson",
    role: "CEO",
    company: "FinFlow",
  },
  {
    quote: "The website they built converts 3x better than our previous one. Best investment we made this year.",
    author: "Elena Rodriguez",
    role: "CMO",
    company: "CloudBase",
  },
];

const clients = ["TechScale", "FinFlow", "CloudBase", "DataSync", "CryptoVault", "MetaLabs"];

const stats = [
  { value: "150", suffix: "+", label: "Happy Clients" },
  { value: "750", suffix: "k", label: "Leads Generated" },
  { value: "99", suffix: "%", label: "Client Retention" },
];

const homeFaqs = [
  {
    question: "What makes MWX different from other agencies?",
    answer: "We're a full-stack growth partner, not just an agency. We combine strategy, design, development, and marketing under one roof, ensuring seamless execution and faster results.",
  },
  {
    question: "How quickly can we expect to see results?",
    answer: "Most clients see measurable improvements within 30-60 days. Our data-driven approach allows us to optimize quickly and scale what works.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with companies at all stages - from seed-funded startups to Fortune 500 enterprises. Our flexible engagement models adapt to your needs.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in B2B SaaS, Fintech, Web3, and E-commerce. However, our frameworks apply across industries.",
  },
  {
    question: "How do you measure success?",
    answer: "We focus on metrics that matter: revenue growth, CAC reduction, conversion rates, and pipeline velocity. Every engagement includes clear KPIs.",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container-custom relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <AnimatedSection delay={0}>
                <span className="section-label inline-block mb-6">Full-Stack Growth Partner</span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Next-level efficiency with{" "}
                  <span className="text-gradient">MWX</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-xl mb-8">
                  Experience streamlined operations, efficiency and streamline your operations with MWX Technologies.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GradientButton size="lg" asChild>
                    <Link to="/contact">
                      Get started for free
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </GradientButton>
                  <GradientButton variant="outline" size="lg" asChild>
                    <Link to="/case-studies">
                      Book a demo
                      <Play className="w-4 h-4" />
                    </Link>
                  </GradientButton>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-background"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="text-foreground font-medium">4.8</span>
                    <span className="text-muted-foreground"> rated by 500+ users</span>
                  </div>
                </div>
              </AnimatedSection>
            </motion.div>

            {/* Right - Dashboard Graphics */}
            <div className="relative hidden lg:block">
              <FloatingElement delay={0} direction="up" className="absolute top-0 right-0">
                <RevenueCard />
              </FloatingElement>

              <FloatingElement delay={0.5} direction="down" className="absolute top-32 left-0">
                <StatsDashboard />
              </FloatingElement>

              <FloatingElement delay={1} direction="up" className="absolute bottom-0 right-10">
                <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-5 shadow-xl">
                  <MultiDonutChart />
                </div>
              </FloatingElement>

              <FloatingElement delay={1.5} direction="left" className="absolute top-20 left-20">
                <MetricBadge value="$41,490" label="This month" trend="+24%" />
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <ClientLogoMarquee />

      {/* Streamlined Operations Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Streamlined operations connectivity
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance business operability and seamlessly connect all your systems to work together seamlessly.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Cards */}
            <ParallaxSection speed={0.2}>
              <div className="space-y-4">
                <NotificationCard
                  title="New project started"
                  message="Sarah invited you to project"
                  avatar="SC"
                />
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-5 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm font-medium text-foreground mb-3">Effective strategies for success</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Data-driven approach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-xs text-muted-foreground">Continuous optimization</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ParallaxSection>

            {/* Center - Productivity Card */}
            <ParallaxSection speed={-0.1}>
              <motion.div
                className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xl h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium text-foreground mb-4">Proven productivity techniques</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-background/50 rounded-lg p-3">
                    <span className="text-sm text-muted-foreground">Tasks to start</span>
                    <span className="text-sm font-medium text-foreground">12</span>
                  </div>
                  <div className="flex items-center justify-between bg-background/50 rounded-lg p-3">
                    <span className="text-sm text-muted-foreground">In progress</span>
                    <span className="text-sm font-medium text-primary">8</span>
                  </div>
                  <div className="flex items-center justify-between bg-background/50 rounded-lg p-3">
                    <span className="text-sm text-muted-foreground">Completed</span>
                    <span className="text-sm font-medium text-green-400">24</span>
                  </div>
                </div>
              </motion.div>
            </ParallaxSection>

            {/* Right - Chart Card */}
            <ParallaxSection speed={0.15}>
              <motion.div
                className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-5 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Data Analysis</span>
                  <span className="text-xs text-primary">Live</span>
                </div>
                <div className="mb-4">
                  <BarChart data={[40, 65, 45, 80, 55, 70, 90]} colors={["primary", "accent", "primary", "warning", "accent", "primary", "accent"]} />
                </div>
                <p className="text-sm font-medium text-foreground">Strategies for getting more done</p>
                <p className="text-xs text-muted-foreground mt-1">Optimize your workflow with analytics</p>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-card/50 border-y border-border overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Graphics */}
            <ParallaxSection speed={0.2}>
              <div className="relative">
                <FloatingElement delay={0} direction="up">
                  <motion.div
                    className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-2xl p-6 border border-border/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Analytics AI</p>
                        <p className="text-xs text-muted-foreground">Real-time insights</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <DonutChart percentage={80} size={80} color="primary" />
                        <p className="text-xs text-muted-foreground mt-2">Efficiency</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-gradient">350+</p>
                        <p className="text-xs text-muted-foreground">Automations</p>
                      </div>
                    </div>
                  </motion.div>
                </FloatingElement>
              </div>
            </ParallaxSection>

            {/* Right - Content */}
            <div>
              <AnimatedSection>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why choose us?
                </h2>
                <p className="text-muted-foreground mb-8">
                  At MWX, we believe in the power of innovation and simplicity to transform businesses.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="p-5 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">Cloud Integration</h3>
                    <p className="text-sm text-muted-foreground">Seamlessly access your data and keep everything in sync.</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="p-5 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">Automation</h3>
                    <p className="text-sm text-muted-foreground">Streamline tasks, enhance productivity with AI tools.</p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.3}>
                <GradientButton className="mt-8" asChild>
                  <Link to="/services">
                    Know more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </GradientButton>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Data Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div>
              <AnimatedSection>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Secure data encryption
                </h2>
                <p className="text-muted-foreground mb-6">
                  Your security matters to all your data. We ensure your information remains safe with encryption measures for safety at its finest.
                </p>
              </AnimatedSection>

              <StaggerContainer className="space-y-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, text: "End-to-end encryption" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "SOC 2 Type II certified" },
                  { icon: <Zap className="w-5 h-5" />, text: "Real-time threat detection" },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                      <div className="text-primary">{item.icon}</div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right - Graphics */}
            <ParallaxSection speed={-0.15}>
              <motion.div
                className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Stage RX</span>
                  <span className="text-xs bg-green-400/20 text-green-400 px-2 py-0.5 rounded">Secure</span>
                </div>
                <BarChart data={[30, 50, 40, 70, 55, 85, 65, 90]} colors={["warning", "warning", "accent", "primary", "accent", "primary", "accent", "primary"]} />
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Encryption status</span>
                    <span className="text-green-400">Active</span>
                  </div>
                </div>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-3xl lg:text-5xl font-bold text-gradient mb-2">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Graphics */}
            <ParallaxSection speed={0.15}>
              <div className="space-y-4">
                <ProgressCard />
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-5 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm font-medium text-foreground mb-3">Project Progress</p>
                  <div className="flex items-center gap-4">
                    <DonutChart percentage={75} size={80} color="accent" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">75%</p>
                      <p className="text-xs text-muted-foreground">Completed tasks</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ParallaxSection>

            {/* Right - Content */}
            <div>
              <AnimatedSection>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  How it works
                </h2>
                <p className="text-muted-foreground mb-8">
                  At MWX, we believe in the power of innovation and simplicity to transform businesses.
                </p>
              </AnimatedSection>

              <div className="space-y-4">
                <HowItWorksStep number="1" title="Sign up" active />
                <HowItWorksStep number="2" title="Set up your dashboard" />
                <HowItWorksStep number="3" title="Integrate your tools" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-card/50 border-y border-border">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
              Full-Stack Growth Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end capabilities to scale your brand from startup to market leader.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <ServiceCard {...service} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Client Success</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4">
              Results That Speak
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <TestimonialCard {...testimonial} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={homeFaqs} />

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5" />
              <div className="absolute inset-0 bg-card/80" />
              
              {/* Content */}
              <div className="relative z-10 px-8 py-16 lg:py-24 text-center">
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Unlock your potential with MWX
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                  Discover the ability to streamline your processes to share their best recommendations and boost productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GradientButton size="lg" asChild>
                    <Link to="/contact">
                      Get started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </GradientButton>
                  <GradientButton variant="outline" size="lg" asChild>
                    <Link to="/contact">Request a Demo</Link>
                  </GradientButton>
                </div>

                {/* Trust Points */}
                <p className="text-sm text-muted-foreground mt-8">
                  It only takes one minute to complete.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
