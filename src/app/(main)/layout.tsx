import React, { ReactElement } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function LandingLayout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
