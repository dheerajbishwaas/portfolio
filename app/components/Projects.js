const projects = [
  {
    title: "TutoHub",
    stack: "Next.js, Node.js, JWT",
    company: "Personal Project",
    description: "Study material sharing platform with Google OAuth and role-based access."
  },
  {
    title: "Tohfa.gift",
    stack: "PHP, CodeIgniter 4",
    company: "Greek Factory Inovation",
    description: "E-commerce gifting platform with secure payment and PDF invoice generation."
  },
  {
    title: "JJ-Safety",
    stack: "Full Stack (PHP, JS, Mysql)",
    company: "Inetweaver",
    description: "Online course platform with payment integration and certification tracking."
  },
  {
    title: "CCN-Scout",
    stack: "PHP, Laravel, Mysql",
    company: "Inetweaver",
    description: "Marketplace for players & coaches with booking system and payment flow."
  },
  {
    title: "SqueakyCheeks",
    stack: "Node.js",
    company: "Inetweaver",
    description: "Subscription-based product delivery system with order tracking and payments."
  },
  {
    title: "FreshAppointment",
    stack: "PHP, MySQL",
    company: "Inetweaver",
    description: "Booking platform for repair services with automated appointment scheduling."
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">Stack: {project.stack}</p>
            <p className="text-sm text-gray-500 mb-1 italic">
              {project.company}
            </p>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

