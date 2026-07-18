import React from 'react';
import { motion } from 'motion/react';
import { MenuItem } from '../types';

const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'toasted-bagel-preserves',
    name: 'Toasted Bagel with Preserves',
    price: '$10.90',
    description: 'Freshly toasted artisan bagel served warm with premium local fruit preserves and whipped cream cheese.',
    image: '/src/assets/images/toasted_bagel_1784342248162.jpg'
  },
  {
    id: 'toasted-bagel-bacon',
    name: 'Toasted Bagel with Bacon & Avocado',
    price: '$17.90',
    description: 'Toasted artisan bagel topped with crispy streaky bacon, fresh vine-ripened tomatoes, and sliced Hass avocado.',
    image: '/src/assets/images/toasted_bagel_1784342248162.jpg'
  },
  {
    id: 'toasted-bagel-salmon',
    name: 'Toasted Bagel with Smoked Salmon',
    price: '$19.90',
    description: 'Artisan bagel loaded with premium smoked salmon, sliced avocado, capers, and smooth cream cheese.',
    image: '/src/assets/images/toasted_bagel_1784342248162.jpg'
  },
  {
    id: 'eggs-on-toast',
    name: 'Free Range Eggs on Toast',
    price: '$12.90',
    description: 'Two organic eggs prepared any style (poached, scrambled, or fried) served on your choice of toasted multigrain or artisan ciabatta.',
    image: '/src/assets/images/eggs_on_toast_1784342262034.jpg'
  },
  {
    id: 'bacon-eggs-toast',
    name: 'Bacon & Eggs on Toast',
    price: '$16.90',
    description: 'Crispy premium bacon and free-range eggs cooked to your style, served on a bed of toasted multigrain or artisan ciabatta.',
    image: '/src/assets/images/bacon_eggs_toast_1784342272764.jpg'
  },
  {
    id: 'mince-on-toast',
    name: 'Savory Mince on Toast',
    price: '$18.90',
    description: 'Rich steak mince simmered in a robust herb tomato bolognese sauce, served with two soft poached organic eggs on toasted rustic ciabatta. [GF Available]',
    image: '/src/assets/images/mince_on_toast_1784342283110.jpg'
  },
  {
    id: 'eggs-benedict-bacon',
    name: 'Eggs Benedict with Bacon or Ham',
    price: '$21.90',
    description: 'Poached free-range eggs served over crispy bacon or cured ham, with grilled button mushrooms, topped with velvety homemade lemon hollandaise on toasted focaccia.',
    image: '/src/assets/images/eggs_benedict_1784340787299.jpg'
  },
  {
    id: 'eggs-benedict-salmon',
    name: 'Eggs Benedict with Smoked Salmon',
    price: '$22.90',
    description: 'Delicate poached free-range eggs, premium cold-smoked Marlborough salmon, grilled button mushrooms, finished with homemade lemon hollandaise on toasted focaccia.',
    image: '/src/assets/images/eggs_benedict_1784340787299.jpg'
  },
  {
    id: 'savoury-omelette',
    name: 'Savoury Gourmet Omelette',
    price: '$20.90',
    description: 'A light and fluffy three-egg omelette with your choice of three fillings (Ham, Bacon, Cheese, Tomato, Mushroom, Onion, Spinach), served with toasted ciabatta.',
    image: '/src/assets/images/savoury_omelette_1784342292712.jpg'
  },
  {
    id: 'creamy-mushrooms',
    name: 'Creamy Mushroom on Toast',
    price: '$17.90',
    description: 'Sautéed button mushrooms slow-cooked in a rich, white wine and reduced cream reduction, served on toasted ciabatta. [Add bacon +$7.00, Add eggs +$5.00]',
    image: '/src/assets/images/creamy_mushrooms_1784342305979.jpg'
  },
  {
    id: 'hash-cakes',
    name: 'Homemade Hash Cakes',
    price: '$19.90',
    description: 'Golden-crisped homemade potato hash cakes served with warm sautéed baby spinach, soft poached eggs, and silky homemade hollandaise sauce. [Add smoked salmon +$9.00, Add bacon +$7.00]',
    image: '/src/assets/images/hash_cakes_1784342320309.jpg'
  },
  {
    id: 'full-breakfast',
    name: '777\'s Big Breakfast',
    price: '$24.90',
    description: 'The ultimate morning feast: crispy bacon, grilled chorizo, butter-sautéed mushrooms, grilled tomatoes, herb-roasted potatoes, organic eggs any style, served with toasted multigrain or ciabatta.',
    image: '/src/assets/images/full_breakfast_1784342334629.jpg'
  },
  {
    id: 'vege-breakfast',
    name: 'The Vege Breakfast',
    price: '$20.90',
    description: 'A wholesome morning plate: grilled halloumi cheese, roasted mushrooms, grilled tomatoes, eggs prepared to your style, sautéed spinach, served with toasted multigrain or ciabatta.',
    image: '/src/assets/images/vege_breakfast_1784342345422.jpg'
  },
  {
    id: 'french-toast',
    name: 'Brioche French Toast',
    price: '$19.90',
    description: 'Thick golden slices of toasted brioche, grilled crispy bacon, sweet caramelized banana, warm organic berry coulis, coconut crumble, and pure maple syrup. [V]',
    image: '/src/assets/images/french_toast_1784340803463.jpg'
  },
  {
    id: 'blueberry-pancakes',
    name: 'Blueberry Soufflé Pancakes',
    price: '$16.90',
    description: 'A towering fluffy pancake stack topped with sweet banana, fresh forest berries, organic Greek yogurt, rich berry coulis, maple syrup, and toasted coconut crumb. [V]',
    image: '/src/assets/images/blueberry_pancakes_1784340820482.jpg'
  },
  {
    id: 'chorizo-spud-crush',
    name: 'Chorizo & Spud Crush',
    price: '$18.90',
    description: 'Pan-seared chorizo sausage, seasoned roasted potatoes, caramelized onions, and wilted spinach topped with two perfect poached eggs. [DF / GF]',
    image: '/src/assets/images/chorizo_spud_crush_1784342355881.jpg'
  },
  {
    id: 'salmon-scrambled-croissant',
    name: 'Salmon Scrambled Croissant',
    price: '$21.90',
    description: 'Warm, flaky toasted butter croissant stuffed with rich scrambled eggs, cold-smoked Marlborough salmon, fresh avocado slices, capers, and velvety cream cheese.',
    image: '/src/assets/images/smoked_salmon_scrambled_1784340834549.jpg'
  }
];

const SIDES = [
  { name: 'Bacon / Ham', price: '$7.00', desc: 'Premium grilled bacon or cured breakfast ham.' },
  { name: 'Mushrooms / Tomatoes / Spinach', price: '$5.00', desc: 'Sautéed button mushrooms, grilled vine tomatoes, or wilted spinach.' },
  { name: 'Hashbrowns', price: '$5.00', desc: 'Golden crispy fried hashbrowns.' },
  { name: 'Smoked Salmon', price: '$9.00', desc: 'Premium cold-smoked Marlborough salmon.' },
  { name: 'Free Range Eggs', price: '$5.00', desc: 'Two fresh local organic eggs cooked to your style.' },
  { name: 'Gluten Free Bread', price: '$3.00', desc: 'Toasted premium gluten-free artisan bread.' },
  { name: 'Fries with Aioli & Tomato Sauce', price: '$8.50', desc: 'Crispy golden fries. [GF]' },
  { name: 'Kumara Fries', price: '$9.90', desc: 'Traditional New Zealand sweet potato fries served with garlic aioli.' },
  { name: 'Chicken Nuggets with Fries & Aioli', price: '$10.90', desc: 'Tender chicken nuggets with a side of crispy fries and rich aioli.' }
];

const SAUCES_NOTE = "All dipping sauces (Aioli, Tomato Sauce, Hollandaise, Honey Mustard) are Gluten-Free [GF]";

const HOT_BEVERAGES: MenuItem[] = [
  {
    id: 'long-black',
    name: 'Long Black',
    price: '$5.85',
    description: 'Strong and rich coffee made from espresso-style beans.',
    image: '/src/assets/images/filter_brew_coffee_1784341692335.jpg'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    price: '$6.50',
    description: 'Rich and creamy beverage to warm your day.',
    image: '/src/assets/images/hot_chocolate_mug_1784375492844.jpg'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    price: '$5.07',
    description: 'Rich and intense coffee shot.',
    image: '/src/assets/images/espresso_shot_1784375505638.jpg'
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    price: '$7.80',
    description: 'Matcha green tea blended with steamed milk for a smooth, warming latte.',
    image: '/src/assets/images/matcha_latte_cup_1784375519973.jpg'
  },
  {
    id: 'tea',
    name: 'Tea',
    price: '$6.50',
    description: 'Hot brewed tea, simple and soothing.',
    image: '/src/assets/images/steaming_hot_tea_1784375532933.jpg'
  },
  {
    id: 'sweet-chai-latte',
    name: 'Sweet Chai Latte',
    price: '$6.50',
    description: 'Rich and creamy black tea latte with a sweet twist.',
    image: '/src/assets/images/sweet_chai_latte_1784375545029.jpg'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: '$6.50',
    description: 'Rich and smooth espresso-style coffee drink.',
    image: '/src/assets/images/cappuccino_foam_1784375562104.jpg'
  },
  {
    id: 'latte',
    name: 'Latte',
    price: '$6.50',
    description: 'Rich and velvety espresso-style coffee drink.',
    image: '/src/assets/images/flat_white_coffee_1784341673554.jpg'
  },
  {
    id: 'americano',
    name: 'Americano',
    price: '$5.85',
    description: 'Rich and smooth espresso-style coffee.',
    image: '/src/assets/images/filter_brew_coffee_1784341692335.jpg'
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    price: '$6.50',
    description: 'Rich and velvety coffee drink.',
    image: '/src/assets/images/flat_white_coffee_1784341673554.jpg'
  },
  {
    id: 'mochaccino',
    name: 'Mochaccino',
    price: '$6.50',
    description: 'Rich and velvety coffee drink with a chocolate twist.',
    image: '/src/assets/images/mochaccino_cup_1784375574954.jpg'
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    price: '$5.85',
    description: 'Rich and intense espresso shot topped with a dollop of frothed milk.',
    image: '/src/assets/images/macchiato_glass_1784375586060.jpg'
  }
];

const COLD_BEVERAGES: MenuItem[] = [
  {
    id: 'ginger-beer',
    name: 'Ginger Beer (375ml)',
    price: '$6.90',
    description: 'Fizzy and refreshing ginger-flavoured drink.',
    image: '/src/assets/images/ginger_beer_bottle_1784375597778.jpg'
  },
  {
    id: 'classic-coke',
    name: 'Classic Coke Bottle (330ml)',
    price: '$6.90',
    description: 'Enjoy the refreshing taste of Classic Coke in a convenient 330ml bottle.',
    image: '/src/assets/images/classic_coke_bottle_1784375610415.jpg'
  },
  {
    id: 'zero-sugar',
    name: 'Zero Sugar (330ml)',
    price: '$6.90',
    description: 'Refreshing 330ml beverage with zero sugar.',
    image: '/src/assets/images/classic_coke_bottle_1784375610415.jpg'
  },
  {
    id: 'mango-passion-kombucha',
    name: 'Mango Passion Kombucha (330ml)',
    price: '$6.90',
    description: 'Fermented tea drink infused with mango and passionfruit flavours.',
    image: '/src/assets/images/kombucha_bottle_1784375623164.jpg'
  },
  {
    id: 'raspberry-lemonade-kombucha',
    name: 'Raspberry Lemonade Kombucha (330ml)',
    price: '$6.90',
    description: 'Fizzy fermented tea drink with raspberry and lemonade flavours.',
    image: '/src/assets/images/kombucha_bottle_1784375623164.jpg'
  },
  {
    id: 'wild-berry-kombucha',
    name: 'Wild Berry Kombucha (330ml)',
    price: '$6.90',
    description: 'Fermented tea drink infused with wild berries.',
    image: '/src/assets/images/kombucha_bottle_1784375623164.jpg'
  },
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    price: '$11.05',
    description: 'Espresso. Chilled espresso blended with cold water, creating a refreshing and bold coffee experience.',
    image: '/src/assets/images/cold_brew_coffee_1784341790239.jpg'
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    price: '$11.05',
    description: 'Espresso. Chilled espresso blended with creamy milk and ice, creating a refreshing coffee experience.',
    image: '/src/assets/images/iced_latte_glass_1784375641757.jpg'
  },
  {
    id: 'iced-coffee-frappe',
    name: 'Iced Coffee Frappe',
    price: '$11.05',
    description: 'Espresso. Chilled coffee blended to perfection, topped with whipped cream and a sprinkle of cocoa.',
    image: '/src/assets/images/iced_coffee_frappe_1784375652556.jpg'
  },
  {
    id: 'iced-chocolate-frappe',
    name: 'Iced Chocolate Frappe',
    price: '$11.05',
    description: 'Rich and creamy chocolate blended with ice, perfect for a cool treat.',
    image: '/src/assets/images/iced_chocolate_frappe_1784375663057.jpg'
  },
  {
    id: 'iced-mocha-frappe',
    name: 'Iced Mocha Frappe',
    price: '$11.05',
    description: 'Espresso. Chilled mocha frappe blended with rich espresso, creamy milk, and topped with whipped cream.',
    image: '/src/assets/images/iced_coffee_frappe_1784375652556.jpg'
  },
  {
    id: 'iced-vanilla-frappe',
    name: 'Iced Vanilla Frappe',
    price: '$11.05',
    description: 'Creamy and refreshing vanilla flavoured drink.',
    image: '/src/assets/images/iced_coffee_frappe_1784375652556.jpg'
  },
  {
    id: 'smoothies',
    name: "777's Smoothies",
    price: '$11.57',
    description: 'Chilled blended smoothie, thick and refreshing.',
    image: '/src/assets/images/fruit_smoothie_glass_1784375677523.jpg'
  }
];

export default function MenuSection() {
  return (
    <section 
      id="menu" 
      className="scroll-mt-24 py-24 bg-[#F5F9E5] text-[#620607] transition-all duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-24">
          <span className="text-mono text-xs uppercase tracking-widest text-[#C63E4E] font-medium block mb-2">
            The Auckland Brunch
          </span>
          <h2 className="text-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#620607]">
            Signature Morning Menu
          </h2>
          <div className="w-12 h-[1px] bg-[#E19184] mx-auto mt-6" />
        </div>

        {/* Alternating Signature Dishes */}
        <div className="space-y-32 md:space-y-40">
          {SIGNATURE_DISHES.map((dish, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <div 
                key={dish.id} 
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Horizontal Sliding Image Container */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl border border-[#E19184]/20 shadow-xs bg-[#F5F9E5]">
                  <motion.img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-4/3 object-cover filter saturate-[0.95]"
                    initial={{ x: isEven ? 80 : -80, opacity: 0.8 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 45, 
                      damping: 15,
                      duration: 1.2
                    }}
                  />
                </div>

                {/* Fading text content */}
                <motion.div 
                  className="w-full md:w-1/2 space-y-4 md:px-6"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.0, delay: 0.2 }}
                >
                  <div className="flex justify-between items-baseline border-b border-[#E19184]/20 pb-2">
                    <h3 className="text-serif text-2xl md:text-3xl font-light tracking-wide text-[#620607]">
                      {dish.name}
                    </h3>
                    <span className="text-serif text-xl font-medium text-[#C63E4E]">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-sans text-sm md:text-base font-light text-[#620607]/80 leading-relaxed">
                    {dish.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Something on Side Section */}
        <div className="mt-40 pt-24 border-t border-[#E19184]/25">
          <div className="text-center mb-16">
            <span className="text-mono text-xs uppercase tracking-widest text-[#C63E4E] font-medium block mb-2">
              Enhance Your Plate
            </span>
            <h3 className="text-serif text-3xl md:text-4xl font-light text-[#620607]">
              Something on Side
            </h3>
            <div className="w-12 h-[1px] bg-[#E19184] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SIDES.map((side, idx) => (
              <motion.div 
                key={idx}
                className="bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] p-6 rounded-2xl border border-[#E19184]/15 hover:border-[#C63E4E]/30 transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              >
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline border-b border-[#E19184]/10 pb-1.5 mb-2">
                    <h4 className="text-sans text-sm font-semibold text-[#620607] tracking-wide">
                      {side.name}
                    </h4>
                    <span className="text-serif text-sm font-semibold text-[#C63E4E]">
                      {side.price}
                    </span>
                  </div>
                  <p className="text-sans text-[11px] text-[#620607]/75 font-light leading-relaxed">
                    {side.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sauces/Gluten-Free elegant note */}
          <div className="mt-10 text-center">
            <p className="text-sans text-xs italic text-[#475B35] font-light bg-[#475B35]/5 inline-block px-6 py-2.5 rounded-full border border-[#475B35]/10">
              💡 {SAUCES_NOTE}
            </p>
          </div>
        </div>

        {/* Hot Beverages Section */}
        <div className="mt-40 pt-24 border-t border-[#E19184]/25">
          <div className="text-center mb-24">
            <span className="text-mono text-xs uppercase tracking-widest text-[#C63E4E] font-medium block mb-2">
              Our Hot Brews
            </span>
            <h3 className="text-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#620607]">
              Hot Beverages
            </h3>
            <div className="w-12 h-[1px] bg-[#E19184] mx-auto mt-6" />
          </div>

          <div className="space-y-32 md:space-y-40">
            {HOT_BEVERAGES.map((drink, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={drink.id} 
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Horizontal Sliding Image Container */}
                  <div className="w-full md:w-1/2 overflow-hidden rounded-2xl border border-[#E19184]/20 shadow-xs bg-[#F5F9E5]">
                    <motion.img
                      src={drink.image}
                      alt={drink.name}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-4/3 object-cover filter saturate-[0.95]"
                      initial={{ x: isEven ? 80 : -80, opacity: 0.8 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 45, 
                        damping: 15,
                        duration: 1.2
                      }}
                    />
                  </div>

                  {/* Fading text content */}
                  <motion.div 
                    className="w-full md:w-1/2 space-y-4 md:px-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.0, delay: 0.2 }}
                  >
                    <div className="flex justify-between items-baseline border-b border-[#E19184]/20 pb-2">
                      <h3 className="text-serif text-2xl md:text-3xl font-light tracking-wide text-[#620607]">
                        {drink.name}
                      </h3>
                      <span className="text-serif text-xl font-medium text-[#C63E4E]">
                        {drink.price}
                      </span>
                    </div>
                    <p className="text-sans text-sm md:text-base font-light text-[#620607]/80 leading-relaxed">
                      {drink.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cold Beverages Section */}
        <div className="mt-40 pt-24 border-t border-[#E19184]/25">
          <div className="text-center mb-24">
            <span className="text-mono text-xs uppercase tracking-widest text-[#475B35] font-medium block mb-2">
              Chilled & Refreshing
            </span>
            <h3 className="text-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#620607]">
              Cold Beverages
            </h3>
            <div className="w-12 h-[1px] bg-[#E19184] mx-auto mt-6" />
          </div>

          <div className="space-y-32 md:space-y-40">
            {COLD_BEVERAGES.map((drink, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={drink.id} 
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Horizontal Sliding Image Container */}
                  <div className="w-full md:w-1/2 overflow-hidden rounded-2xl border border-[#E19184]/20 shadow-xs bg-[#F5F9E5]">
                    <motion.img
                      src={drink.image}
                      alt={drink.name}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-4/3 object-cover filter saturate-[0.95]"
                      initial={{ x: isEven ? 80 : -80, opacity: 0.8 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 45, 
                        damping: 15,
                        duration: 1.2
                      }}
                    />
                  </div>

                  {/* Fading text content */}
                  <motion.div 
                    className="w-full md:w-1/2 space-y-4 md:px-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.0, delay: 0.2 }}
                  >
                    <div className="flex justify-between items-baseline border-b border-[#E19184]/20 pb-2">
                      <h3 className="text-serif text-2xl md:text-3xl font-light tracking-wide text-[#620607]">
                        {drink.name}
                      </h3>
                      <span className="text-serif text-xl font-medium text-[#C63E4E]">
                        {drink.price}
                      </span>
                    </div>
                    <p className="text-sans text-sm md:text-base font-light text-[#620607]/80 leading-relaxed">
                      {drink.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
