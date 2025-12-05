export default function BookADemo() {
  return (
    <main className="my-18 p-8 max-w-2xl mx-auto">
      <section>
        <h1 className="text-center text-4xl font-bold mb-4" data-aos="fade-up">
          Book a Demo
        </h1>
        <p
          className="text-center mb-8 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Interested in seeing how our services can benefit your business?
          Schedule a personalized walkthrough today.
        </p>

        <div
          className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg p-6 space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:mrepol742@gmail.com"
              className="text-violet-600 hover:underline"
            >
              mrepol742@gmail.com
            </a>
          </span>
          <span className="block">
            <strong>Facebook:</strong>{" "}
            <a
              href="https://facebook.com/melvinjonesrepol"
              className="text-violet-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message via Facebook
            </a>
          </span>
          <p className="text-sm text-gray-500">
            ⚠️ Please note: The following project is currently hosted using
            tunneling (via <strong>ngrok</strong> for backend and{" "}
            <strong>devtunnel</strong> for fontend) due to the cost of hosting
            services. This means the demo is accessible only when the tunneling
            service is active. If you encounter any issues, please try again
            later or contact us.
          </p>

          <button className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-700 transition mr-5">
            Axleshift
          </button>
          <button className="bg-violet-600 text-white py-2 px-5 rounded hover:bg-violet-700 transition">
            Point of Sale
          </button>
        </div>
      </section>
    </main>
  );
}
