import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Headphones, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const episodes = [
  {
    number: "EP 24",
    title: "Scaling from $1M to $10M ARR",
    guest: "Sarah Chen, VP Marketing at TechScale",
    duration: "45 min",
    date: "Dec 28, 2025",
    description: "Sarah shares the growth strategies that helped TechScale 10x their ARR in 18 months.",
  },
  {
    number: "EP 23",
    title: "The Future of AI in Marketing",
    guest: "Dr. James Liu, AI Researcher",
    duration: "52 min",
    date: "Dec 21, 2025",
    description: "Exploring how AI is transforming marketing automation and personalization.",
  },
  {
    number: "EP 22",
    title: "Building a Content Engine",
    guest: "Marcus Johnson, CEO at FinFlow",
    duration: "38 min",
    date: "Dec 14, 2025",
    description: "How to build a sustainable content machine that drives organic growth.",
  },
  {
    number: "EP 21",
    title: "Community-Led Growth Masterclass",
    guest: "Jake Torres, Founder at MetaLabs",
    duration: "48 min",
    date: "Dec 7, 2025",
    description: "The complete playbook for building and monetizing online communities.",
  },
];

const Podcast = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="section-label">Podcast</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">The Growth Show</h1>
            <p className="text-lg text-muted-foreground">Weekly conversations with growth leaders, marketers, and founders building the future.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <GradientButton size="lg">
                <Headphones className="w-5 h-5" />
                Listen on Spotify
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                <Play className="w-4 h-4" />
                Apple Podcasts
              </GradientButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground">Latest Episodes</h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-6">
            {episodes.map((episode, index) => (
              <StaggerItem key={episode.number}>
                <motion.div
                  className="group p-6 lg:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-primary">{episode.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-primary mb-2">{episode.guest}</p>
                      <p className="text-muted-foreground text-sm mb-3">{episode.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {episode.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {episode.date}
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                      <Play className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12">
            <GradientButton variant="outline" size="lg">
              View All Episodes
              <ArrowRight className="w-4 h-4" />
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;
