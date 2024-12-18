import { educations } from '../../services/data';

function EducationSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Formação</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((education, index) => (
            <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">{education.title}</h4>
              <p className="font-normal text-gray-500 text-md mb-4">
                {education.period}
              </p>
              {education.description && (
                <p className="font-normal text-gray-500 text-md mb-4">
                  {education.description}
                </p>
              )}
              <div className="relative">
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;