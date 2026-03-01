import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Package, Leaf, Award, Mail, Phone, MapPin, Droplet, Sun, Wind } from 'lucide-react';
import { OliveLeafPattern, OliveBranchSVG, DecorativeBorder, OliveTreeSVG, AncientPattern, OrnamentalDivider } from './components/SVGDecorations';
import { OlinaBottleNord, OlinaBottleCentre, OlinaBottleSud, RegionalLabelNorth, RegionalLabelCentral, RegionalLabelSouth } from './components/ProductBottles';
import { CardParticles, CARD_COLORS } from './components/CardParticles';
import AppBackground from './components/AppBackground';
import OilDrips from './components/OilDrips';
import ScrollingProductBackground from './components/ScrollingProductBackground';
import LanguageSwitcher from './components/LanguageSwitcher';

const MOODS = {
  default:  { from: '#f8f6f0', mid: '#f0ece0', to: '#e8e2d0' },
  green:    { from: '#f2f9eb', mid: '#e8f5d8', to: '#ddf0c4' },
  gold:     { from: '#fdf6ec', mid: '#faeedd', to: '#f6e4c8' },
  olive:    { from: '#f3f7e8', mid: '#eaf2d4', to: '#e0ecbf' },
  nord:     { from: '#edf9f4', mid: '#d8f2e8', to: '#c2eadb' },
  centre:   { from: '#fdf7e8', mid: '#faefd4', to: '#f6e4b8' },
  sud:      { from: '#fdf3ec', mid: '#fae4d4', to: '#f6d2b8' },
  northern: { from: '#edf9f0', mid: '#d8f2e4', to: '#c2ead6' },
  central:  { from: '#fdfbea', mid: '#faf5d0', to: '#f6edb4' },
  southern: { from: '#fdf2ea', mid: '#fae0cc', to: '#f6ccac' },
};

function App() {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mood, setMoodState] = useState('default');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const setMood   = (name) => setMoodState(name);
  const resetMood = ()     => setMoodState('default');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const currentMood = MOODS[mood];

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      '--bg-from': currentMood.from,
      '--bg-mid': currentMood.mid,
      '--bg-to': currentMood.to,
      background: 'linear-gradient(160deg, var(--bg-from) 0%, var(--bg-mid) 50%, var(--bg-to) 100%)',
      transition: '--bg-from 10s ease, --bg-mid 10s ease, --bg-to 10s ease',
    }}>
      <ScrollingProductBackground />
      <OilDrips />
      <AppBackground />
      <Navigation 
        scrolled={scrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} setMood={setMood} resetMood={resetMood} />
      <Heritage />
      <Products setMood={setMood} resetMood={resetMood} />
      <Regions setMood={setMood} resetMood={resetMood} />
      <Quality />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

function Navigation({ scrolled, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  const { t } = useTranslation();
  
  const navItems = [
    { key: 'heritage', label: t('nav.heritage') },
    { key: 'products', label: t('nav.products') },
    { key: 'regions', label: t('nav.regions') },
    { key: 'quality', label: t('nav.quality') },
    { key: 'contact', label: t('nav.contact') }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-3 border-b border-olive-200' : 'bg-gradient-to-b from-olive-900/20 to-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <img src="/logo2.png" alt="Gumpack Logo" className="w-16 h-16 object-contain transition-transform group-hover:scale-110" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-olive-800 tracking-wider">GUMPACK</h1>
              <p className="text-xs text-sand-700 font-elegant italic">Innovation in Packaging</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="text-olive-700 hover:text-olive-900 font-elegant text-lg font-medium transition-all hover:scale-110 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive-800 transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          <button
            className="md:hidden text-olive-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="block w-full text-left text-olive-700 hover:text-olive-900 font-elegant text-lg font-medium py-2 border-b border-olive-100 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-olive-200">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero({ scrollToSection, setMood, resetMood }) {
  const { t } = useTranslation();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-olive-900/10 via-transparent to-olive-800/10"></div>
        <div className="absolute inset-0 opacity-20">
          <OliveLeafPattern className="absolute top-10 left-10 w-32 h-32 text-olive-700 animate-pulse" />
          <OliveLeafPattern className="absolute bottom-20 right-20 w-40 h-40 text-olive-600" />
          <AncientPattern className="absolute top-1/3 right-10 w-24 h-24 text-sand-700" />
          <AncientPattern className="absolute bottom-1/3 left-10 w-24 h-24 text-sand-700" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 inline-block">
          <div className="relative">
            <img src="/logo2.png" alt="Gumpack" className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-2xl animate-float" />
            <div className="absolute -inset-4 bg-gradient-to-br from-olive-400/20 to-sand-400/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>

        <OliveBranchSVG className="w-full max-w-md mx-auto mb-8 text-olive-600" />

        <h1 className="text-6xl md:text-8xl font-display font-bold text-olive-900 mb-6 tracking-wide drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-3xl md:text-4xl text-sand-800 mb-8 font-elegant italic">
          {t('hero.subtitle')}
        </p>
        <DecorativeBorder className="w-full max-w-2xl mx-auto mb-8 text-olive-700" />
        <p className="text-xl md:text-2xl text-olive-800 mb-12 max-w-3xl mx-auto leading-relaxed font-elegant">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => scrollToSection('products')}
            className="px-10 py-5 bg-gradient-to-r from-olive-700 to-olive-800 text-white rounded-full font-display font-semibold text-lg hover:from-olive-800 hover:to-olive-900 transition-all shadow-2xl hover:shadow-olive-500/50 hover:scale-105 border-2 border-olive-900"
          >
            {t('hero.cta')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-5 bg-white/90 backdrop-blur-sm text-olive-800 border-3 border-olive-700 rounded-full font-display font-semibold text-lg hover:bg-olive-50 transition-all shadow-xl hover:scale-105"
          >
            {t('contact.title')}
          </button>
        </div>

        <div className="mt-20 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card-hover-fx card-green bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-olive-200 hover:border-olive-400 hover:-translate-y-2" onMouseEnter={() => setMood('green')} onMouseLeave={() => resetMood()}>
            <CardParticles cardClass="" colors={CARD_COLORS.green} />
            <div className="relative z-10 mb-6">
              <Leaf className="w-16 h-16 text-olive-600 mx-auto leaf-sway" />
              <OliveLeafPattern className="absolute -top-2 -right-2 w-12 h-12 text-olive-300 opacity-50" />
            </div>
            <h3 className="relative z-10 text-xl font-display font-bold text-olive-900 mb-3">{t('hero.cards.heritage.title')}</h3>
            <p className="relative z-10 text-olive-700 font-elegant text-lg">{t('hero.cards.heritage.description')}</p>
          </div>
          <div className="card-hover-fx card-gold bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-sand-300 hover:border-sand-500 hover:-translate-y-2" onMouseEnter={() => setMood('gold')} onMouseLeave={() => resetMood()}>
            <CardParticles cardClass="" colors={CARD_COLORS.gold} />
            <div className="relative z-10 mb-6">
              <Award className="w-16 h-16 text-sand-700 mx-auto leaf-sway" />
              <AncientPattern className="absolute -top-2 -right-2 w-12 h-12 text-sand-400 opacity-50" />
            </div>
            <h3 className="relative z-10 text-xl font-display font-bold text-olive-900 mb-3">{t('hero.cards.quality.title')}</h3>
            <p className="relative z-10 text-olive-700 font-elegant text-lg">{t('hero.cards.quality.description')}</p>
          </div>
          <div className="card-hover-fx card-olive bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-olive-200 hover:border-olive-400 hover:-translate-y-2" onMouseEnter={() => setMood('olive')} onMouseLeave={() => resetMood()}>
            <CardParticles cardClass="" colors={CARD_COLORS.olive} />
            <div className="relative z-10 mb-6">
              <Package className="w-16 h-16 text-olive-600 mx-auto leaf-sway" />
              <OliveLeafPattern className="absolute -top-2 -right-2 w-12 h-12 text-olive-300 opacity-50" />
            </div>
            <h3 className="relative z-10 text-xl font-display font-bold text-olive-900 mb-3">{t('hero.cards.sustainable.title')}</h3>
            <p className="relative z-10 text-olive-700 font-elegant text-lg">{t('hero.cards.sustainable.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  const { t } = useTranslation();
  
  return (
    <section id="heritage" className="py-24 relative overflow-hidden">
      <OliveTreeSVG className="absolute top-10 right-0 w-48 h-72 text-olive-200 opacity-30" />
      <OliveTreeSVG className="absolute bottom-10 left-0 w-48 h-72 text-sand-300 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <OrnamentalDivider className="w-full max-w-xl mx-auto mb-12 text-olive-600" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-8 leading-tight">
              {t('heritage.title')}
            </h2>
            <DecorativeBorder className="w-64 mb-6 text-olive-500" />
            <p className="text-xl text-olive-700 mb-6 leading-relaxed font-elegant">
              {t('heritage.subtitle')}
            </p>
            <p className="text-xl text-olive-700 leading-relaxed font-elegant">
              {t('heritage.description')}
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-olive-300">
              <img src="/arbre2500.jpg" alt="2500 Year Old Olive Tree" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <OliveBranchSVG className="w-32 mb-4 text-sand-200" />
                <p className="text-4xl font-display font-bold drop-shadow-lg">2,500+</p>
                <p className="text-xl font-elegant italic drop-shadow-md">Years of Heritage</p>
              </div>
            </div>
            <AncientPattern className="absolute -bottom-8 -right-8 w-32 h-32 text-olive-400 opacity-40" />
            <AncientPattern className="absolute -top-8 -left-8 w-32 h-32 text-sand-500 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Products({ setMood, resetMood }) {
  const { t } = useTranslation();
  
  const products = [
    {
      nameKey: 'products.nord.name',
      regionKey: 'products.nord.region',
      tasteKey: 'products.nord.taste',
      descriptionKey: 'products.nord.description',
      color: 'from-green-700 to-green-900',
      bgColor: 'bg-green-50',
      BottleComponent: OlinaBottleNord,
      mood: 'nord'
    },
    {
      nameKey: 'products.centre.name',
      regionKey: 'products.centre.region',
      tasteKey: 'products.centre.taste',
      descriptionKey: 'products.centre.description',
      color: 'from-amber-600 to-amber-800',
      bgColor: 'bg-amber-50',
      BottleComponent: OlinaBottleCentre,
      mood: 'centre'
    },
    {
      nameKey: 'products.sud.name',
      regionKey: 'products.sud.region',
      tasteKey: 'products.sud.taste',
      descriptionKey: 'products.sud.description',
      color: 'from-orange-700 to-red-900',
      bgColor: 'bg-orange-50',
      BottleComponent: OlinaBottleSud,
      mood: 'sud'
    }
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <OliveLeafPattern className="absolute top-20 left-20 w-40 h-40 text-olive-600" />
        <OliveLeafPattern className="absolute bottom-20 right-20 w-40 h-40 text-sand-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <OliveBranchSVG className="w-full max-w-md mx-auto mb-8 text-olive-600" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-6">
            {t('products.title')}
          </h2>
          <DecorativeBorder className="w-full max-w-xl mx-auto mb-6 text-olive-500" />
          <p className="text-2xl text-olive-700 max-w-3xl mx-auto font-elegant italic">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20 max-w-7xl mx-auto px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className={`card-hover-fx ${ index === 0 ? 'card-nord' : index === 1 ? 'card-centre' : 'card-sud' } bg-white/50 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-olive-500/50 transition-all transform hover:-translate-y-3 hover:scale-[1.02] border-2 border-olive-200 hover:border-olive-400 relative overflow-hidden group animate-fadeInUp animate-glow`}
              onMouseEnter={() => setMood(product.mood)}
              onMouseLeave={() => resetMood()}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardParticles cardClass="" colors={index === 0 ? CARD_COLORS.nord : index === 1 ? CARD_COLORS.centre : CARD_COLORS.sud} />

              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <OliveLeafPattern className="w-full h-full text-olive-600" />
              </div>
              
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-olive-400/10 to-sand-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-sand-400/10 to-olive-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 relative group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-olive-400/10 to-sand-400/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-olive-200/50 group-hover:border-olive-300 transition-all duration-300">
                    <img 
                      src={`/products/olina_${product.mood}.png`}
                      alt={t(product.nameKey)}
                      className="w-full h-64 object-contain"
                    />
                  </div>
                  <div className="absolute -inset-1 border border-olive-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <OrnamentalDivider className="w-24 mb-3 text-olive-500 opacity-40" />
                
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-olive-900 mb-2 text-center group-hover:text-olive-700 transition-colors px-2">{t(product.nameKey)}</h3>
                <p className="text-olive-600 font-elegant text-base lg:text-lg font-semibold mb-4 text-center">{t(product.regionKey)}</p>
                
                <div className="mb-5">
                  <span className={`inline-block px-5 py-2 bg-gradient-to-r ${product.color} text-white rounded-full text-sm font-display font-semibold shadow-lg group-hover:shadow-xl transition-shadow`}>
                    {t(product.tasteKey)}
                  </span>
                </div>
                
                <DecorativeBorder className="w-20 mb-4 text-olive-400 opacity-30" />
                
                <p className="text-olive-700 leading-relaxed text-center font-elegant text-base px-2">{t(product.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Package Section */}
        <div className="mt-24 text-center">
          <OrnamentalDivider className="w-48 mx-auto mb-8 text-olive-500 opacity-40" />
          <h3 className="text-4xl md:text-5xl font-display font-bold text-olive-900 mb-6">
            {t('products.fullPackage.title')}
          </h3>
          <p className="text-xl text-olive-700 max-w-3xl mx-auto mb-12 font-elegant italic">
            {t('products.fullPackage.description')}
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-olive-400/10 to-sand-400/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-olive-200 group-hover:border-olive-400 transition-all duration-300">
                <img 
                  src="/products/full_package.png" 
                  alt={t('products.fullPackage.title')}
                  className="w-full h-auto object-contain rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="hidden w-full h-96 items-center justify-center bg-gradient-to-br from-olive-50 to-sand-50 rounded-2xl"
                >
                  <div className="text-center p-8">
                    <Package className="w-24 h-24 text-olive-400 mx-auto mb-4" />
                    <p className="text-olive-600 font-elegant text-lg">
                      {t('products.fullPackage.title')}
                    </p>
                    <p className="text-olive-500 text-sm mt-2">
                      Image: /products/full_package.png
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Regions({ setMood, resetMood }) {
  const { t } = useTranslation();
  
  const regions = [
    {
      nameKey: 'regions.northern.name',
      climateKey: 'regions.northern.climate',
      characteristicsKey: 'regions.northern.characteristics',
      idealKey: 'regions.northern.ideal',
      icon: Droplet,
      color: 'from-green-600 to-teal-700',
      LabelComponent: RegionalLabelNorth,
      mood: 'northern',
      labelImage: 'northern'
    },
    {
      nameKey: 'regions.central.name',
      climateKey: 'regions.central.climate',
      characteristicsKey: 'regions.central.characteristics',
      idealKey: 'regions.central.ideal',
      icon: Wind,
      color: 'from-amber-600 to-orange-600',
      LabelComponent: RegionalLabelCentral,
      mood: 'central',
      labelImage: 'central'
    },
    {
      nameKey: 'regions.southern.name',
      climateKey: 'regions.southern.climate',
      characteristicsKey: 'regions.southern.characteristics',
      idealKey: 'regions.southern.ideal',
      icon: Sun,
      color: 'from-orange-600 to-red-700',
      LabelComponent: RegionalLabelSouth,
      mood: 'southern',
      labelImage: 'southern'
    }
  ];

  return (
    <section id="regions" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <AncientPattern className="absolute top-20 left-20 w-40 h-40 text-olive-600" />
        <AncientPattern className="absolute bottom-20 right-20 w-40 h-40 text-sand-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <OliveBranchSVG className="w-full max-w-md mx-auto mb-8 text-olive-600" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-6">
            {t('regions.title')}
          </h2>
          <DecorativeBorder className="w-full max-w-xl mx-auto mb-6 text-olive-500" />
          <p className="text-2xl text-olive-700 max-w-3xl mx-auto font-elegant italic">
            {t('regions.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20 max-w-7xl mx-auto px-4">
          {regions.map((region, index) => (
            <div
              key={index}
              className={`card-hover-fx ${ index === 0 ? 'card-northern' : index === 1 ? 'card-central' : 'card-southern' } bg-white/50 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-olive-500/50 transition-all hover:-translate-y-3 hover:scale-[1.02] border-2 border-olive-200 hover:border-olive-400 relative overflow-hidden group animate-scaleIn animate-glow`}
              onMouseEnter={() => setMood(region.mood)}
              onMouseLeave={() => resetMood()}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardParticles cardClass="" colors={index === 0 ? CARD_COLORS.northern : index === 1 ? CARD_COLORS.central : CARD_COLORS.southern} />

              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <OliveTreeSVG className="w-full h-full text-olive-600" />
              </div>
              
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-olive-400/10 to-sand-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-sand-400/10 to-olive-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 relative group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-olive-400/10 to-sand-400/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-olive-200/50 group-hover:border-olive-300 transition-all duration-300">
                    <img 
                      src={`/labels/${region.labelImage}.png`}
                      alt={t(region.nameKey)}
                      className="w-full h-64 object-contain"
                    />
                  </div>
                  <div className="absolute -inset-1 border border-olive-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${region.color} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:rotate-6 transition-transform duration-500`}>
                  <region.icon className="w-9 h-9 text-white" />
                </div>
                
                <OrnamentalDivider className="w-24 mb-3 text-olive-500 opacity-40" />
                
                <h3 className="text-xl lg:text-2xl font-display font-bold text-olive-900 mb-2 text-center group-hover:text-olive-700 transition-colors px-2">{t(region.nameKey)}</h3>
                <p className="text-olive-600 font-elegant text-base lg:text-lg font-semibold mb-4 text-center">{t(region.climateKey)}</p>
                
                <DecorativeBorder className="w-20 mb-4 text-olive-400 opacity-30" />
                
                <p className="text-olive-700 mb-3 leading-relaxed font-elegant text-sm lg:text-base text-center px-2">{t(region.characteristicsKey)}</p>
                <p className="text-olive-800 font-medium italic text-sm text-center px-2">{t(region.idealKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  const { t } = useTranslation();
  
  return (
    <section id="quality" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <OliveLeafPattern className="absolute top-10 left-10 w-48 h-48 text-olive-600" />
        <OliveLeafPattern className="absolute bottom-10 right-10 w-48 h-48 text-sand-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <OrnamentalDivider className="w-full max-w-xl mx-auto mb-8 text-olive-600" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-6">
            {t('quality.title')}
          </h2>
          <DecorativeBorder className="w-full max-w-xl mx-auto mb-6 text-olive-500" />
          <p className="text-2xl text-olive-700 max-w-3xl mx-auto font-elegant italic">
            {t('quality.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, titleKey: 'quality.certifications.organic.title', descKey: 'quality.certifications.organic.description' },
            { icon: Leaf, titleKey: 'quality.certifications.extraVirgin.title', descKey: 'quality.certifications.extraVirgin.description' },
            { icon: Package, titleKey: 'quality.certifications.iso.title', descKey: 'quality.certifications.iso.description' },
            { icon: Award, titleKey: 'quality.certifications.awards.title', descKey: 'quality.certifications.awards.description' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-olive-500/30 transition-all hover:-translate-y-2 text-center border-2 border-olive-200 hover:border-olive-400 relative group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <AncientPattern className="w-full h-full text-olive-600" />
              </div>
              <item.icon className="w-20 h-20 text-olive-600 mx-auto mb-6 relative z-10" />
              <h3 className="text-2xl font-display font-bold text-olive-900 mb-3">{t(item.titleKey)}</h3>
              <p className="text-olive-700 font-elegant text-lg">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <OliveTreeSVG className="absolute top-10 left-10 w-64 h-96 text-olive-600" />
        <OliveTreeSVG className="absolute bottom-10 right-10 w-64 h-96 text-sand-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <OrnamentalDivider className="w-full max-w-xl mx-auto mb-8 text-olive-600" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-6">
            {t('contact.title')}
          </h2>
          <DecorativeBorder className="w-full max-w-xl mx-auto mb-6 text-olive-500" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-olive-700 mb-10 leading-relaxed font-elegant">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-olive-600 to-olive-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-olive-900 mb-2 text-xl">Email</h3>
                  <p className="text-olive-700 font-elegant text-lg">{t('contact.info.email')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-sand-600 to-sand-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-olive-900 mb-2 text-xl">Phone</h3>
                  <p className="text-olive-700 font-elegant text-lg">{t('contact.info.phone')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-olive-600 to-olive-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-olive-900 mb-2 text-xl">Location</h3>
                  <p className="text-olive-700 font-elegant text-lg">{t('contact.info.address')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-olive-50 to-sand-50 rounded-3xl p-10 shadow-2xl border-2 border-olive-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
              <OliveLeafPattern className="w-full h-full text-olive-600" />
            </div>
            <form className="space-y-6 relative z-10">
              <div>
                <label className="block text-olive-900 font-display font-semibold mb-3 text-lg">{t('contact.form.name')}</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-xl border-2 border-olive-200 focus:border-olive-600 focus:outline-none transition-all bg-white/80 backdrop-blur-sm font-elegant text-lg"
                  placeholder={t('contact.form.name')}
                />
              </div>
              <div>
                <label className="block text-olive-900 font-display font-semibold mb-3 text-lg">{t('contact.form.email')}</label>
                <input
                  type="email"
                  className="w-full px-5 py-4 rounded-xl border-2 border-olive-200 focus:border-olive-600 focus:outline-none transition-all bg-white/80 backdrop-blur-sm font-elegant text-lg"
                  placeholder={t('contact.form.email')}
                />
              </div>
              <div>
                <label className="block text-olive-900 font-display font-semibold mb-3 text-lg">{t('contact.form.message')}</label>
                <textarea
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl border-2 border-olive-200 focus:border-olive-600 focus:outline-none transition-all resize-none bg-white/80 backdrop-blur-sm font-elegant text-lg"
                  placeholder={t('contact.form.message')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-10 py-5 bg-gradient-to-r from-olive-700 to-olive-800 text-white rounded-full font-display font-semibold text-lg hover:from-olive-800 hover:to-olive-900 transition-all shadow-2xl hover:shadow-olive-500/50 hover:scale-105"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ scrollToSection }) {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-b from-olive-900 to-olive-950 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <OliveLeafPattern className="absolute top-10 left-10 w-48 h-48 text-white" />
        <OliveLeafPattern className="absolute bottom-10 right-10 w-48 h-48 text-white" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img src="/logo2.png" alt="Gumpack" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-2xl font-display font-bold">GUMPACK</h3>
                <p className="text-sm text-sand-300 font-elegant italic">Innovation in Packaging</p>
              </div>
            </div>
            <p className="text-sand-300 font-elegant text-base leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-xl">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-sand-300">
              {[
                { key: 'heritage', label: t('nav.heritage') },
                { key: 'products', label: t('nav.products') },
                { key: 'regions', label: t('nav.regions') },
                { key: 'quality', label: t('nav.quality') }
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => scrollToSection(item.key)}
                    className="hover:text-white transition-colors font-elegant text-lg hover:translate-x-2 inline-block transition-transform"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-xl">Products</h4>
            <ul className="space-y-3 text-sand-300 font-elegant text-base">
              <li>Northern Tunisia Oil</li>
              <li>Central Tunisia Oil</li>
              <li>Southern Tunisia Oil</li>
              <li>Custom Packaging</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-xl">Contact</h4>
            <ul className="space-y-3 text-sand-300 font-elegant text-base">
              <li>contact@gumpack.com</li>
              <li>+216 XX XXX XXX</li>
              <li>Tunisia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-olive-700 pt-10 mt-10">
          <OliveBranchSVG className="w-full max-w-md mx-auto mb-6 text-sand-400" />
          <p className="text-center text-sand-300 font-elegant text-base">&copy; 2024 Gumpack. All rights reserved. Premium Olive Oil Packaging from Tunisia.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
