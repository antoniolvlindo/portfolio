import { abouts } from '../../services/data'

function FeaturesSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {abouts.map((about, index) => (
            <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">{about.title}</h4>
              <p className="font-normal text-gray-500 text-md">
                {about.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;