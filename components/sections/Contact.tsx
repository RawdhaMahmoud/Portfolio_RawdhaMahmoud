export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              Or reach out via{" "}
              <a
                href="mailto:rawdha@example.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                rawdha@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
