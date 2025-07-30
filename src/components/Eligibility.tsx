import React from 'react';
import { GraduationCap, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Eligibility = () => {
  return (
    <motion.section
      id="eligibility"
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
            Eligibility & Requirements
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Check if you meet the requirements to join our program
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-purple-50 rounded-2xl p-8"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-purple-900">Eligibility</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Graduates of computer science or related fields</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Graduating students preparing for employment with an interest in AI, IT, or software</p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-blue-50 rounded-2xl p-8"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Requirements</h3>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 mb-4 font-medium">
                Must be able to understand lectures delivered in English without difficulty
              </p>
              <p className="text-sm text-gray-600 mb-4">English proficiency equivalent to:</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-700">TOEFL iBT</span>
                  <span className="font-semibold text-blue-600">87</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">TOEFL CBT</span>
                  <span className="font-semibold text-blue-600">213</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">TOEFL ITP</span>
                  <span className="font-semibold text-blue-600">550</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">IELTS</span>
                  <span className="font-semibold text-blue-600">5.5</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Eligibility;