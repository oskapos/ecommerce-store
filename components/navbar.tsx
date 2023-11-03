import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import MainNavDropdown from "./main-nav-dropdown";

const Navbar = async () => {
  const rawCategories = await getCategories();

  const categories = rawCategories.map((rawCategorie) => ({
    id: rawCategorie,
    name: rawCategorie,
  }));

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-1 sm:px-4 lg:px-8 flex h-16 items-center gap-x-4">
          <Link href="/" className="ml-2 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <MainNavDropdown data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
