import React from 'react';
import { Shield, Code, Server, Cloud, BarChart, GitBranch, Palette, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Curriculum = () => {
  const subjects = [
    { icon: Shield, title: "AI Ethics and Data Security", color: "bg-purple-600" },
    { icon: Code, title: "Web Development Basics and Advanced", color: "bg-purple-500" },
    { icon: Server, title: "Backend Development", color: "bg-green-500" },
    { icon: Cloud, title: "Cloud Services Utilization", color: "bg-purple-400" },
    { icon: BarChart, title: "Basis of Data Analysis", color: "bg-yellow-500" },
    { icon: GitBranch, title: "DevOps and CI/CD", color: "bg-orange-500" },
    { icon: Palette, title: "UI/UX Design Basics", color: "bg-pink-500" },
    { icon: Users, title: "Team Projects", color: "bg-indigo-500" }
  ];

  return (
    <motion.section
      id="curriculum"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-purple-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Curriculum
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive training covering essential skills for modern digital professionals
          </motion.p>
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> The curriculum is subject to change depending on circumstances. 
              For detailed information, please refer to the official website.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={`${subject.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <subject.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">{subject.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Curriculum;