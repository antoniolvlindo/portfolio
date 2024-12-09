import React from 'react';
import { experiences } from '../../services/data'

function ExperienceSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experiências</h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">Empresa</h6>
            {experiences.map((experience, index) => (
              <p key={index} className="font-semibold text-gray-600 text-base">
                {experience.company}
              </p>
            ))}
          </div>
          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">Cargo</h6>
            {experiences.map((experience, index) => (
              <p key={index} className="font-normal text-gray-400 text-base">
                {experience.position}
              </p>
            ))}
          </div>
          <div className="space-y-8 md:space-y-16">
            <h6 className="font-medium text-gray-400 text-base uppercase">Ano</h6>
            {experiences.map((experience, index) => (
              <p key={index} className="font-normal text-gray-400 text-base">
                {experience.period}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;