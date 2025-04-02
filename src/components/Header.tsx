"use client";

import { catalogProducts, cooperationItems } from "@/constants/nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Globe, MessageCircle, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
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
          <NavigationMenu className="flex-1">
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium uppercase">
                  КАТАЛОГ
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-4 gap-3 p-6">
                    {catalogProducts.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex flex-col items-center justify-center gap-2 rounded-md p-3 hover:bg-muted"
                      >
                        <div className="flex h-[100px] w-[150px] items-center justify-center">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={150}
                            height={100}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/blog"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-sm font-medium uppercase",
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
                    "text-sm font-medium uppercase",
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
                    "text-sm font-medium uppercase",
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
                    "text-sm font-medium uppercase",
                    pathname === "/contacts" && "font-bold"
                  )}
                >
                  КОНТАКТЫ
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium uppercase">
                  СОТРУДНИЧЕСТВО
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {cooperationItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
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
