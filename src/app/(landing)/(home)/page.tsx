"use client";

import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="container mx-auto space-y-8">
      <Banner
        imageUrl="https://mononova.ru/wp-content/uploads/2024/03/img_2059-0.5x-1-scaled.jpg"
        altText="Mononova Furniture"
        videoId="-CL_Oxlv8BM"
      />

      <section>Мы создаём мебель — вы создаёте истории</section>
      <section>Популярные модели</section>
      <section>Блог</section>
      <section>Рабочий процесс</section>
      <section>Соц сети</section>
    </div>
  );
}
