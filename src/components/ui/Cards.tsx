import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent" | "tertiary";
  hover?: boolean;
}

export const GlowCard = ({
  children,
  className = "",
  glowColor = "primary",
  hover = true,
}: GlowCardProps) => {
  const glowColors = {
    primary: "bg-primary/20",
    accent: "bg-accent/20",
    tertiary: "bg-tertiary/20",
  };

  return (
    <div
      className={cn(
        "relative group rounded-xl bg-card border border-border overflow-hidden transition-all duration-300",
        hover && "hover:border-primary/50 hover:shadow-lg card-lift",
        className
      )}
    >
      {/* Glow Effect */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-xl opacity-0 blur-xl transition-opacity duration-300",
          hover && "group-hover:opacity-100",
          glowColors[glowColor]
        )}
      />

      {/* Content */}
      <div className="relative z-10 bg-card rounded-xl">{children}</div>
    </div>
  );
};

interface GradientCardProps {
  children: ReactNode;
  className?: string;
}

export const GradientCard = ({ children, className = "" }: GradientCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden",
        className
      )}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-xl p-px bg-gradient-to-br from-primary via-accent to-tertiary">
        <div className="absolute inset-px rounded-xl bg-card" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  index: number;
  image?: string;
}

export const ServiceCard = ({ icon, title, description, href, index, image }: ServiceCardProps) => {
  return (
    <a
      href={href}
      className="group relative block rounded-xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 card-lift"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>
      )}

      <div className="p-6 lg:p-8">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
          <div className="text-primary">{icon}</div>
        </div>

        {/* Content */}
        <h3 className="relative z-10 font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Arrow */}
        <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Learn more
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
}

export const StatCard = ({ value, label, suffix = "" }: StatCardProps) => {
  return (
    <div className="text-center p-6 group">
      <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
        {value}
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <p className="text-sm text-muted-foreground uppercase tracking-wide">{label}</p>
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="relative rounded-xl bg-card border border-border p-6 lg:p-8 card-lift h-full">
      {/* Quote Mark */}
      <div className="absolute top-6 right-6 text-6xl font-display text-primary/20 leading-none">
        "
      </div>

      {/* Content */}
      <p className="relative z-10 text-foreground leading-relaxed mb-6">{quote}</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

interface CaseStudyCardProps {
  title: string;
  industry: string;
  outcome: string;
  image: string;
  href?: string;
}

export const CaseStudyCard = ({
  title,
  industry,
  outcome,
  image,
  href = "#",
}: CaseStudyCardProps) => {
  return (
    <a
      href={href}
      className="group relative block rounded-xl overflow-hidden card-lift"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/20 text-primary mb-3 border border-primary/30">
          {industry}
        </span>
        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-primary font-semibold">{outcome}</p>
      </div>
    </a>
  );
};