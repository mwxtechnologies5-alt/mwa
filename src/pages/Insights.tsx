import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, BarChart3, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Q4 2025 Growth Report",
    description: "Key metrics and trends from our client portfolio showing 3.2x average growth.",
    type: "Report",
    date: "Dec 2025",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "B2B SaaS Benchmark Study",
    description: "Industry benchmarks for CAC, LTV, and conversion rates across 50+ companies.",
    type: "Research",
    date: "Nov 2025",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Content ROI Calculator",
    description: "Interactive tool to measure the true ROI of your content marketing efforts.",
    type: "Tool",
    date: "Oct 2025",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Growth Playbook: Series A to B",
    description: "Strategic framework for scaling from Series A to Series B stage.",
    type: "Playbook",
    date: "Sep 2025",
  },
];

const Insights = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="section-label">Insights</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Data-Driven Insights</h1>
            <p className="text-lg text-muted-foreground">Research, reports, and tools to help you make informed growth decisions.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <StaggerItem key={insight.title}>
                <motion.div
                  className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary shrink-0">
                      {insight.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{insight.type}</span>
                        <span className="text-xs text-muted-foreground">{insight.date}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{insight.description}</p>
                      <button className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Download <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Want Custom Research?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">We can create custom reports and benchmarks tailored to your industry.</p>
            <GradientButton size="lg" asChild>
              <Link to="/contact">Request Research<ArrowRight className="w-5 h-5" /></Link>
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
