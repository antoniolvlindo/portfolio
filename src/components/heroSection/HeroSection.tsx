import React from 'react';

function HeroSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <img src="assets/image/home-img.png" alt="Image" />
          </div>
          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Kate Wolff</h6>
          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Senior Backend Developer</h1>
          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            I have a passion for software. I enjoy creating tools that make life easier for people.
          </p>
          <a href="#" className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;