export type NavigationMenuLink = {
  title: string;
  href: string;
  image?: string;
};

export const catalogProducts: NavigationMenuLink[] = [
  {
    title: "ДИВАНЫ",
    href: "/sofas",
    image: "/images/sofas.svg",
  },
  {
    title: "КРОВАТИ",
    href: "/beds",
    image: "/images/beds.svg",
  },
  {
    title: "КРЕСЛА",
    href: "/armchairs",
    image: "/images/chairs.svg",
  },
  {
    title: "ПУФЫ",
    href: "/poufs",
    image: "/images/poufs.svg",
  },
];

export const cooperationItems: NavigationMenuLink[] = [
  {
    title: "Дизайнерам и архитекторам",
    href: "/cooperation/designers-architects",
  },
  {
    title: "Партнером",
    href: "/cooperation/partners",
  },
];
