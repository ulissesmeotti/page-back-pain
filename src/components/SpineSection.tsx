import { Activity, Brain, Shield } from 'lucide-react';

export default function SpineSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Compreendendo sua coluna
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Sua coluna é a base do movimento e estabilidade do seu corpo
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Activity className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Centro do sistema nervoso</h3>
            <p className="mt-2 text-gray-600">
              Sua coluna protege o sistema nervoso, coordenando todas as funções do seu corpo
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Estrutura de suporte</h3>
            <p className="mt-2 text-gray-600">
              Fornece suporte estrutural e permite movimentos flexíveis
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Brain className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Prevenção a dor</h3>
            <p className="mt-2 text-gray-600">
              Compreender sua coluna é fundamental para previnir e controlar a dor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}