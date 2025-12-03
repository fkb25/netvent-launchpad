import { Globe } from "lucide-react";

const Vision = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
          Vision
        </h2>
        
        <div className="mt-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Globe className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <p className="mt-8 text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
          To become the leading global hub of events.
        </p>
      </div>
    </section>
  );
};

export default Vision;
