import { Target, Users, BarChart3 } from "lucide-react";

const missionPoints = [
  {
    icon: Target,
    text: "Centralizes event discovery and participation.",
  },
  {
    icon: Users,
    text: "Enables personalized attendee experiences.",
  },
  {
    icon: BarChart3,
    text: "Offers organizers robust tools for engagement and analytics.",
  },
];

const Mission = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Mission
          </h2>
          <p className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
            To provide a seamless platform that:
          </p>
        </div>
        
        <ul className="mt-12 space-y-6">
          {missionPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-xl bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="pt-2 text-base text-foreground sm:text-lg">
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
