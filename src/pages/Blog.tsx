import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "10 Growth Marketing Strategies for 2026",
    excerpt: "Discover the latest growth marketing strategies that are driving results for B2B SaaS companies.",
    author: "Sarah Chen",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    category: "Growth Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    title: "The Future of Content Marketing in AI Era",
    excerpt: "How AI is transforming content creation and what it means for your marketing strategy.",
    author: "Marcus Johnson",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    category: "Content Strategy",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    title: "Conversion Rate Optimization Best Practices",
    excerpt: "Learn proven CRO techniques that have helped our clients achieve 3x conversion rates.",
    author: "Elena Rodriguez",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    title: "Building a Community-Led Growth Strategy",
    excerpt: "Why community is the new moat and how to build an engaged audience from scratch.",
    author: "Jake Torres",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    category: "Community",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="section-label">Blog</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Insights & Resources</h1>
            <p className="text-lg text-muted-foreground">Expert perspectives on growth, marketing, and building successful digital products.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <StaggerItem key={post.title}>
                <motion.article
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h2 className="font-display text-xl font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12">
            <GradientButton variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="w-4 h-4" />
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Get the latest insights delivered to your inbox weekly.</p>
            <GradientButton size="lg" asChild>
              <Link to="/newsletter">Subscribe Now<ArrowRight className="w-5 h-5" /></Link>
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
