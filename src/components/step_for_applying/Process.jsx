import ProcessCard from "./ProcessCard";

export default function Process() {
  const steps = [
    "Research and Choose Country",
    "Check Eligibility",
    "Document Preparation",
    "University Application",
    "Visa Process",
    "Travel Arrangements",
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Journey Begins Here
          </h2>
          <p className="text-xl text-gray-600">
            Follow these steps to start your medical education abroad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
