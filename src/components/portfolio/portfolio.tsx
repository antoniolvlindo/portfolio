import React from 'react';
import { projects } from '../../services/data';

function PortfolioSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>
            <p className="font-normal text-gray-500 text-xs md:text-base">
              Aqui estão alguns dos meus projetos.
            </p>
          </div>
          <div className="space-y-24 lg:ml-20">
            {projects.map((project, index) => (
              <div key={index} className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">{String(index + 1).padStart(2, '0')}</h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">{project.title}</h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    {project.description}
                  </p>
                  <p className="font-normal text-blue-500 text-sm md:text-base">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    {project.link && (
                      <>
                        {" | "}
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>
                      </>
                    )}
                  </p>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Tecnologias Utilizadas: {project.technologies.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;