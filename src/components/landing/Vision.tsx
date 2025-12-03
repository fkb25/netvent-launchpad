import { Globe, Zap, TrendingUp } from "lucide-react";

const Vision = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
      
      <div className="container-narrow text-center">
        <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-accent">
          Vision
        </span>
        
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent">
              <Globe className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
        
        <p className="mt-10 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          To become the <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">leading global hub</span> of events.
        </p>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            AI-Powered
          </div>
          <div className="flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            <TrendingUp className="h-4 w-4" />
            Data-Driven
          </div>
          <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Globe className="h-4 w-4" />
            Global Scale
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
