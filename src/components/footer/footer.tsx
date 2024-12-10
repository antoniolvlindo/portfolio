import React from 'react';
import email from '../../assets/icons/o-email.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

function Footer() {
  return (
    <footer className="py-10 md:py-16 mb-20 md:mb-40 lg:mb-52">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Contato</h1>
          <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
            Estou sempre aberto a novas oportunidades e colaborações. Se você está interessado em trabalhar comigo ou tem alguma pergunta, sinta-se à vontade para entrar em contato.
          </p>
          <div className="flex items-center justify-center space-x-8">
          <a href="mailto:antoniolvitall@gmail.com" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <img src={email} alt="Email" className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/antonio-lindo/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <img src={linkedin} alt="LinkedIn" className="icon"/>
            </a>
            <a href="https://wa.me/+5521981064296" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <img src={whatsapp} alt="WhatsApp" className="icon"/>
            </a>
            <a href="https://github.com/antoniolvlindo" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <img src={github} alt="WhatsApp" className="icon"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;