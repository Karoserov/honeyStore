import React from 'react';
import { Users, MapPin, Phone, Mail, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Нашата семейна история
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Три поколения страст, традиция и отдаденост към устойчивото пчеларство 
            в сърцето на Златната долина.
          </p>
        </div>

        {/* Family Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/images/family/logo.jpg"
              alt="Семейни пчелари работят с кошери"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Наследството на Христови</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Всичко започна през 1952 година, когато нашият дядо, започна да 
              отглежда пчели като хоби след завръщането си от Втората световна война. Това, което 
              започна с едва три кошера в задния му двор, се превърна в процъфтяваща семейна дейност 
              с над 200 кошера в цялата Пчелини Христови.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Днес нашата ферма се управлява от третото поколение Йорданови, продължавайки традицията 
              на устойчивото пчеларство, като същевременно прегръщаме модерни техники за осигуряване 
              на здравето и щастието на нашите пчелни колонии.
            </p>
          </div>
        </div>

        {/* Farm Images Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Живот във фермата
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-6">
              <img
                src="/images/farm/farm1.jpg"
                alt="Пчелар инспектира рамки от кошера"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/farm/farm2.jpg"
                alt="Красива поляна с диви цветя"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <img
                src="/images/farm/farm3.jpg"
                alt="Прясен мед се извлича"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <img
                src="/images/farm/farm4.jpg"
                alt="Трудолюбиви пчели на пчелна пита"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-6">
              <img
                src="/images/farm/farm5.jpg"
                alt="Множество кошери в полето"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/farm/farm6.jpg"
                alt="Пчелар в защитно облекло"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Нашата мисия</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Ние сме ангажирани с производството на най-качествен мед, като същевременно поддържаме 
              устойчиви практики, които защитават нашите пчели и опазват околната среда. Всеки буркан 
              представлява нашата отдаденост към чисти, натурални продукти и нашата отговорност към 
              бъдещите поколения както пчелари, така и пчели.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Посетете нашата ферма</h2>
            <p className="text-lg text-gray-600">
              Обичаме да споделяме страстта си към пчеларството. Запишете се за обиколка или посетете нашия магазин!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">
                ул. „Иван Н. Момчилов“ 65-59<br />
                гр. Елена, обл. Велико Търново 
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">
                088 282 7798
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Имейл</h3>
              <p className="text-gray-600">
                hristovihoney@abv.bg
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Работно време</h3>
              <p className="text-gray-600">
                Всеки ден от 9:00 до 18:00 ч.<br />
                Събота и неделя: по уговорка
              </p>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
              Запишете обиколка на фермата
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;