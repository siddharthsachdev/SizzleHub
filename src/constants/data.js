import images from './images';

const wines = [
  {
    title: 'Meal Express Thali',
    price: '₹495',
    tags: 'FP | 1 Plate ',
  },
  {
    title: 'Dal Te Subzian',
    price: '₹278',
    tags: 'HP | 1 bowl',
  },
  {
    title: 'Khazana-e-kebab Veg',
    price: '₹397',
    tags: 'FP | 2 servers',
  },
  {
    title: 'Khushbu-e-basmati',
    price: '$319',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Punjabi Lassi',
    price: '₹126',
    tags: 'HP | 1 Bowl',
  },
];

const cocktails = [
  {
    title: 'Blue Moon',
    price: '₹220',
    tags: 'Blue Curacad | Lemonade | soda',
  },
  {
    title: "The Monk Cooler",
    price: '₹310',
    tags: 'Litchi Juice | Ginger Juice | Grenadine',
  },
  {
    title: 'Virjin Mojito',
    price: '₹250',
    tags: 'Macerated Lemon | Mint Muddled',
  },
  {
    title: 'Cranberry Bliz',
    price: '₹310',
    tags: 'Cranberry | Lemonade Juice | Basil Leaf',
  },
  {
    title: 'Lavender Lemonade',
    price: '₹295',
    tags: 'Lemonade | Lavender Cordial | Lime Juice',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Times Food & Nightlife Awards',
    subtitle: 'Recognizes the best restaurants, chefs, and cuisines across various categories.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Honoring Dynamic Promise in Emerging Culinary Destinations.',
  },
  {
    imgUrl: images.award05,
    title: 'Chef Awards',
    subtitle: 'Honors the best contribution of chefs in the culinary world.',
  },
  {
    imgUrl: images.award03,
    title: "Zomato User's Choice Awards",
    subtitle: 'Based on user reviews and ratings on the Zomato platform.',
  },
];

export default { wines, cocktails, awards };
