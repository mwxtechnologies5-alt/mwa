"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Coffee,
  Laptop,
  Plane,
  GraduationCap,
  Dumbbell,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ParallaxBackground } from "@/components/ParallaxSection";

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Build scalable web applications using React, Next.js, and Node.js for our diverse client portfolio.",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Lead SEO, SEM, and content marketing campaigns for Web3 and tech clients globally.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Create stunning user interfaces and experiences for websites, apps, and digital products.",
  },
  {
    title: "PR & Communications Manager",
    department: "Public Relations",
    location: "Remote",
    type: "Full-time",
    description: "Manage media relations and PR campaigns for our portfolio of international clients.",
  },
  {
    title: "Community Manager",
    department: "Social Media",
    location: "Remote",
    type: "Full-time",
    description: "Build and nurture online communities across Discord, Telegram, Twitter, and other platforms.",
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Identify and close new business opportunities with startups and enterprises.",
  },
];

const benefits = [
  { icon: Laptop, title: "Remote First", description: "Work from anywhere in the world with flexible hours." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs." },
  { icon: Coffee, title: "Unlimited PTO", description: "Take the time you need to recharge and stay creative." },
  { icon: GraduationCap, title: "Learning Budget", description: "$2,000 annual budget for courses and conferences." },
  { icon: Plane, title: "Team Retreats", description: "Annual company retreats to amazing destinations." },
  { icon: Dumbbell, title: "Fitness Allowance", description: "Monthly stipend for gym or fitness activities." },
];

const values = [
  {
    title: "Innovation Driven",
    description: "We're constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Client Obsessed",
    description: "Every decision we make is guided by what's best for our clients and their success.",
  },
  {
    title: "Radically Transparent",
    description: "We believe in open communication, honest feedback, and sharing knowledge freely.",
  },
  {
    title: "Growth Mindset",
    description: "We're committed to continuous learning and helping each team member reach their potential.",
  },
];

export default function CareersPage() {
  return (
    <div className="relative">
      <ParallaxBackground
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        overlayOpacity={0.85}
        className="min-h-[70vh] flex items-center justify-center"
      >
        <div className="text-center px-6 py-32">
          <motion.span
            className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Careers
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join Our Team of
            <br />
            <span className="text-gradient">Digital Pioneers</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Help us shape the future of digital marketing and technology
            while working with the world&apos;s most innovative brands.
          </motion.p>
        </div>
      </ParallaxBackground>

      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
              Culture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Work at
              <span className="text-gradient-accent"> MRX Technologies?</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              We&apos;re building a team of passionate individuals who want to make
              a real impact in the digital world.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff00aa]/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-black font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 px-6 relative bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block">
              Perks & Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              We Take Care of
              <span className="text-gradient"> Our Team</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00f0ff]/30 transition-all text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#00f0ff]/10 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#00f0ff]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/50 text-sm">{benefit.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ff00aa] text-sm font-medium tracking-widest uppercase mb-4 block">
              Open Positions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your
              <span className="text-gradient-accent"> Next Role</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-4">
            {openPositions.map((position, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff00aa]/30 transition-all"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-[#ff00aa]" />
                        <h3 className="text-lg font-bold text-white">
                          {position.title}
                        </h3>
                      </div>
                      <p className="text-white/50 text-sm mb-3">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-white/40">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1 text-white/40">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs bg-[#ff00aa]/20 text-[#ff00aa] border border-[#ff00aa]/30">
                          {position.department}
                        </span>
                      </div>
                    </div>
                    <Button href="/contact" variant="outline" size="sm">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-90" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Don&apos;t See Your Role?
                </h2>
                <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                  We&apos;re always looking for talented individuals. Send us your
                  resume and let us know how you can contribute.
                </p>
                <Button href="/contact" className="bg-black text-white hover:bg-black/80">
                  Send Your Resume
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
