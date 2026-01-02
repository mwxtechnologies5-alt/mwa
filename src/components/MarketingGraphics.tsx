import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Donut Chart Component
export const DonutChart = ({
  percentage = 75,
  color = "primary",
  size = 120,
  label,
}: {
  percentage?: number;
  color?: "primary" | "accent" | "warning";
  size?: number;
  label?: string;
}) => {
  const strokeWidth = size / 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    primary: "stroke-primary",
    accent: "stroke-accent",
    warning: "stroke-warning",
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          opacity={0.2}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={colorMap[color]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-foreground">{percentage}%</span>
        {label && <span className="text-xs text-muted-foreground">{label}</span>}
      </div>
    </div>
  );
};

// Bar Chart Component
export const BarChart = ({
  data = [65, 85, 45, 95, 70, 55],
  colors = ["primary", "accent", "warning", "primary", "accent", "warning"],
}: {
  data?: number[];
  colors?: string[];
}) => {
  const colorMap: Record<string, string> = {
    primary: "bg-primary",
    accent: "bg-accent",
    warning: "bg-warning",
  };

  return (
    <div className="flex items-end gap-2 h-24">
      {data.map((value, index) => (
        <motion.div
          key={index}
          className={`w-6 rounded-t ${colorMap[colors[index]] || "bg-primary"}`}
          initial={{ height: 0 }}
          whileInView={{ height: `${value}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
};

// Line Chart Component
export const LineChart = () => {
  const points = [20, 45, 35, 60, 50, 75, 65, 90];
  const width = 200;
  const height = 80;
  const maxValue = Math.max(...points);
  
  const pathData = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - (point / maxValue) * height;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      <motion.path
        d={pathData}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      {points.map((point, index) => (
        <motion.circle
          key={index}
          cx={(index / (points.length - 1)) * width}
          cy={height - (point / maxValue) * height}
          r={4}
          className="fill-primary"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          viewport={{ once: true }}
        />
      ))}
    </svg>
  );
};

// Revenue Overview Card
export const RevenueCard = () => {
  return (
    <motion.div
      className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-5 shadow-xl w-64"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Revenue overview</span>
        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">Live</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="text-2xl font-bold text-foreground">$210,496</p>
          <p className="text-xs text-green-400 mt-1">+18.2% from last month</p>
        </div>
        <DonutChart percentage={78} size={70} color="primary" />
      </div>
    </motion.div>
  );
};

// Stats Dashboard Card
export const StatsDashboard = () => {
  return (
    <motion.div
      className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-5 shadow-xl w-72"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-foreground">Analytics</span>
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="w-2 h-2 rounded-full bg-warning" />
        </div>
      </div>
      <div className="mb-4">
        <LineChart />
      </div>
      <div className="flex gap-4 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-muted-foreground">Visits</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-muted-foreground">Conversions</span>
        </div>
      </div>
    </motion.div>
  );
};

// Progress Card
export const ProgressCard = () => {
  return (
    <motion.div
      className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-5 shadow-xl w-64"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Weekly Progress</p>
          <p className="text-xs text-muted-foreground">Last 7 days</p>
        </div>
      </div>
      <BarChart />
    </motion.div>
  );
};

// Metric Badge
export const MetricBadge = ({
  value,
  label,
  trend = "+12%",
}: {
  value: string;
  label: string;
  trend?: string;
}) => {
  return (
    <motion.div
      className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-4 py-3 shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-3">
        <div>
          <p className="text-lg font-bold text-foreground">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
        <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded">{trend}</span>
      </div>
    </motion.div>
  );
};

// Floating Notification Card
export const NotificationCard = ({
  title,
  message,
  avatar = "JD",
}: {
  title: string;
  message: string;
  avatar?: string;
}) => {
  return (
    <motion.div
      className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl w-64"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
          {avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground truncate">{message}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Parallax Container Component - Mobile optimized
export const ParallaxSection = ({
  children,
  className = "",
  speed = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Reduce parallax effect on mobile for better performance
  const mobileSpeed = isMobile ? speed * 0.3 : speed;
  const y = useTransform(scrollYProgress, [0, 1], [mobileSpeed * 100, mobileSpeed * -100]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={isMobile ? {} : { y }}>{children}</motion.div>
    </div>
  );
};

// Floating Element with Parallax - Mobile optimized
export const FloatingElement = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  
  // Reduced animations on mobile for better performance
  const animations = {
    up: { y: isMobile ? [0, -8, 0] : [0, -15, 0] },
    down: { y: isMobile ? [0, 8, 0] : [0, 15, 0] },
    left: { x: isMobile ? [0, -5, 0] : [0, -10, 0] },
    right: { x: isMobile ? [0, 5, 0] : [0, 10, 0] },
  };

  return (
    <motion.div
      className={className}
      animate={animations[direction]}
      transition={{
        duration: isMobile ? 5 : 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Multi-segment Donut Chart (like the reference)
export const MultiDonutChart = () => {
  const segments = [
    { percentage: 35, color: "hsl(var(--primary))", label: "Direct" },
    { percentage: 25, color: "hsl(var(--accent))", label: "Organic" },
    { percentage: 20, color: "hsl(var(--warning))", label: "Referral" },
    { percentage: 20, color: "hsl(142, 76%, 36%)", label: "Social" },
  ];

  const size = 140;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  let cumulativePercentage = 0;

  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <svg width={size} height={size} className="rotate-[-90deg]">
        {segments.map((segment, index) => {
          const offset = circumference - (segment.percentage / 100) * circumference;
          const rotation = (cumulativePercentage / 100) * 360;
          cumulativePercentage += segment.percentage;

          return (
            <motion.circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center" }}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-foreground">12M+</span>
        <span className="text-xs text-muted-foreground">Total Reach</span>
      </div>
    </motion.div>
  );
};

// Integration Card
export const IntegrationCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => {
  return (
    <motion.div
      className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg flex items-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.5)" }}
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-lg font-bold text-gradient">{value}</p>
      </div>
    </motion.div>
  );
};

// How it Works Steps
export const HowItWorksStep = ({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) => {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          active
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {number}
      </div>
      <span className={active ? "text-foreground font-medium" : "text-muted-foreground"}>
        {title}
      </span>
    </motion.div>
  );
};
