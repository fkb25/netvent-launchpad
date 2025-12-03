import { Target, Users, BarChart3 } from "lucide-react";

const missionPoints = [
  {
    icon: Target,
    text: "Centralizes event discovery and participation.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    text: "Enables personalized attendee experiences.",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: BarChart3,
    text: "Offers organizers robust tools for engagement and analytics.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
];

const Mission = () => {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container-narrow">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-primary">
            Mission
          </span>
          <p className="mt-6 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            To provide a seamless platform that:
          </p>
        </div>
        
        <ul className="mt-12 grid gap-6">
          {missionPoints.map((point, index) => (
            <li
              key={index}
              className={`group flex items-start gap-5 rounded-2xl bg-gradient-to-r ${point.gradient} p-6 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-${point.color}/20 ring-2 ring-${point.color}/30 transition-transform group-hover:scale-110`}>
                <point.icon className={`h-6 w-6 text-${point.color}`} />
              </div>
              <p className="pt-2.5 text-base font-medium text-foreground sm:text-lg">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Mission;
