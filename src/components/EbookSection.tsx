import { Check } from 'lucide-react';
import React, { useState } from 'react';

export default function EbookSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Purchase initiated with email:', email);
  };

  return (
    <section id="ebook" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Compre agora seu guia completo para dores na coluna!
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Nosso e-book abrangente fornece tudo o que você precisa saber sobre como gerenciar e prevenir dores nas costas.
            </p>
            <div className="mt-8">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Rotinas de alongamento passo a passo</span>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Técnicas de prevenção da dor</span>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Conselhos e dicas de especialistas</span>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="flex justify-center">
                <img
                  src="/images/img-capa-ebook.png"
                  alt="Capa do e-book"
                  className="h-56 w-auto rounded-md shadow-md" 
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-4xl font-extrabold text-gray-900">$29.99</span>
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 py-3 px-4 rounded-md text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Comprar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
