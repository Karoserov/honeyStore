import { Hexagon, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Hexagon className="h-8 w-8 text-amber-400 fill-current" />
              <span className="text-xl font-bold">Пчелини Христови</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Три поколения устойчиво пчеларство, производящо чист, натурален мед 
              от девствените поляни на Златната долина. От нашето семейство към вашето.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Начало
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Продукти
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  За нас
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Обиколки на фермата
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакт</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-gray-300">088 282 7798</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-gray-300">hristovihoney@abv.bg</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                ул. „Иван Н. Момчилов“ 65-59<br />
                гр. Елена, обл. Велико Търново 
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Пчелини Христови. Всички права запазени. | Създадено с ❤️ за любителите на меда навсякъде.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;