import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientButton } from "@/components/ui/Buttons";
import { FAQSection } from "@/components/FAQSection";
import { ParallaxSection, FloatingElement, DonutChart, MetricBadge, NotificationCard } from "@/components/MarketingGraphics";
import { Mail, MapPin, Phone, Calendar, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactFaqs = [
  {
    question: "How quickly will I hear back?",
    answer: "We respond to all inquiries within 24 hours on business days. Most responses come within a few hours.",
  },
  {
    question: "What information should I include?",
    answer: "Share your current challenges, goals, timeline, and budget range. The more context, the better we can tailor our response.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! Our initial strategy call is complimentary. We'll discuss your needs and recommend the best approach.",
  },
  {
    question: "Can we schedule a call instead of filling the form?",
    answer: "Absolutely! Click the 'Book a Call' button to schedule a time directly on our calendar.",
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="max-w-xl">
              <span className="section-label">Contact</span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">Let's Talk Growth</h1>
              <p className="text-lg text-muted-foreground">Ready to scale? Fill out the form and we'll be in touch within 24 hours.</p>
            </AnimatedSection>

            {/* Floating Graphics */}
            <div className="relative hidden lg:block h-64">
              <FloatingElement delay={0} direction="up" className="absolute top-0 right-0">
                <NotificationCard 
                  title="New inquiry received" 
                  message="We'll respond within 24 hours" 
                  avatar="MX" 
                />
              </FloatingElement>

              <FloatingElement delay={0.5} direction="down" className="absolute bottom-0 left-10">
                <MetricBadge value="24hr" label="Response time" trend="Fast" />
              </FloatingElement>

              <FloatingElement delay={1} direction="left" className="absolute top-20 left-0">
                <motion.div
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <DonutChart percentage={99} size={50} color="primary" />
                    <div>
                      <p className="text-sm font-bold text-foreground">99%</p>
                      <p className="text-xs text-muted-foreground">Happy clients</p>
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <ParallaxSection speed={0.05}>
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground">Whether you're ready to start a project or just exploring options, we'd love to hear from you.</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: <Mail className="w-5 h-5" />, label: "Email", value: "mwxtechnologies5@gmail.com" },
                      { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 79058 58145" },
                      { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Varanasi, UP" },
                    ].map((item) => (
                      <motion.div 
                        key={item.label} 
                        className="flex items-center gap-4"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{item.icon}</div>
                        <div><p className="text-sm text-muted-foreground">{item.label}</p><p className="font-medium text-foreground">{item.value}</p></div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Response Time Card */}
                  <motion.div 
                    className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3"><Calendar className="w-5 h-5 text-primary" /><span className="font-semibold text-foreground">Prefer to schedule directly?</span></div>
                    <p className="text-sm text-muted-foreground mb-4">Book a 30-minute strategy call at your convenience.</p>
                    <GradientButton variant="outline" size="sm">Book a Call</GradientButton>
                  </motion.div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      className="p-4 rounded-lg bg-card border border-border text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-lg font-bold text-foreground">24hr</p>
                      <p className="text-xs text-muted-foreground">Response</p>
                    </motion.div>
                    <motion.div
                      className="p-4 rounded-lg bg-card border border-border text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <MessageSquare className="w-5 h-5 text-accent mx-auto mb-2" />
                      <p className="text-lg font-bold text-foreground">150+</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </motion.div>
                    <motion.div
                      className="p-4 rounded-lg bg-card border border-border text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-2" />
                      <p className="text-lg font-bold text-foreground">99%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction</p>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            </ParallaxSection>

            <ParallaxSection speed={-0.05}>
              <AnimatedSection direction="right">
                <motion.form 
                  className="p-8 rounded-2xl bg-card border border-border space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-foreground mb-2">Company Name *</label><input type="text" className="w-full h-12 px-4 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Acme Inc." /></div>
                    <div><label className="block text-sm font-medium text-foreground mb-2">Website</label><input type="url" className="w-full h-12 px-4 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="https://example.com" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-foreground mb-2">Your Name *</label><input type="text" className="w-full h-12 px-4 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Jane Doe" /></div>
                    <div><label className="block text-sm font-medium text-foreground mb-2">Email *</label><input type="email" className="w-full h-12 px-4 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="jane@example.com" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-foreground mb-2">Monthly Budget</label><select className="w-full h-12 px-4 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"><option>Select budget range</option><option>$5K - $10K</option><option>$10K - $25K</option><option>$25K - $50K</option><option>$50K+</option></select></div>
                    <div><label className="block text-sm font-medium text-foreground mb-2">Timeline</label><select className="w-full h-12 px-4 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"><option>Select timeline</option><option>ASAP</option><option>1-2 months</option><option>3+ months</option><option>Just exploring</option></select></div>
                  </div>
                  <div><label className="block text-sm font-medium text-foreground mb-2">Primary Goal *</label><textarea rows={4} className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all" placeholder="Tell us about your growth goals..."></textarea></div>
                  <GradientButton size="lg" className="w-full">Submit Inquiry</GradientButton>
                  <p className="text-xs text-center text-muted-foreground">We'll respond within 24 hours. No spam, ever.</p>
                </motion.form>
              </AnimatedSection>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={contactFaqs}
        title="Contact FAQ"
        subtitle="Common questions about getting in touch"
        className="bg-card/50 border-t border-border"
      />
    </Layout>
  );
};

export default Contact;
