import { ICategories, IShop, ISlider } from "@/types";

export const Categories: ICategories[] = [
  {
    id: 1,
    name: "All",
    icon: "https://cdn-icons-png.flaticon.com/512/6791/6791382.png",
  },
  {
    id: 2,
    name: "Books",
    icon: "https://cdn-icons-png.flaticon.com/512/5832/5832416.png",
  },
  {
    id: 3,
    name: "Cereals",
    icon: "https://cdn-icons-png.flaticon.com/512/9921/9921054.png",
  },
  {
    id: 4,
    name: "Cloths",
    icon: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    id: 5,
    name: "Electronics",
    icon: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
  },
  {
    id: 6,
    name: "Sweets",
    icon: "https://cdn-icons-png.flaticon.com/512/10560/10560504.png",
  },
  {
    id: 7,
    name: "Mobiles",
    icon: "https://cdn-icons-png.flaticon.com/512/644/644458.png",
  },
  {
    id: 8,
    name: "Medicines",
    icon: "https://cdn-icons-png.flaticon.com/512/3022/3022827.png",
  },
  {
    id: 9,
    name: "Tools",
    icon: "https://cdn-icons-png.flaticon.com/512/4873/4873901.png",
  },

  {
    id: 10,
    name: "Toys",
    icon: "https://cdn-icons-png.flaticon.com/512/4841/4841216.png",
  },
];

export const SliderData: ISlider[] = [
  {
    id: 1,
    name: "Slider_1",
    icon: require("../../assets/images/women.png"),
  },
  {
    id: 2,
    name: "Slider_2",
    icon: require("../../assets/images/mic.png"),
  },
  {
    id: 3,
    name: "Slider_3",
    icon: require("../../assets/images/shop.png"),
  },
];

export const shop: IShop[] = [
  {
    id: 1,
    name: "Alfa One Solutions",
    description:
      "You all in one tech solutions stop, where you'll find all you need.We have a large varities all tech products.",
    Categories: [
      {
        id: 1,
        name: "Mobiles",
        icon: "https://cdn-icons-png.flaticon.com/512/644/644458.png",
      },
      {
        id: 2,
        name: "Electronics",
        icon: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
      },
      
    ],
    image: "https://img.freepik.com/free-photo/indian-man-customer-buyer-mobile-phone-store-making-selfie-by-smartphone-monopod-stick-south-asian-peoples-technologies-concept-cellphone-shop_627829-1275.jpg",
    owner: {
      name: "Shop Owner",
      image: "",
    },
    address: "Bihar Sharif, Nalanda(803101)",
    website: "http://github.com./sraveshnandan",
    products: [
      {
        id: 1,
        name: "i Phone 15 plus(128gb)",
        description:
          "Presenting all new i Phone 15 plus with 128gb varient with top notch features of our new ios 17, where you'll get more than your expectations.",
        images: [
          "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51wKeZuX6rL._SX679_.jpg",
        ],
        original_price: 72999,
        discount_price: 120000,
        Category: "Mobiles",
      },
      {
        id: 2,
        name: "Apple Watch Ultra ",
        description:
          "WHY APPLE WATCH ULTRA 2 — Rugged, capable and built to meet the demands of endurance athletes, outdoor adventurers and water sports enthusiasts — with a specialised strap for each. The S9 SiP enables a super-bright display and a magical new way to quickly and easily interact with your Apple Watch without touching the display. Up to 36 hours of battery life and 72 hours in Low Power Mode.",
        images: [
          "https://m.media-amazon.com/images/I/41KhiZEpHDL._SY445_SX342_QL70_FMwebp_.jpg",
          "https://m.media-amazon.com/images/I/71Mdu94257L._SX679_.jpg",
        ],
        original_price: 89990,
        discount_price: 110000,
        Category: "Electronics",
      },
      {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        description:
          "Easy to grip. Satisfying to hold With their unified design and satin finish, Galaxy S24 feels as smooth as it looks They're the upgrades you've waited for. More screen. More battery. More processing power. There's so much more to love about Galaxy S24. A true pixel powerhouse that will not disappoint. Ever. Snap high-res pics for that will no doubt withstand the test of time for years to come.",
        images: [
          "https://m.media-amazon.com/images/I/31UlGyjxtTL._SX300_SY300_QL70_FMwebp_.jpg",
          "https://m.media-amazon.com/images/I/61zn9AwHhkL._SX679_.jpg",
        ],
        original_price: 79999,
        discount_price: 99000,
        Category: "Mobiles",
      },
    ],
  },
  {
    id: 2,
    name: "Bookworm's Haven",
    description:
      "Your one-stop shop for all your book needs. From bestsellers to rare finds, we have it all.",
    Categories: [
      {
        id: 4,
        name: "Books",
        icon: "https://cdn-icons-png.flaticon.com/512/5832/5832416.png",
      },
    ],
    image: "https://img.freepik.com/free-photo/teenage-student-reading-book-leaning-shelf_23-2148204270.jpg",
    owner: {
      name: "Bookstore Owner",
      image: "",
    },
    address: "123 Main Street, Anytown, USA",
    website: "http://bookwormshaven.com",
    products: [
      {
        id: 4,
        name: "The Great Gatsby",
        description:
          "A timeless classic by F. Scott Fitzgerald, depicting the Jazz Age in all its glory.",
        images: [
          "https://m.media-amazon.com/images/I/41zUkv8o1HL._SY445_SX342_.jpg",
          "https://m.media-amazon.com/images/I/81MXkwhbcjL._SY466_.jpg",
        ],
        original_price: 199,
        discount_price: 768,
        Category: "Books",
      },
    ],
  },
  {
    id: 3,
    name: "Cereal Emporium",
    description:
      "Start your day right with our wide selection of cereals from around the world.",
    Categories: [
      {
        id: 3,
        name: "Cereals",
        icon: "https://cdn-icons-png.flaticon.com/512/9921/9921054.png",
      },
      {
        id: 6,
        name: "Sweets",
        icon: "https://cdn-icons-png.flaticon.com/512/10560/10560504.png",
      },
    ],
    image: "https://img.freepik.com/free-photo/various-grains-bags_1398-3042.jpg",
    owner: {
      name: "Cereal Connoisseur",
      image: "https://img.freepik.com/free-photo/portrait-smiling-woman-serving-food-container-while-buying-bulk-supermarket_662251-1368.jpg",
    },
    address: "456 Elm Street, Anytown, USA",
    website: "http://cerealemporium.com",
    products: [
      {
        id: 5,
        name: "Corn Flakes",
        description: "A classic breakfast cereal loved by millions.",
        images: [
          "https://m.media-amazon.com/images/I/51tYkgoPNKL._SX300_SY300_QL70_FMwebp_.jpg",
          "https://m.media-amazon.com/images/I/81g9gAWpEYL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61OqdIl+rDL._SX679_.jpg",
        ],
        original_price: 195,
        discount_price: 243,
        Category: "Cereals",
      },
      {
        id: 6,
        name: "Saffola Masala Oats Veggie Twist Pouch",
        description: "he Indian palate is naturally inclined towards freshly prepared, hot and spicy foods. We crave for those savoury flavours during different times of the day. Saffola Masala Oats are bursting with flavour and are made from 1% natural wholegrain oats along with real vegetables and the choicest of masalas",
        images: [
          "https://m.media-amazon.com/images/I/91A4vI+LJ3L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/31e4pyaxnDL.jpg",
          "https://m.media-amazon.com/images/I/71gPPG4areL._SX679_.jpg",
        ],
        original_price: 289,
        discount_price: 772,
        Category: "Cereals",
      },
      {
        id: 7,
        name: "Bikano Rasogolla, 1kg (with 25% Extra)",
        description: "King of sweets;Country of Origin: India. temperature_rating:ambient: room temperature; form_factor:wet ngredients:Sugar Syrup, Water, Sugar, Sodium Bisulphite (E222), Cottage Cheese (Chenna), Rose Water. number_of_pieces:20 Material Features: Vegetarian; Flavor Name: Rasagola.",
        images: [
          "https://m.media-amazon.com/images/I/51OtJrMN2IL.jpg",
          "https://m.media-amazon.com/images/I/81BZUDGQ+-L._SY741_.jpg",
          "https://m.media-amazon.com/images/I/51vDjfTmr0L.jpg",
        ],
        original_price: 228,
        discount_price: 240,
        Category: "Sweets",
      },
      {
        id: 8,
        name: "Haldiram's Nagpur Kesar Peda (Pack 2) (250g*2)",
        description: "A box full of delicious mithai delicately prepared by the ones giving india sweet dreams since 1937, Every bite of Haldiram's tender mithai will fill your life with rich flavours and send you back in time, to the royal feasts of Maharajas.",
        images: [
          "https://m.media-amazon.com/images/I/711Z7ljjuLL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51RIxsSnFFL.jpg",
        ],
        original_price: 375,
        discount_price: 400,
        Category: "Sweets",
      },
    ],

  },
];
