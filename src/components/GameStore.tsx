import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GameStore = () => {
  const featuredGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      image: "/placeholder.svg",
      platform: ["PC", "PS5", "Xbox"],
      rating: 4.5,
    },
    {
      id: 2,
      title: "The Witcher 3",
      price: 599,
      originalPrice: 999,
      discount: 40,
      image: "/placeholder.svg",
      platform: ["PC", "PS4", "Xbox"],
      rating: 4.9,
    },
    {
      id: 3,
      title: "Red Dead Redemption 2",
      price: 1499,
      originalPrice: 2499,
      discount: 40,
      image: "/placeholder.svg",
      platform: ["PC", "PS4"],
      rating: 4.7,
    },
  ];

  const newReleases = [
    {
      id: 4,
      title: "Starfield",
      price: 2999,
      image: "/placeholder.svg",
      platform: ["PC", "Xbox"],
      rating: 4.2,
    },
    {
      id: 5,
      title: "Baldur's Gate 3",
      price: 2399,
      image: "/placeholder.svg",
      platform: ["PC", "PS5"],
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-game-dark via-slate-900 to-game-dark">
      {/* Header */}
      <header className="bg-game-dark/90 backdrop-blur-sm border-b border-game-blue/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-game-blue" size={32} />
              <h1 className="text-2xl font-bold text-white">GameStore</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-white hover:text-game-blue transition-colors"
              >
                Игры
              </a>
              <a
                href="#"
                className="text-white hover:text-game-blue transition-colors"
              >
                Акции
              </a>
              <a
                href="#"
                className="text-white hover:text-game-blue transition-colors"
              >
                Новинки
              </a>
              <a
                href="#"
                className="text-white hover:text-game-blue transition-colors"
              >
                Издателям
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-game-blue text-game-blue hover:bg-game-blue hover:text-white"
              >
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
              <Button size="sm" className="bg-game-orange hover:bg-orange-600">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Игры со скидками до
              <span className="text-game-orange"> 70%</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Тысячи игр, мгновенная доставка ключей, безопасные покупки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-game-blue hover:bg-blue-600 text-white px-8"
              >
                <Icon name="Zap" size={20} className="mr-2" />
                Смотреть акции
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-game-orange text-game-orange hover:bg-game-orange hover:text-white px-8"
              >
                <Icon name="Upload" size={20} className="mr-2" />
                Публиковать игру
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-game-blue/10 to-game-orange/10 pointer-events-none" />
      </section>

      {/* Featured Games */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">
              🔥 Горячие предложения
            </h3>
            <Button
              variant="ghost"
              className="text-game-blue hover:text-white hover:bg-game-blue"
            >
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <Card
                key={game.id}
                className="bg-slate-800/50 border-slate-700 hover:border-game-blue/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-game-orange text-white">
                      -{game.discount}%
                    </Badge>
                    <div className="absolute top-3 right-3 flex gap-1">
                      {game.platform.map((platform) => (
                        <Badge
                          key={platform}
                          variant="secondary"
                          className="text-xs"
                        >
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {game.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-sm text-gray-300 ml-1">
                        {game.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-game-orange">
                        {game.price}₽
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {game.originalPrice}₽
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-game-blue hover:bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Releases */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">✨ Новинки</h3>
            <Button
              variant="ghost"
              className="text-game-blue hover:text-white hover:bg-game-blue"
            >
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newReleases.map((game) => (
              <Card
                key={game.id}
                className="bg-slate-800/50 border-slate-700 hover:border-game-orange/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-32 h-32 object-cover"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex gap-1 mb-2">
                        {game.platform.map((platform) => (
                          <Badge
                            key={platform}
                            variant="secondary"
                            className="text-xs"
                          >
                            {platform}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {game.title}
                      </h4>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon
                          name="Star"
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                        <span className="text-sm text-gray-300">
                          {game.rating}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-game-orange">
                          {game.price}₽
                        </span>
                        <Button
                          size="sm"
                          className="bg-game-orange hover:bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Купить
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publisher CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-game-blue to-game-orange rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Разработчик игр?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Публикуйте свои игры в нашем магазине и получайте доступ к
              миллионам игроков. Простая интеграция, справедливые условия,
              быстрые выплаты.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-game-dark hover:bg-gray-100"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать публикацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-game-dark border-t border-game-blue/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" className="text-game-blue" size={24} />
                <span className="text-xl font-bold text-white">GameStore</span>
              </div>
              <p className="text-gray-400">
                Лучший магазин игр с мгновенной доставкой ключей
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Новинки</li>
                <li>Акции</li>
                <li>Бестселлеры</li>
                <li>Предзаказы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Помощь</li>
                <li>Возврат</li>
                <li>Контакты</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Издателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Публикация</li>
                <li>Аналитика</li>
                <li>Условия</li>
                <li>API</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameStore;
