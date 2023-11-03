import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({});
  const featuredPropducts = products.filter((product) => product?.rating?.rate! >= 4.5);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard
          data={{
            id: "main",
            label: "The place for all your purchases.",
            imageUrl: "/billboard-bg-2.png",
          }}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={featuredPropducts} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
