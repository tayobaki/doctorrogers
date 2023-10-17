// import Image from "next/image";
import Logo from "@/assets/asset 0.png";
import first from "@/assets/asset 25.jpeg";
import second from "@/assets/asset 21.jpeg";
import third from "@/assets/asset 23.jpeg";
import seller1 from "@/assets/asset 7.png";
import seller2 from "@/assets/asset 28.png";
import seller3 from "@/assets/asset 9.png";
import hover2 from '@/assets/asset 29.jpeg'


export const navLinks = [
  {
    title: "Shop +",

    collections: ["Shop All", "Collections", "Restore", "Face", "Body"],
  },
  {
    title: "About +",
  },
  {
    title: "Blog",
  },
];

export const searchResults = [
  { title: "All products", href: "/all products", image: Logo },
  { title: "healing balm", href: "/healing-balm" },
  { title: "lip balm", href: "/lip-balm" },
  { title: "restore healing balm", href: "/restore-healing-balm" },
  { title: "cream", href: "/cream" },
  { title: "face cream", href: "/face-cream" },
  { title: "body cream", href: "/body-cream" },
  { title: "restore face cream", href: "/restore-face-cream" },
];

export const header = [
  { title: "Hundreds OF USES", img: first },
  { title: "LISTEN to your skin", img: second },
  { title: "just launched THE ADVANCE COLLECTION", img: second },
];

export const BestSeller = [
  {
    img: seller1,
    title: "Face Cream",
    slug: "face-cream",
    price: "$78",
    hover: third,
    smallImage:[
      {cover: seller1}
      [seller1, seller2, seller3]
    ],
  },
  {
    img: seller2,
    title: "Restore Healing Balm",
    slug: "restore-healing-balm",
    price: "$68",
    hover: hover2,
    smallImage:[
      {cover: seller1}
      [seller1, seller2, seller3]
    ],
  },
  {
    img: seller3,
    title: "Restore Healing Balm",
    slug: "restore-healing-balm",
    price: "$68",
    hover: seller1,
    smallImage:[
      {cover: seller1}
      [seller1, seller2, seller3]
    ],
  },
];
