import { motion } from "framer-motion";

interface ClientLogoMarqueeProps {
  title?: string;
  clients?: string[];
  className?: string;
}

const defaultClients = [
  "TechScale",
  "FinFlow",
  "CloudBase",
  "DataSync",
  "CryptoVault",
  "MetaLabs",
  "NexGen",
  "Quantum AI",
  "ByteWave",
  "SkyNet Pro",
];

export const ClientLogoMarquee = ({
  title = "Trusted by industry leaders",
  clients = defaultClients,
  className = "",
}: ClientLogoMarqueeProps) => {
  // Double the clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className={`py-12 border-y border-border bg-card/50 overflow-hidden ${className}`}>
      <div className="container-custom mb-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider">
          {title}
        </p>
      </div>

      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          className="flex items-center gap-16"
          animate={{
            x: [0, -50 * clients.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 flex items-center gap-3"
            >
              {/* Simple logo placeholder with gradient */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">{client.charAt(0)}</span>
              </div>
              <span className="text-xl font-display font-bold text-muted-foreground/60 whitespace-nowrap hover:text-foreground transition-colors">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - opposite direction */}
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16"
          animate={{
            x: [-50 * clients.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client}-reverse-${index}`}
              className="flex-shrink-0 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-accent">{client.charAt(0)}</span>
              </div>
              <span className="text-xl font-display font-bold text-muted-foreground/60 whitespace-nowrap hover:text-foreground transition-colors">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
