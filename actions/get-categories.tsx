import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/categories`;

const getCategories = async (): Promise<string[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getCategories;
