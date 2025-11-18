"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Pisang Gapit", basePrice: 12000, img: "/products/gapit.jpg" },
  { id: 2, name: "Kapik", basePrice: 15000, img: "/products/kapik.jpg" },
  { id: 3, name: "Pisang Lumer", basePrice: 18000, img: "/products/lumer.jpg" },
  { id: 4, name: "Pisang Crospy", basePrice: 17000, img: "/products/crospy.jpg" },
];

const toppings = [
  { name: "Coklat", price: 3000 },
  { name: "Keju", price: 3000 },
  { name: "Susu Kental Manis Coklat", price: 2500 },
];

// WA number configured below (international format without +)
const WA_NUMBER = "6281807775531"; // Devina's number provided

export default function Menu() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);

  function toggleTopping(t) {
    if (selectedToppings.includes(t)) {
      setSelectedToppings(selectedToppings.filter((x) => x !== t));
    } else {
      setSelectedToppings([...selectedToppings, t]);
    }
  }

  const totalPrice =
    (selectedProduct?.basePrice || 0) +
    selectedToppings.reduce((sum, x) => sum + x.price, 0);

  const orderText = encodeURIComponent(
    `Halo Banana Lab! Saya pesan ${selectedProduct?.name || ""} dengan topping: ${selectedToppings
      .map((x) => x.name)
      .join(", ")}. Total: Rp ${totalPrice}.`
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#4A3F2A]">Pilih Menu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-[#FCE15A]/50 p-4 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition"
            onClick={() => {
              setSelectedProduct(p);
              setSelectedToppings([]);
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
          >
            <img src={p.img} className="rounded-xl mb-3" alt={p.name} />
            <h3 className="text-xl font-semibold text-[#4A3F2A]">{p.name}</h3>
            <p className="text-[#E2C83B] font-bold">Rp {p.basePrice}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="mt-10 bg-white rounded-xl p-6 border border-yellow-300/50 shadow-sm">
          <div className="flex gap-4 items-start">
            <img src={selectedProduct.img} className="w-36 rounded-lg" alt="" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#4A3F2A]">{selectedProduct.name}</h3>
              <p className="font-semibold mb-2">Pilih topping:</p>

              <div className="grid grid-cols-2 gap-3 max-w-sm">
                {toppings.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => toggleTopping(t)}
                    className={`border p-2 rounded-lg text-left ${selectedToppings.includes(t) ? "bg-[#FCE15A]" : "bg-white"}`}
                  >
                    <div className="flex justify-between"><span>{t.name}</span><span>+Rp{t.price}</span></div>
                  </button>
                ))}
              </div>

              <p className="text-xl font-bold mt-6">Total: Rp {totalPrice}</p>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${orderText}`}
                className="inline-block text-center bg-[#FCE15A] mt-6 py-3 px-6 rounded-xl font-semibold hover:bg-[#E2C83B]"
              >
                Order via WA
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
