import React from 'react';
import { Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#151c27] text-gray-200 pt-14 pb-0">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo & 설명 */}
          <div>
            <div className="flex items-center mb-3">
              <Globe className="w-6 h-6 text-blue-400 mr-2" />
              <span className="font-bold text-lg text-white">Korea-ASEAN Digital Academy</span>
            </div>
            <p className="mb-4 text-gray-400 text-sm">
              A comprehensive training program designed to nurture IT professionals through the collaboration between Korea and ASEAN countries.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:kada@elice.io" className="hover:text-blue-300 transition-colors">kada@elice.io</a>
            </div>
          </div>
          {/* Center: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#eligibility" className="hover:text-blue-300 transition-colors">Eligibility</a></li>
              <li><a href="#selection" className="hover:text-blue-300 transition-colors">Selection Process</a></li>
              <li><a href="#curriculum" className="hover:text-blue-300 transition-colors">Curriculum</a></li>
              <li><a href="#benefits" className="hover:text-blue-300 transition-colors">Program Benefits</a></li>
              <li>
                <a href="https://forms.gle/Jc3dMrgf6wu5w4h27" target="_blank" rel="noopener noreferrer" className="hover:bg-purple-700 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold inline-flex items-center transition-colors">
                  Apply Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7v6m0-6H7" /></svg>
                </a>
              </li>
            </ul>
          </div>
          {/* Right: Partners (예시 스타일, 실제 파트너는 삭제됨) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Partners</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#232b39] text-gray-200 px-3 py-1 rounded-md text-sm">ASEAN-KOREA</span>
              <span className="bg-[#232b39] text-gray-200 px-3 py-1 rounded-md text-sm">NIPA</span>
              <span className="bg-[#232b39] text-gray-200 px-3 py-1 rounded-md text-sm">ELICE</span>
              <span className="bg-[#232b39] text-gray-200 px-3 py-1 rounded-md text-sm">KSA</span>
              <span className="bg-[#232b39] text-gray-200 px-3 py-1 rounded-md text-sm">ASEAN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#232b39] pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Korea-ASEAN Digital Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;