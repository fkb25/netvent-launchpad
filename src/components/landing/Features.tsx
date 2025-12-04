import { 
  Search, 
  Calendar, 
  MessageSquare, 
  MapPin, 
  BadgeCheck, 
  BarChart3, 
  Users, 
  LayoutDashboard 
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Event Discovery",
    description: "Search and filter events by map, location, interest, connections or date.",
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Personalized Agendas",
    description: "Create customized calendar and timed journey maps.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Attendee Networking",
    description: "Access shared interests' profiles, share on feed, messages, & set meeting appointments.",
    color: "accent",
  },
  {
    icon: LayoutDashboard,
    title: "Organizer Dashboard",
    description: "Manage event details, registrations, see heat-map view & data analytics.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "Interactive Engagement",
    description: "Participate in live polls, Q&A sessions, and feedback surveys.",
    color: "secondary",
  },
  {
    icon: MapPin,
    title: "Venue Navigation",
    description: "Utilize live maps to find users, reach booths, sessions, and amenities.",
    color: "accent",
  },
  {
    icon: BadgeCheck,
    title: "Automated Registration",
    description: "Streamline badge creation and check-in/out processes.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Organizers Insights",
    description: "Receive full analytical reports on attendee engagement and feedback.",
    color: "secondary",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.3)]",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/20",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--glow-secondary)/0.3)]",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--glow-accent)/0.3)]",
  },
};

const Features = () => {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Features
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Seamless Events
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools for attendees and organizers to create unforgettable event experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            const Icon = feature.icon;
            
            return (
              <div
                key={feature.title}
                className={`group relative rounded-2xl border ${colors.border} bg-card p-6 transition-all duration-300 hover:-translate-y-1 ${colors.glow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} mb-4`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
