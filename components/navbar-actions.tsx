"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const { status, data: session } = useSession();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <div>
        {status === "authenticated" && (
          <div className="flex items-center gap-x-3">
            {/* {session.user!.name} */}
            <Link href="/api/auth/signout" className="ml-3">
              Sign Out
            </Link>
            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
              <ShoppingBag size={20} color="white" />
              <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
          </div>
        )}
        {status === "unauthenticated" && (
          <div className="flex space-x-3">
            <Link href="/api/auth/signin">Login</Link>
            <Link href="/signup">Signup</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarActions;
