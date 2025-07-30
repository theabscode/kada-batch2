import React from 'react';
import { BookOpen, Home, Monitor, Award, FileCheck, Network, Presentation, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Benefits = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Full tuition covered",
      description: "Korea Standard book training included"
    },
    {
      icon: Home,
      title: "Accommodation provided",
      description: "Housing arrangements included"
    },
    {
      icon: Monitor,
      title: "On-site PCs provided",
      description: "Workstations available during training"
    },
    {
      icon: Award,
      title: "Special recognition and certificates for outstanding trainees",
      description: "Recognition for exceptional performance"
    },
    {
      icon: FileCheck,
      title: "Certificate of completion issued",
      description: "Official certification upon successful completion"
    },
    {
      icon: Network,
      title: "Networking events for digital and AI talent development",
      description: "Industry connections and professional networking"
    },
    {
      icon: Presentation,
      title: "Portfolio building and Demo Day presentations",
      description: "Showcase projects and build professional portfolio"
    },
    {
      icon: Briefcase,
      title: "Opportunities for job placement",
      description: "Career placement assistance with leading companies in Indonesia and Korea"
    }
  ];

  return (
    <motion.section
      id="benefits"
      className="py-20 bg-white"
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
            Program Benefits
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive support and opportunities for your professional development
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors group"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-3 leading-tight">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;