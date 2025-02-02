import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4">Hi, I’m [Your Name]</h1>
          <p className="text-xl text-gray-400">Designer & Developer</p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {[1, 2, 3].map((project) => (
            <motion.div key={project} whileHover={{ scale: 1.05 }} className="bg-gray-900 rounded-lg p-6 cursor-pointer">
              <div className="h-64 bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Project {project}</h3>
              <p className="text-gray-400">A stunning project description.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Let’s Connect</h2>
        <motion.a href="mailto:you@example.com" whileHover={{ scale: 1.1 }} className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-bold">
          Send Email
        </motion.a>
      </section>
    </main>
  );
}
