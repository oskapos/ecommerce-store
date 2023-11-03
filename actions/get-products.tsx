import { Product } from "@/types";
import qs from "query-string";

interface Query {
  categoryId?: string;
  colorId?: string;
  order?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const URL = !query.categoryId
    ? `${process.env.NEXT_PUBLIC_API_URL}/products`
    : `${process.env.NEXT_PUBLIC_API_URL}/products/category/${query.categoryId}`;
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sort: query.order,
    },
  });

  console.log(url);

  const res = await fetch(URL);

  return res.json();
};

export default getProducts;
