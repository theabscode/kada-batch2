import React from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const ProgramOverview = () => {
  return (
    <motion.section
      id="program-overview"
      className="pt-52 pb-20 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 min-h-[60vh]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Korea-ASEAN Digital Academy Overview
          </motion.h2>
          <motion.p
            className="text-xl text-purple-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our comprehensive training program designed to develop digital and AI talent
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
            icon: <Users className="w-12 h-12 text-purple-600 mb-4" />,
            title: 'Participants',
            value: '60',
            desc: 'In-person training format'
          }, {
            icon: <Calendar className="w-12 h-12 text-purple-600 mb-4" />,
            title: 'Application Deadline',
            value: 'August 31, 2025',
            desc: "Don't miss out!"
          }, {
            icon: <Clock className="w-12 h-12 text-purple-600 mb-4" />,
            title: 'Training Period',
            value: 'Sep 15 - Nov 13',
            desc: 'Monday to Friday'
          }, {
            icon: <MapPin className="w-12 h-12 text-purple-600 mb-4" />,
            title: 'Schedule',
            value: '10:00 AM - 5:00 PM',
            desc: 'Full-time program'
          }].map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              {card.icon}
              <h3 className="text-xl font-bold text-purple-900 mb-2">{card.title}</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">{card.value}</p>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-6">Training Venue</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-purple-800 mb-4">BPPTIK Kementerian Komdigi</h4>
              <p className="text-gray-600 leading-relaxed">
                Jl. Sekolah Hijau Jalan Jababeka Raya No.2, Simpangan, Kec. Cikarang Utara, 
                Kabupaten Bekasi, Jawa Barat 17530, Indonesia
              </p>
            </div>
            <a 
  href="https://maps.app.goo.gl/Y61MmKQGTpRmdKg18" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-purple-50 rounded-lg p-6 block hover:bg-purple-100 transition-colors cursor-pointer"
>
  <MapPin className="w-8 h-8 text-purple-600 mb-3" />
  <p className="text-purple-800 font-medium">Training Location</p>
</a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProgramOverview;