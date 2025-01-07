
export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Benefícios do alongamento regular
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Transforme sua vida com alongamentos diários simples
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
              alt="Person stretching"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Flexibilidade melhorada</h3>
              <p className="mt-2 text-gray-600">
                O alongamento regular aumenta a flexibilidade e amplitude do movimento
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Alívio da dor</h3>
              <p className="mt-2 text-gray-600">
                Reduz a tensão muscular e alivia dores crônicas nas costas
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Melhores posturas</h3>
              <p className="mt-2 text-gray-600">
                Fortalece os músculos centrais e melhora a postura geral
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Reduz o estresse</h3>
              <p className="mt-2 text-gray-600">
                Promove relaxamento e reduz o estresse físico e mental
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}