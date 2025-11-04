import "./HowToUse.css";
import { steps } from "../../Data/Data"; // ✅ Correct import

const HowToUse = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="how-to-use">
      <div className="container mx-auto px-4">
        <div className="container-text1 text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How To Use
          </h2>
          <p className="text-lg text-muted-foreground  mx-auto">
            Follow these three simple steps to get started
          </p>
        </div>

        <div className="cards grid md:grid-cols-3 gap-8 ">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="card-3d bg-card rounded-2xl p-8 text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                  <Icon className={`h-8 w-8 ${step.color}`} />
                </div>

                <h3 className="text-xl font-heading font-semibold">
                  {step.title}
                </h3>

                <p className="text-muted-foreground">{step.description}</p>

                {/* Step Number */}
                <div className="text-6xl font-heading font-bold text-primary/10">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
