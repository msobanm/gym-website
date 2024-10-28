import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import {
  NextArrow,
  PrevArrow,
} from "../pages/home/components/carousel/CarouselArrows"

// export const icons = [
//   { icon: FaFacebook, hoverColor: "text-secondary" },
//   { icon: FaTwitter, hoverColor: "text-secondary" },
//   { icon: FaInstagram, hoverColor: "text-secondary" },
//   { icon: FaLinkedin, hoverColor: "text-secondary" },
// ]

export const icons = [
  { icon: FaFacebook, hoverColor: " hover:text-blue-500" },
  { icon: FaTwitter, hoverColor: " hover:text-blue-400" },
  { icon: FaInstagram, hoverColor: " hover:text-pink-500" },
  { icon: FaLinkedin, hoverColor: " hover:text-blue-700" },
]

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
}

export const navList = [
  { title: "Home" },
  { title: "Products" },
  { title: "About" },
  { title: "Contact" },
]

export const legal = [
  { text: "PRIVACY POLICY" },
  { text: "TERMS & CONDITIONS" },
]

export const hot = [
  {
    id: 1,
    name: "Product 1",
    initial_price: 5500,
    final_price: 2500,
    image: "./img/slider/1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    initial_price: 5500,
    final_price: 2500,
    image: "./img/slider/2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    initial_price: 5500,
    final_price: 2500,
    image: "./img/slider/3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    initial_price: 5500,
    final_price: 2500,
    image: "./img/slider/4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    initial_price: 5500,
    final_price: 2500,
    image: "./img/slider/5.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    initial_price: 5500,
    final_price: 2500,
    image: "./img/slider/6.jpg",
  },
]

export const categories = [
  "All",
  "Creatine",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
]

export const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
]

export const reviews = [
  {
    id: 1,
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis vel augue cursus ullamcorper.",
    rating: 4,
  },
  {
    id: 2,
    author: "Jane Smith",
    content:
      "Sed blandit ultrices tortor, nec mattis ligula posuere id. Duis sit amet lacus vitae nunc gravida fermentum.",
    rating: 5,
  },
  {
    id: 3,
    author: "Soban Malik",
    content:
      "Sed blandit ultrices tortor, nec mattis ligula posuere id. Duis sit amet lacus vitae nunc gravida fermentum.",
    rating: 2,
  },
]

export const shopItemImages = [
  {
    path: "https://fitzone.pk/cdn/shop/files/Whey_Protein_785x.webp?v=1715109276",
  },
  {
    path: "https://fitzone.pk/cdn/shop/files/Weight_Gainer_785x.webp?v=1715109388",
  },
]

export const data = [
  {
    id: 1,
    name: "Whey Protein Isolate",
    image:
      "https://fitzone.pk/cdn/shop/files/dymatize-iso-100-hydrolyzed-whey-protein-5lbs.webp?v=1699412757",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description:
      "<h1>Ultimate Nutrition Prostar Whey Protein in Pakistan</h1>\n<p>Original & Authentic Ultimate Nutrition Prostar Whey Protein is available in Pakistan for you to achieve your fitness goal of gaining Lean Muscle Size & Increase Strength. We offer USA's best quality products, a Money-Back Guarantee, 24/7 Customer Support, Diet Plans, and free Fitness Consultations.</p>\n<h1>Key Benefits</h1>\n<ul><li>Helps in achieving a ripped and chiseled physique.</li><li>A source of essential vitamins such as Vitamin C and Vitamin A.</li><li>Provides essential minerals, including calcium and iron.</li><li>Supports improved immunity.</li><li>Contributes to stronger bones.</li><li>Enhances the flow of oxygen within the body.</li><li>Reduces the risk of injury.</li></ul>\n<h1>Ingredients</h1>\n<ul><li>Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, and Whey Peptide)</li><li>Cocoa</li><li>Natural and Artificial Flavors</li><li>Sodium Chloride (Salt)</li><li>Sucralose (a non-caloric artificial sweetener)</li><li>Acesulfame Potassium (another artificial sweetener)</li><li>Soy Lecithin (used as an emulsifier)</li></ul>\n<h1>How To Use?</h1>\n<p>Take 1 scoop (25 grams of protein) with 8-10 oz of cold water, milk, or any beverage of your choice. Vary the amount of liquid to achieve your desired flavor and consistency. Drink 1-3 servings daily, or as needed to satisfy your protein or muscle-enhancing requirements.</p>",
    initial_price: 3200,
    final_price: 2800,
    category: "Whey Protein",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    image:
      "https://fitzone.pk/cdn/shop/files/musclepharm-combat-protein-powder-4lbs.webp?v=1699847216",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description: "Micronized creatine monohydrate to boost strength and power.",
    initial_price: 1500,
    final_price: 1200,
    category: "Creatine",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 3,
    name: "BCAA Powder",
    image:
      "https://fitzone.pk/cdn/shop/files/muscletech-nitro-tech-100-whey-gold-5lbs.webp?v=1699681218",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description:
      "Branched-chain amino acids to enhance muscle recovery and reduce soreness.",
    initial_price: 2200,
    final_price: 1900,
    category: "BCAA",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 4,
    name: "Pre-Workout Formula",
    image:
      "https://fitzone.pk/cdn/shop/files/scivation-xtend-bcaa-30-servings.webp?v=1699421253",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description: "Explosive pre-workout energy with beta-alanine and caffeine.",
    initial_price: 2500,
    final_price: 2100,
    category: "Pre-Workout",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 5,
    name: "Fish Oil Capsules",
    image:
      "https://fitzone.pk/cdn/shop/files/Kevin-Levrone-Levro-gold-creatine.webp?v=1708527063",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description: "Omega-3 rich fish oil capsules to support heart health.",
    initial_price: 1800,
    final_price: 1500,
    category: "Omega-3",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 6,
    name: "Multivitamin Tablets",
    image:
      "https://fitzone.pk/cdn/shop/files/kevin-levrone-levro-legendary-mass-3kg.webp?v=1713168712",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description: "Comprehensive multivitamin for overall health and wellness.",
    initial_price: 1200,
    final_price: 1000,
    category: "Vitamins",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 7,
    name: "Glutamine Powder",
    image:
      "https://fitzone.pk/cdn/shop/files/bpi-sports-cla-carnitine-50-servings.webp?v=1713169132",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description: "Glutamine to promote muscle recovery and immune support.",
    initial_price: 1600,
    final_price: 1300,
    category: "Glutamine",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 8,
    name: "Casein Protein",
    image:
      "https://fitzone.pk/cdn/shop/files/insane-labz-psychotic-pre-workout-60-servings.webp?v=1699848209",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description:
      "Slow-digesting casein protein for sustained muscle recovery overnight.",
    initial_price: 3000,
    final_price: 2600,
    category: "Casein Protein",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 9,
    name: "ZMA Capsules",
    image:
      "https://fitzone.pk/cdn/shop/files/kevin-levrone-anabolic-iso-whey-2kg.webp?v=1699416484",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description:
      "Zinc, magnesium, and vitamin B6 for muscle recovery and improved sleep.",
    initial_price: 1400,
    final_price: 1100,
    category: "ZMA",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 10,
    name: "L-Carnitine Liquid",
    image:
      "https://fitzone.pk/cdn/shop/files/Redcon1-Total-War-pre-workout-30-servings.webp?v=1699420383",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description:
      "L-Carnitine liquid for enhanced fat metabolism and energy production.",
    initial_price: 2000,
    final_price: 1700,
    category: "Fat Burner",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 11,
    name: "Mass Gainer",
    image:
      "https://fitzone.pk/cdn/shop/files/Myprotein-Impact-Whey-Protein.webp?v=1717252749",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description:
      "High-calorie mass gainer with protein, carbs, and creatine for muscle growth.",
    initial_price: 4000,
    final_price: 3500,
    category: "Mass Gainer",
    rating: { rate: 4, count: 200 },
  },
  {
    id: 12,
    name: "Beta-Alanine Capsules",
    image:
      "https://fitzone.pk/cdn/shop/files/gat-sport-mens-multi-test-150-tabs.webp?v=1699847895",
    facts:
      "https://fitzone.pk/cdn/shop/files/ultimate-nutrition-prostar-100-whey-protein-5lbs-nutritional-facts.webp?v=1701847501",
    description: "Beta-alanine to improve endurance and reduce muscle fatigue.",
    initial_price: 1700,
    final_price: 1400,
    category: "Endurance",
    rating: { rate: 4, count: 200 },
  },
]
