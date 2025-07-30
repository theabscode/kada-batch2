import React from 'react';
import akcfImg from '../../logo/akcf.jpg';
import mcdaImg from '../../logo/mcda.svg';
import nipaImg from '../../logo/nipa.png';
import eliceImg from '../../logo/elice.png';
import ksaImg from '../../logo/ksa.jpg';
import aseanImg from '../../logo/asean.svg';

const logoMap: Record<string, string> = {
  AKCF: akcfImg as string,
  MCDA: mcdaImg as string,
  NIPA: nipaImg as string,
  elice: eliceImg as string,
  KSA: ksaImg as string,
  ASEAN: aseanImg as string,
};

const Partners = () => {
  const partners = [
    {
      name: "AKCF",
      fullName: "ASEAN-KOREA COOPERATION FUND",
      description: "Supporting ASEAN-Korea cooperation initiatives",
    },
    {
      name: "MCDA",
      fullName: "Ministry of Communications and Digital Affairs",
      description: "Government support for digital transformation",
    },
    {
      name: "NIPA",
      fullName: "National IT Industry Promotion Agency",
      description: "Promoting IT industry development",
    },
    {
      name: "elice",
      fullName: "elice",
      description: "Leading education technology platform",
    },
    {
      name: "KSA",
      fullName: "KOREAN STANDARDS ASSOCIATION",
      description: "Quality standards and certification",
    },
    {
      name: "ASEAN",
      fullName: "Association of Southeast Asian Nations",
      description: "Regional intergovernmental organization",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Partner Organizations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supported by leading organizations committed to digital talent development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {logoMap[partner.name] ? (
                  <img
                    src={logoMap[partner.name]}
                    alt={partner.name}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <span className="text-purple-600 font-bold text-lg">{partner.name.charAt(0)}</span>
                )}
              </div>
              <p className="text-sm font-medium text-purple-600 mb-3">{partner.fullName}</p>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;