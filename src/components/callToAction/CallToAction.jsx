import Form from "./Form";

function ApplicationForm() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Begin Your Journey
          </h2>
          <p className="text-xl text-gray-600">
            Take the first step towards your medical career abroad
          </p>
        </div>
        <div className="relative">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ApplicationForm;
