const Contact = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        We'd love to hear from you! Reach out with any questions or feedback.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
          <p className="text-gray-700">+91-6371786140</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
          <p className="text-gray-700">support@bbq.com</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
          <p className="text-gray-700">123 Main Street, Bhubaneswar, Odisha, India</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
