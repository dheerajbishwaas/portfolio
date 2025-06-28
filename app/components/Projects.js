const projects = [
  {
    title: "Tohfa.gift",
    stack: "PHP, CodeIgniter 4",
    description: "E-commerce gifting platform with secure payment and PDF invoice generation."
  },
  {
    title: "JJ-Safety",
    stack: "Full Stack (PHP, JS)",
    description: "Online course platform with payment integration and certification tracking."
  },
  {
    title: "CCN-Scout",
    stack: "Node.js, Express",
    description: "Marketplace for players & coaches with booking system and payment flow."
  },
  {
    title: "SqueakyCheeks",
    stack: "Node.js",
    description: "Subscription-based product delivery system with order tracking and payments."
  },
  {
    title: "FreshAppointment",
    stack: "PHP, MySQL",
    description: "Booking platform for repair services with automated appointment scheduling."
  },
  {
    title: "TutoHub",
    stack: "Next.js, Node.js, JWT",
    description: "Study material sharing platform with Google OAuth and role-based access."
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-1">Stack: {project.stack}</p>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
