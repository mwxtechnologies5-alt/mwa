import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { Link } from "react-router-dom";
import { Zap, Heart, Globe, Briefcase, Coffee, TrendingUp } from "lucide-react";

const benefits = [
  { icon: <Zap className="w-5 h-5" />, title: "Remote-First", description: "Work from anywhere in the world" },
  { icon: <Heart className="w-5 h-5" />, title: "Health & Wellness", description: "Comprehensive health benefits" },
  { icon: <Globe className="w-5 h-5" />, title: "Unlimited PTO", description: "Take the time you need" },
  { icon: <Briefcase className="w-5 h-5" />, title: "Equity", description: "Share in our success" },
  { icon: <Coffee className="w-5 h-5" />, title: "Learning Budget", description: "$2K annual for growth" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Career Growth", description: "Clear advancement paths" },
];

const jobs = [
  { title: "Growth Marketer", type: "Full-time", location: "Remote", description: "Drive demand generation and growth strategies for our B2B clients. 3+ years in growth/demand gen required." },
  { title: "Frontend Engineer", type: "Full-time", location: "Remote", description: "Build beautiful, performant web experiences. React/TypeScript expertise required. Design sensibility a plus." },
  { title: "Content Strategist", type: "Full-time", location: "Remote", description: "Create content strategies that drive organic growth. SEO expertise and B2B writing experience required." },
];

const Careers = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="section-label">Careers</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Join the Team</h1>
            <p className="text-lg text-muted-foreground">Help ambitious brands scale. Work with exceptional people. Grow your career.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Why MWX</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-4">Benefits & Perks</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{b.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50 border-y border-border">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Open Roles</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-4">Current Openings</h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <AnimatedSection key={job.title} delay={index * 0.1}>
                <div className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{job.type} • {job.location}</p>
                      <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                    </div>
                    <GradientButton variant="outline" asChild><Link to="/contact">Apply</Link></GradientButton>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Don't See Your Role?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">We're always looking for exceptional talent. Send us your info.</p>
            <GradientButton size="lg" asChild><Link to="/contact">Get in Touch</Link></GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
