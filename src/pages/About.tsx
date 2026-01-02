import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, Shield, Users, Award, TrendingUp, BarChart3, CheckCircle } from "lucide-react";
import { DonutChart, BarChart, FloatingElement, ParallaxSection, MetricBadge, StatsDashboard } from "@/components/MarketingGraphics";
import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Morrison",
    role: "CEO & Founder",
    bio: "Former VP of Growth at a unicorn SaaS company. 15+ years scaling B2B companies from Series A to IPO.",
    initial: "A",
  },
  {
    name: "Sarah Chen",
    role: "Chief Strategy Officer",
    bio: "Ex-McKinsey consultant turned growth marketer. Specializes in connecting brand strategy to measurable outcomes.",
    initial: "S",
  },
  {
    name: "Marcus Williams",
    role: "Head of Creative",
    bio: "Award-winning creative director with work featured in Fast Company and AdAge.",
    initial: "M",
  },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategy First",
    description: "Every engagement starts with deep understanding of your business, market, and goals.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Data Always",
    description: "Decisions backed by data, not opinions. We measure everything and optimize relentlessly.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Radical Transparency",
    description: "No vanity metrics. No hiding behind jargon. You'll always know exactly where you stand.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnership Mindset",
    description: "We're an extension of your team, not a vendor. Your success is our success.",
  },
];

const stats = [
  { value: "2018", label: "Founded" },
  { value: "45+", label: "Team Members" },
  { value: "300+", label: "Projects Delivered" },
  { value: "$50M+", label: "Revenue Generated" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-xl">
              <span className="section-label">About MWX</span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                We Build Growth Engines for{" "}
                <span className="text-gradient">Ambitious Brands</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                MWX Technologies is a full-stack growth, marketing, and web partner helping brands build authority and convert audiences into revenue.
              </p>
            </AnimatedSection>

            {/* Right - Graphics */}
            <div className="relative hidden lg:block h-80">
              <FloatingElement delay={0} direction="up" className="absolute top-0 right-0">
                <MetricBadge value="300+" label="Projects" trend="+45%" />
              </FloatingElement>
              <FloatingElement delay={0.5} direction="down" className="absolute top-20 left-0">
                <StatsDashboard />
              </FloatingElement>
              <FloatingElement delay={1} direction="left" className="absolute bottom-0 right-10">
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <DonutChart percentage={92} size={80} color="accent" label="Success" />
                </motion.div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="section-label">Our Mission</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
                Turn Ambitious Goals Into Measurable Results
              </h2>
              <p className="text-muted-foreground mb-6">
                We exist to bridge the gap between where brands are and where they want to be. 
                Too many companies waste resources on scattered tactics without a cohesive strategy.
              </p>
              <p className="text-muted-foreground">
                Our approach is simple: understand deeply, strategize thoroughly, execute precisely, 
                and optimize relentlessly. No fluff. Just results that matter.
              </p>
            </AnimatedSection>

            <ParallaxSection speed={0.15}>
              <motion.div
                className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl border border-border/50"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/80 backdrop-blur rounded-xl p-4 text-center">
                    <DonutChart percentage={85} size={70} color="primary" />
                    <p className="text-xs text-muted-foreground mt-2">Client Growth</p>
                  </div>
                  <div className="bg-card/80 backdrop-blur rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-2">Performance</p>
                    <BarChart data={[50, 70, 60, 85, 75]} colors={["primary", "accent", "primary", "accent", "warning"]} />
                  </div>
                </div>
                <blockquote className="text-lg font-display text-foreground text-center">
                  "Strategy without execution is hallucination."
                </blockquote>
                <p className="text-sm text-muted-foreground text-center mt-2">MWX Founding Principle</p>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-card/50 border-y border-border">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Our Values</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4">
              What Drives Us
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Leadership</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Operators, not just advisors. We've built and scaled companies ourselves.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <StaggerItem key={member.name}>
                <ParallaxSection speed={index % 2 === 0 ? 0.1 : -0.1}>
                  <div className="group p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="font-display text-2xl font-bold text-primary-foreground">
                        {member.initial}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </ParallaxSection>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
        <div className="container-custom text-center">
          <AnimatedSection>
            <div className="flex justify-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Partner?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss how we can accelerate your growth. No pitch decks, just strategy.
            </p>
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
