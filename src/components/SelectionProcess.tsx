import React from 'react';
import { FileText, ClipboardCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const SelectionProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Document Screening",
      description: "Initial review of application documents and qualifications"
    },
    {
      icon: ClipboardCheck,
      title: "Pre-assessment",
      description: "Skills assessment and evaluation of technical knowledge"
    },
    {
      icon: Award,
      title: "Final Selection",
      description: "Final review and selection of qualified candidates"
    }
  ];

  return (
    <motion.section
      id="selection"
      className="py-20 gradient-bg text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Selection Process
          </motion.h2>
          <motion.p
            className="text-xl text-purple-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our comprehensive 3-step selection process ensures we find the best candidates
          </motion.p>
        </div>
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-purple-100">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-white/30"></div>
                    <div className="w-0 h-0 border-l-4 border-l-white/30 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SelectionProcess;