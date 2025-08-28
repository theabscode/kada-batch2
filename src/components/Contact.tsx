import React from "react";
import { Calendar, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="flex justify-center items-center py-24 bg-gradient-to-br from-purple-800 via-purple-600 to-purple-700"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-2xl rounded-2xl shadow-lg px-4 sm:px-8 py-12 flex flex-col items-center bg-gradient-to-br from-purple-700 via-purple-500 to-purple-600 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Ready to Advance Your Career?
        </h2>
        <p className="text-lg text-purple-100 text-center mb-8 max-w-2xl mx-auto">
          Join the Korea-ASEAN Digital Academy to gain valuable skills,
          networking opportunities, and potential job placements. Applications
          are open until September 5, 2025.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 w-full">
          <div className="flex items-center bg-purple-400 bg-opacity-30 rounded-lg px-6 py-3 text-white text-base w-full md:w-auto justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            Deadline: September 5, 2025
          </div>
          <div className="flex items-center bg-purple-400 bg-opacity-30 rounded-lg px-6 py-3 text-white text-base w-full md:w-auto justify-center">
            <Mail className="w-5 h-5 mr-2" />
            Contact: kada@elice.io
          </div>
        </div>
        <div className="flex justify-center w-full mb-8">
          <a
            href="https://forms.gle/Jc3dMrgf6wu5w4h27"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-purple-100 flex items-center transition-colors text-lg w-full sm:w-auto justify-center"
          >
            Submit Your Application <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
        {/* 안내 띠 */}
        <div className="w-full bg-purple-900 bg-opacity-80 py-3 px-4 text-center rounded-lg mt-4">
          <p className="text-purple-100 text-sm">
            For any questions about the application process, please contact the
            program coordinators at{" "}
            <span className="font-bold">kada@elice.io</span>.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
