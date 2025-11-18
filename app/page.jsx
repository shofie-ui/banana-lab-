"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-20 px-6">
      <h1 className="text-6xl font-bold text-[#4A3F2A]">Banana Lab 🍌</h1>
      <p className="mt-3 text-lg text-[#6B7280]">
        Fresh • Crispy • Creamy • Handmade Everyday
      </p>

      <Link
        href="/menu"
        className="mt-8 inline-block bg-[#FCE15A] hover:bg-[#E2C83B] text-[#4A3F2A] font-semibold px-8 py-3 rounded-xl"
      >
        Lihat Menu
      </Link>
    </div>
  );
}
