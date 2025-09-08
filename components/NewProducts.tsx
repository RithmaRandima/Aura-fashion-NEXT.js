import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/banner-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vitle Plus",
    rating: 4,
    price: "100.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <div className="font-medium text-2xl pb-4">New Products</div>
      </div>

      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {productsData.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
