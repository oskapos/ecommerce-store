import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

import getProducts from "@/actions/get-products";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sort: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    order: searchParams.sort,
  });

  console.log(products);

  return (
    <div className="bg-white">
      <Container>
        <Billboard
          data={{
            id: "ads",
            label: "Dive into Anything",
            imageUrl: "/billboard-bg-3.png",
          }}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters />
            <div className="hidden lg:block">
              <Filter
                valueKey="sort"
                name="Order"
                data={[
                  {
                    id: "asc",
                    name: "Asc",
                    value: "asc",
                  },
                  {
                    id: "desc",
                    name: "Desc",
                    value: "desc",
                  },
                ]}
              />
              <Filter
                valueKey="colorId"
                name="Colors"
                data={[
                  {
                    id: "color",
                    value: "#fff",
                  },
                ]}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
