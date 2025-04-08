"use client";

import { catalogProducts, cooperationItems } from "@/constants/nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Globe, MessageCircle, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-20 flex items-center transition-colors duration-200 ${
        isMenuOpen ? "bg-background" : "bg-brand-white backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="mr-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="MONONOVA"
              width={150}
              height={30}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <NavigationMenu
            className="flex-1"
            onValueChange={(value) => {
              setIsMenuOpen(value !== "");
            }}
          >
            <NavigationMenuList className="flex items-center">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light uppercase">
                  КАТАЛОГ
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="container mx-auto">
                    <ul className="flex justify-end gap-4 w-full">
                      {catalogProducts.map((product) => (
                        <CatalogProduct
                          key={product.title}
                          title={product.title}
                          href={product.href}
                          image={product.image}
                        />
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/blog"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-sm font-light uppercase",
                    pathname === "/blog" && "font-bold"
                  )}
                >
                  БЛОГ
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-sm font-light uppercase",
                    pathname === "/about" && "font-bold"
                  )}
                >
                  О НАС
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/career"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-sm font-light uppercase",
                    pathname === "/career" && "font-bold"
                  )}
                >
                  КАРЬЕРА
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contacts"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-sm font-light uppercase",
                    pathname === "/contacts" && "font-bold"
                  )}
                >
                  КОНТАКТЫ
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light uppercase">
                  СОТРУДНИЧЕСТВО
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="container mx-auto">
                    <ul className="flex justify-end gap-4 w-full">
                      {cooperationItems.map((item) => (
                        <NavigationMenuLink asChild key={item.title}>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground"
                          >
                            <div className="font-light leading-none uppercase">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto flex items-center gap-4">
            <Link
              href="/contact"
              className="flex h-8 w-8 items-center justify-center"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Contact</span>
            </Link>
            <Link
              href="/language"
              className="flex h-8 w-8 items-center justify-center"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Language</span>
            </Link>
            <Link
              href="/cart"
              className="flex h-8 w-8 items-center justify-center"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

interface CatalogProductProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  image: string;
}

const CatalogProduct = React.forwardRef<
  React.ElementRef<"a">,
  CatalogProductProps
>(({ className, title, image, href = "#", ...props }, ref) => {
  return (
    <li className="w-1/6">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "h-48 block relative select-none space-y-1 rounded-md px-3 py-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground bg-transparent",
            className
          )}
          {...props}
        >
          <div className="text-base font-light leading-none">
            {title}

            <Image
              src={image}
              alt={title}
              width={220}
              height={50}
              priority
              className="absolute bottom-0 right-0"
            />
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
CatalogProduct.displayName = "CatalogProduct";
