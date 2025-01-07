
export default function Hero() {
  return (
    <div className="relative bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Viva sem dor,</span>
            <span className="block text-blue-200">Mova-se com confiança</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Descubra técnicas comprovadas para previnir e aliviar dores nas costas. Nosso guia completo ajuda você a entender sua coluna e controlar seu bem-estar.
          </p>
          <div className="mt-10">
            <a
              href="#ebook"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:text-lg"
            >
              Adquira seu guia agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}