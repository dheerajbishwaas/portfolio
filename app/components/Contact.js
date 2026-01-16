export default function Contact() {
  return (
    <section id="contact" className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact</h2>
      <div className="space-y-2 text-gray-700 dark:text-slate-300 text-base">
        <p>
          📧{' '}
          <a
            href="mailto:dheerajbishwaas@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            dheerajbishwaas@gmail.com
          </a>
        </p>
        <p>
          📞{' '}
          <a
            href="tel:+917528939625"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            +91 75289 39625
          </a>
        </p>
        <p>
          🔗{' '}
          <a
            href="https://www.linkedin.com/in/dheerajbishwas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>
        <p>
          🔗{' '}
          <a
            href="https://github.com/dheerajbishwaas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub Profile
          </a>
        </p>
        <p>
          📄{' '}
          <a
            href="/Dheeraj-Bishwas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            download
          >
            Download Resume
          </a>
        </p>
        <p className="dark:text-slate-400">📍 Ludhiana, Punjab, India</p>
      </div>
    </section>
  );
}
