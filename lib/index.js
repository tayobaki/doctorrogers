import { BestSeller } from "@/app/constants/data";

export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    throw new Error("Failed Fetch");
  }

  return res.json();
};

export const getSingleProduct =  (slug) => {
  const product = BestSeller.find((product) => product.slug === slug);

  return product;
};
