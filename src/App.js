import React, { useState, useEffect } from 'react';
import { Menu, X, Package, Leaf, Award, Mail, Phone, MapPin, Droplet, Sun, Wind } from 'lucide-react';
import { OliveLeafPattern, OliveBranchSVG, DecorativeBorder, OliveTreeSVG, AncientPattern, OrnamentalDivider } from './components/SVGDecorations';
import { OlinaBottleNord, OlinaBottleCentre, OlinaBottleSud, RegionalLabelNorth, RegionalLabelCentral, RegionalLabelSouth } from './components/ProductBottles';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-white bg-ancient-texture">
      <Navigation 
        scrolled={scrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <Heritage />
      <Products />
      <Regions />
      <Quality />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

function Navigation({ scrolled, isMenuOpen, setIsMenuOpen, scrollToSection }) {
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

          <div className="hidden md:flex space-x-8">
            {['About', 'Products', 'Regions', 'Quality', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-olive-700 hover:text-olive-900 font-elegant text-lg font-medium transition-all hover:scale-110 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive-800 transition-all group-hover:w-full"></span>
              </button>
            ))}
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
            {['About', 'Products', 'Regions', 'Quality', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-olive-700 hover:text-olive-900 font-elegant text-lg font-medium py-2 border-b border-olive-100 last:border-0"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-olive-900/30 via-sand-200/50 to-olive-800/30"></div>
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
          GUMPACK
        </h1>
        <p className="text-3xl md:text-4xl text-sand-800 mb-8 font-elegant italic">
          Innovation in Packaging
        </p>
        <DecorativeBorder className="w-full max-w-2xl mx-auto mb-8 text-olive-700" />
        <p className="text-xl md:text-2xl text-olive-800 mb-12 max-w-3xl mx-auto leading-relaxed font-elegant">
          Premium packaging solutions for Tunisia's finest extra virgin olive oil
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => scrollToSection('products')}
            className="px-10 py-5 bg-gradient-to-r from-olive-700 to-olive-800 text-white rounded-full font-display font-semibold text-lg hover:from-olive-800 hover:to-olive-900 transition-all shadow-2xl hover:shadow-olive-500/50 hover:scale-105 border-2 border-olive-900"
          >
            Explore Our Products
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-5 bg-white/90 backdrop-blur-sm text-olive-800 border-3 border-olive-700 rounded-full font-display font-semibold text-lg hover:bg-olive-50 transition-all shadow-xl hover:scale-105"
          >
            Get in Touch
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-olive-200 hover:border-olive-400 transition-all hover:-translate-y-2">
            <div className="relative mb-6">
              <Leaf className="w-16 h-16 text-olive-600 mx-auto" />
              <OliveLeafPattern className="absolute -top-2 -right-2 w-12 h-12 text-olive-300 opacity-50" />
            </div>
            <h3 className="text-xl font-display font-bold text-olive-900 mb-3">Authentic Heritage</h3>
            <p className="text-olive-700 font-elegant text-lg">2,500+ year old olive tradition</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-sand-300 hover:border-sand-500 transition-all hover:-translate-y-2">
            <div className="relative mb-6">
              <Award className="w-16 h-16 text-sand-700 mx-auto" />
              <AncientPattern className="absolute -top-2 -right-2 w-12 h-12 text-sand-400 opacity-50" />
            </div>
            <h3 className="text-xl font-display font-bold text-olive-900 mb-3">Premium Quality</h3>
            <p className="text-olive-700 font-elegant text-lg">Certified organic extra virgin</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-olive-200 hover:border-olive-400 transition-all hover:-translate-y-2">
            <div className="relative mb-6">
              <Package className="w-16 h-16 text-olive-600 mx-auto" />
              <OliveLeafPattern className="absolute -top-2 -right-2 w-12 h-12 text-olive-300 opacity-50" />
            </div>
            <h3 className="text-xl font-display font-bold text-olive-900 mb-3">Modern Packaging</h3>
            <p className="text-olive-700 font-elegant text-lg">Innovative design solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <OliveTreeSVG className="absolute top-10 right-0 w-48 h-72 text-olive-200 opacity-30" />
      <OliveTreeSVG className="absolute bottom-10 left-0 w-48 h-72 text-sand-300 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <OrnamentalDivider className="w-full max-w-xl mx-auto mb-12 text-olive-600" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-8 leading-tight">
              Ancient Tradition,<br/>Modern Innovation
            </h2>
            <DecorativeBorder className="w-64 mb-6 text-olive-500" />
            <p className="text-xl text-olive-700 mb-6 leading-relaxed font-elegant">
              Tunisia is home to one of the oldest olive-growing histories in the world. 
              Olive trees over <span className="font-bold text-olive-900 text-2xl">2,500 years old</span>, 
              found from the north to the south of the country, bear witness to an ancestral 
              know-how passed down through generations.
            </p>
            <p className="text-xl text-olive-700 mb-6 leading-relaxed font-elegant">
              Tunisian olive oil is the result of this ancient tradition, giving birth to a 
              <span className="font-bold text-olive-900"> unique organic extra virgin olive oil</span>, 
              distinguished by its purity and rich aromatic identity.
            </p>
            <p className="text-xl text-olive-700 leading-relaxed font-elegant">
              Through partnerships with several modern, certified olive mills, we offer a 
              product unique in the world. Sourced from diverse regions of Tunisia, our olive 
              oil reflects the richness of three distinct climates, with each product certified 
              and accompanied by a detailed analysis report, ensuring consistent quality and 
              authentic flavor.
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

function Products() {
  const products = [
    {
      name: 'OLINA - Le Nord',
      region: 'Northern Tunisia',
      taste: 'Fresh & Fruity',
      description: 'Fresh, green and aromatic olive oils with balanced fruitiness and refined elegance.',
      color: 'from-green-700 to-green-900',
      bgColor: 'bg-green-50',
      BottleComponent: OlinaBottleNord
    },
    {
      name: 'OLINA - Le Centre',
      region: 'Central Tunisia',
      taste: 'Smooth & Balanced',
      description: 'Well-structured olive oils with medium fruitiness and excellent balance.',
      color: 'from-amber-600 to-amber-800',
      bgColor: 'bg-amber-50',
      BottleComponent: OlinaBottleCentre
    },
    {
      name: 'OLINA - Le Sud',
      region: 'Southern Tunisia',
      taste: 'Rich & Intense',
      description: 'Powerful and highly stable olive oils, naturally rich in polyphenols.',
      color: 'from-orange-700 to-red-900',
      bgColor: 'bg-orange-50',
      BottleComponent: OlinaBottleSud
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-sand-50 via-white to-olive-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <OliveLeafPattern className="absolute top-20 left-20 w-40 h-40 text-olive-600" />
        <OliveLeafPattern className="absolute bottom-20 right-20 w-40 h-40 text-sand-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <OliveBranchSVG className="w-full max-w-md mx-auto mb-8 text-olive-600" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-6">
            Our Premium Collection
          </h2>
          <DecorativeBorder className="w-full max-w-xl mx-auto mb-6 text-olive-500" />
          <p className="text-2xl text-olive-700 max-w-3xl mx-auto font-elegant italic">
            Three distinct varieties, each reflecting the unique terroir of Tunisia's diverse regions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white via-sand-50/30 to-olive-50/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-olive-500/50 transition-all transform hover:-translate-y-4 hover:scale-105 border-4 border-olive-300 hover:border-olive-500 relative overflow-hidden group animate-fadeInUp animate-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                <OliveLeafPattern className="w-full h-full text-olive-600" />
              </div>
              
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-olive-400/10 to-sand-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-sand-400/10 to-olive-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-8 relative group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-olive-400/20 to-sand-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-olive-200 group-hover:border-olive-400 transition-all duration-300">
                    <img 
                      src={`/products/olina_${index === 0 ? 'nord' : index === 1 ? 'centre' : 'sud'}.png`}
                      alt={product.name}
                      className="w-40 h-56 object-contain"
                    />
                  </div>
                  <div className="absolute -inset-2 border-2 border-olive-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
                
                <OrnamentalDivider className="w-32 mb-4 text-olive-500 opacity-50" />
                
                <h3 className="text-3xl font-display font-bold text-olive-900 mb-2 text-center group-hover:text-olive-700 transition-colors">{product.name}</h3>
                <p className="text-olive-600 font-elegant text-lg font-semibold mb-4 text-center">{product.region}</p>
                
                <div className="mb-6">
                  <span className={`inline-block px-6 py-3 bg-gradient-to-r ${product.color} text-white rounded-full text-base font-display font-semibold shadow-lg group-hover:shadow-2xl transition-shadow`}>
                    {product.taste}
                  </span>
                </div>
                
                <DecorativeBorder className="w-24 mb-4 text-olive-400 opacity-40" />
                
                <p className="text-olive-700 leading-relaxed text-center font-elegant text-lg">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-olive-600 font-elegant text-lg mb-6 italic">Complete Product Range</p>
          <img src="/etiquette.png" alt="OLINA Complete Collection" className="w-full max-w-6xl mx-auto rounded-3xl shadow-2xl border-4 border-olive-200" />
        </div>
      </div>
    </section>
  );
}

function Regions() {
  const regions = [
    {
      name: 'Northern Tunisia',
      climate: 'Mediterranean Climate',
      icon: Droplet,
      characteristics: 'Fresh, green and aromatic olive oils with balanced fruitiness and refined elegance.',
      ideal: 'Ideal for premium retail, gourmet markets, and table consumption.',
      color: 'from-green-600 to-teal-700',
      LabelComponent: RegionalLabelNorth
    },
    {
      name: 'Central Tunisia',
      climate: 'Semi-Arid Climate',
      icon: Wind,
      characteristics: 'Well-structured olive oils with medium fruitiness and excellent balance.',
      ideal: 'Perfect for versatile use, food service, and private-label brands.',
      color: 'from-amber-600 to-orange-600',
      LabelComponent: RegionalLabelCentral
    },
    {
      name: 'Southern Tunisia',
      climate: 'Arid & Desert Climate',
      icon: Sun,
      characteristics: 'Powerful and highly stable olive oils, naturally rich in polyphenols.',
      ideal: 'Ideal for long-term storage, blending, and industrial applications.',
      color: 'from-orange-600 to-red-700',
      LabelComponent: RegionalLabelSouth
    }
  ];

  return (
    <section id="regions" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <AncientPattern className="absolute top-20 left-20 w-40 h-40 text-olive-600" />
        <AncientPattern className="absolute bottom-20 right-20 w-40 h-40 text-sand-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <OliveBranchSVG className="w-full max-w-md mx-auto mb-8 text-olive-600" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-6">
            Three Climates, Three Flavors
          </h2>
          <DecorativeBorder className="w-full max-w-xl mx-auto mb-6 text-olive-500" />
          <p className="text-2xl text-olive-700 max-w-3xl mx-auto font-elegant italic">
            Each region of Tunisia produces olive oil with distinct characteristics shaped by its unique climate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white via-sand-50/50 to-olive-50/50 rounded-3xl p-8 shadow-2xl hover:shadow-olive-500/50 transition-all hover:-translate-y-4 hover:scale-105 border-4 border-olive-300 hover:border-olive-500 relative overflow-hidden group animate-scaleIn animate-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                <OliveTreeSVG className="w-full h-full text-olive-600" />
              </div>
              
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-olive-400/10 to-sand-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-sand-400/10 to-olive-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-8 relative group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-olive-400/20 to-sand-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-olive-200 group-hover:border-olive-400 transition-all duration-300">
                    <img 
                      src={`/labels/${index === 0 ? 'northern' : index === 1 ? 'central' : 'southern'}.png`}
                      alt={region.name}
                      className="w-40 h-56 object-contain"
                    />
                  </div>
                  <div className="absolute -inset-2 border-2 border-olive-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${region.color} rounded-2xl flex items-center justify-center shadow-xl mb-4 group-hover:rotate-12 transition-transform duration-500`}>
                  <region.icon className="w-12 h-12 text-white" />
                </div>
                
                <OrnamentalDivider className="w-32 mb-4 text-olive-500 opacity-50" />
                
                <h3 className="text-2xl font-display font-bold text-olive-900 mb-2 text-center group-hover:text-olive-700 transition-colors">{region.name}</h3>
                <p className="text-olive-600 font-elegant text-lg font-semibold mb-4 text-center">{region.climate}</p>
                
                <DecorativeBorder className="w-24 mb-4 text-olive-400 opacity-40" />
                
                <p className="text-olive-700 mb-4 leading-relaxed font-elegant text-center">{region.characteristics}</p>
                <p className="text-olive-800 font-medium italic text-center">{region.ideal}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-olive-600 font-elegant text-lg mb-6 italic">Regional Label Collection</p>
          <img src="/etiverbrun.png" alt="Regional Label Varieties" className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl border-4 border-olive-200" />
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section id="quality" className="py-24 bg-gradient-to-b from-olive-50 to-sand-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <OliveLeafPattern className="absolute top-10 left-10 w-48 h-48 text-olive-600" />
        <OliveLeafPattern className="absolute bottom-10 right-10 w-48 h-48 text-sand-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <OrnamentalDivider className="w-full max-w-xl mx-auto mb-8 text-olive-600" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-6">
            Certified Excellence
          </h2>
          <DecorativeBorder className="w-full max-w-xl mx-auto mb-6 text-olive-500" />
          <p className="text-2xl text-olive-700 max-w-3xl mx-auto font-elegant italic">
            Every bottle meets the highest international standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: 'Certified Organic', desc: 'Organic certification from accredited bodies' },
            { icon: Leaf, title: 'Extra Virgin', desc: 'First cold press, premium quality' },
            { icon: Package, title: 'Lab Tested', desc: 'Detailed analysis report included' },
            { icon: Award, title: 'Quality Assured', desc: 'Consistent quality and authentic flavor' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-olive-500/30 transition-all hover:-translate-y-2 text-center border-2 border-olive-200 hover:border-olive-400 relative group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <AncientPattern className="w-full h-full text-olive-600" />
              </div>
              <item.icon className="w-20 h-20 text-olive-600 mx-auto mb-6 relative z-10" />
              <h3 className="text-2xl font-display font-bold text-olive-900 mb-3">{item.title}</h3>
              <p className="text-olive-700 font-elegant text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <OliveTreeSVG className="absolute top-10 left-10 w-64 h-96 text-olive-600" />
        <OliveTreeSVG className="absolute bottom-10 right-10 w-64 h-96 text-sand-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <OrnamentalDivider className="w-full max-w-xl mx-auto mb-8 text-olive-600" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-olive-900 mb-6">
            Let's Work Together
          </h2>
          <DecorativeBorder className="w-full max-w-xl mx-auto mb-6 text-olive-500" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-olive-700 mb-10 leading-relaxed font-elegant">
              Whether you're looking for premium packaging solutions or interested in our 
              Tunisian olive oil products, we're here to help bring your vision to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-olive-600 to-olive-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-olive-900 mb-2 text-xl">Email</h3>
                  <p className="text-olive-700 font-elegant text-lg">contact@gumpack.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-sand-600 to-sand-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-olive-900 mb-2 text-xl">Phone</h3>
                  <p className="text-olive-700 font-elegant text-lg">+216 XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-olive-600 to-olive-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-olive-900 mb-2 text-xl">Location</h3>
                  <p className="text-olive-700 font-elegant text-lg">Tunisia</p>
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
                <label className="block text-olive-900 font-display font-semibold mb-3 text-lg">Name</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-xl border-2 border-olive-200 focus:border-olive-600 focus:outline-none transition-all bg-white/80 backdrop-blur-sm font-elegant text-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-olive-900 font-display font-semibold mb-3 text-lg">Email</label>
                <input
                  type="email"
                  className="w-full px-5 py-4 rounded-xl border-2 border-olive-200 focus:border-olive-600 focus:outline-none transition-all bg-white/80 backdrop-blur-sm font-elegant text-lg"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-olive-900 font-display font-semibold mb-3 text-lg">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl border-2 border-olive-200 focus:border-olive-600 focus:outline-none transition-all resize-none bg-white/80 backdrop-blur-sm font-elegant text-lg"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-10 py-5 bg-gradient-to-r from-olive-700 to-olive-800 text-white rounded-full font-display font-semibold text-lg hover:from-olive-800 hover:to-olive-900 transition-all shadow-2xl hover:shadow-olive-500/50 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ scrollToSection }) {
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
              Premium packaging solutions for Tunisia's finest olive oil
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3 text-sand-300">
              {['About', 'Products', 'Regions', 'Quality'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-white transition-colors font-elegant text-lg hover:translate-x-2 inline-block transition-transform"
                  >
                    {item}
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
