import Benefits from './components/Benefits';
import EbookSection from './components/EbookSection';
import Header from './components/Header';
import Hero from './components/Hero';
import SpineSection from './components/SpineSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SpineSection />
        <Benefits />
        <EbookSection />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} SpineWell. Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;