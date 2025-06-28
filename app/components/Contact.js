export default function Contact() {
  return (
    <section id="contact" className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="space-y-2 text-gray-700 text-base">
        <p>
          📧{' '}
          <a
            href="mailto:dheerajbishwaas@gmail.com"
            className="text-blue-600 hover:underline"
          >
            dheerajbishwaas@gmail.com
          </a>
        </p>
        <p>
          📞{' '}
          <a
            href="tel:+917528939625"
            className="text-blue-600 hover:underline"
          >
            +91 75289 39625
          </a>
        </p>
        <p>📍 Ludhiana, Punjab, India</p>
      </div>
    </section>
  );
}
