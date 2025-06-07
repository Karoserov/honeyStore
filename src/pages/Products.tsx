import React from 'react';
import { ShoppingCart, Award, Droplets } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Полски мед',
      price: '36 лв',
      size: '350 гр буркан',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Нашата фирмена смес, добита от полски поляни. Лек, цветен вкус с нотки на детелина и лавандула.',
      features: ['Суров и нефилтриран', 'Местни полски цветя', 'Богат на антиоксиданти']
    },
    {
      id: 2,
      name: 'Детелинов мед',
      price: '32 лв',
      size: '350 гр буркан',
      image: 'https://images.pexels.com/photos/7937477/pexels-photo-7937477.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Чист детелинов мед с деликатен, сладък вкус. Перфектен за чай, печене или наслада директно от лъжичката.',
      features: ['Мек и сладък', 'Чиста детелина', 'Кристализира естествено']
    },
    {
      id: 3,
      name: 'Мед от портокалов цвят',
      price: '44 лв',
      size: '350 гр буркан',
      image: 'https://images.pexels.com/photos/5946080/pexels-photo-5946080.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ароматен мед с цитрусови нотки от цветове на портокалови дървета. Премиум сорт със сложни, плодови нюанси.',
      features: ['Цитрусов аромат', 'Премиум клас', 'Ограничена реколта']
    },
    {
      id: 4,
      name: 'Елдов мед',
      price: '48 лв',
      size: '350 гр буркан',
      image: 'https://images.pexels.com/photos/7937422/pexels-photo-7937422.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Тъмен, богат мед с наситен вкус като меласа. Висок в минерали и антиоксиданти.',
      features: ['Тъмен и богат', 'Високи антиоксиданти', 'Смел вкус']
    },
    {
      id: 5,
      name: 'Кремообразен мед',
      price: '40 лв',
      size: '350 гр буркан',
      image: 'https://images.pexels.com/photos/6994320/pexels-photo-6994320.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Гладък, размазващ се мед, който не капе. Перфектен за тост, питки или като гурме намазка.',
      features: ['Гладка текстура', 'Не капе', 'Лесно се размазва']
    },
    {
      id: 6,
      name: 'Пчелна пита',
      price: '56 лв',
      size: 'Прясно нарязана секция',
      image: 'https://images.pexels.com/photos/4021991/pexels-photo-4021991.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Чиста пчелна пита директно от кошера. Дъвчете восъка за пълното медово изживяване.',
      features: ['Чист пчелен восък', 'Директно от кошера', 'Естествено съвършенство']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Нашата медова колекция
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Открийте нашата гама от премиум медови сортове, всеки със свой уникален вкусов профил 
            и характер. Целият ни мед е суров, нефилтриран и добит с грижа.
          </p>
        </div>

        {/* Quality Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <Award className="h-5 w-5 text-amber-600 mr-2" />
            <span className="font-semibold text-gray-700">Награждаван</span>
          </div>
          <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <Droplets className="h-5 w-5 text-amber-600 mr-2" />
            <span className="font-semibold text-gray-700">Суров и нефилтриран</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-amber-600 font-semibold mb-3">{product.size}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center group">
                  <ShoppingCart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Добави в количката
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Не можете да решите? Опитайте нашия дегустационен комплект
          </h2>
          <p className="text-gray-700 mb-6">
            Опитайте всичките ни сортове с нашата подбрана дегустационна колекция - перфектна за подаръци или откриване на любимия ви.
          </p>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
            Купете дегустационен комплект - 90 лв
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;