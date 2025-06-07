import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Leaf } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 to-yellow-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Чист, натурален
                <span className="text-amber-600 block">златен мед</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                От кошерите на нашето семейство до вашата трапеза. Насладете се на богатия, 
                автентичен вкус на местно произведен мед, изработен с поколения пчеларски опит.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Купете си от нашия мед
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors"
                >
                  Нашата история
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/hero-honey.jpg"
                alt="Пресен мед капе от дървена лъжичка"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Защо да изберете нашия мед?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Три поколения устойчиви пчеларски практики гарантират най-високо качество мед
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <Leaf className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">100% натурален</h3>
              <p className="text-gray-600 leading-relaxed">
                Чист мед без изкуствени добавки или обработка. Директно от кошера до вашия дом.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <Heart className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Семейно наследство</h3>
              <p className="text-gray-600 leading-relaxed">
                Три поколения пчеларски опит, предаван през нашата семейна традиция.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <Star className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Премиум качество</h3>
              <p className="text-gray-600 leading-relaxed">
                Награждаван мед, признат за изключителния си вкус и стандарти за чистота.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Image Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="images/farm/beehives-landscape.jpg"
                alt="Кошери в красива поляна"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Устойчиво пчеларство
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Нашата ферма е дом на над 200 кошера, разположени в нашата пчелна ферма. 
                Практикуваме устойчиви пчеларски методи, които защитават нашите пчели и опазват 
                естествената екосистема, от която те зависят.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Всеки буркан мед представлява нашата ангажираност към качеството, устойчивостта и 
                древното изкуство на пчеларството, предавано през поколения.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                Научете повече за нашите практики
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;