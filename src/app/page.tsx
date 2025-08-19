import Link from "next/link";
import { Fragment } from "react";
import CartItem from "./components/CartItem/CartItem";
import ProductCard from "./components/ProductCard/ProductCard";

export default async function Home() {
  const res = await fetch(
    `http://localhost:8000/products/?_page=1&_per_page=4`
  );

  const data = await res.json();
  console.log(data);
  return (
    <Fragment>
      <header>
        <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/066/701/791/non_2x/abstract-background-geometric-gradient-orange-pink-and-purple-concept-design-overlap-triangle-shapes-pattern-element-vector.jpg')] bg-sky-600 bg-cover bg-center h-150 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl lg:text-7xl font-bold text-white">
            Tech That's{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              Actually Cool
            </span>
          </h1>
          <p className="text-lg lg:text-2xl text-white max-w-3xl text-center">
            Discover the latest gadgets, smartphones, and tech accessories
            that'll make your friends jealous 🔥
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 border-2 border-white bg-white text-violet-500 font-bold text-lg rounded-2xl hover:bg-yellow-500 hover:text-violet-700 transition duration-300 ease-in cursor-pointer hover:scale-105 shadow-lg">
              <Link href="/products">Shop Now 🛒</Link>
            </button>
            <button className="px-8 py-4 border-2 border-white bg-transparent text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-violet-700 transition duration-300 ease-in cursor-pointer hover:scale-105 shadow-lg">
              Watch Demo 📱
            </button>
          </div>
        </div>
      </header>
      <section className="py-16">
        <h2 className="text-4xl lg:text-6xl text-violet-600 text-center mb-4 font-bold">
          Products You'll Love
        </h2>
        <p className="text-center text-xl max-w-2xl m-auto text-gray-600 mb-12">
          Handpicked tech that's perfect for your lifestyle
        </p>
        <div className="grid px-4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
          {data.data.map((item: any) => (
            <Link key={item.id} href={`products/${item.id}`}>
              <ProductCard {...item} />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className=" bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
            View All Products
          </button>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl text-violet-600 text-center mb-16 font-bold">
          Why We're Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-violet-100">
            <div className=" w-16 h-16 flex justify-center items-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 mb-6 m-auto hover:scale-110 transition duration-300">
              <i className="ri-rocket-line text-2xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
              </i>
            </div>
            <p className="text-xl font-bold mb-6 text-gray-900">
              Lightning Fast Delivery
            </p>
            <p className="text-gray-600">
              Free delivery on orders over $50. Get your tech in 24-48 hours!
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-violet-100">
            <div className=" w-16 h-16 flex justify-center items-center rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 mb-6 m-auto hover:scale-110 transition duration-300">
              <i className="ri-rocket-line text-2xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </i>
            </div>
            <p className="text-xl font-bold mb-6 text-gray-900">
              Authentic Guarantee
            </p>
            <p className="text-gray-600">
              100% authentic products with full warranty. No fakes, ever.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-violet-100">
            <div className=" w-16 h-16 flex justify-center items-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 mb-6 m-auto hover:scale-110 transition duration-300">
              <i className="ri-rocket-line text-2xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </i>
            </div>
            <p className="text-xl font-bold mb-6 text-gray-900">24/7 Support</p>
            <p className="text-gray-600">
              Got questions? Our tech-savvy team is always here to help!
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 relative overflow-hidden">
        <div className="max-w-4xl p-4 md:p-6 lg:p-8 relative mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Stay in the <span className="bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-transparent">Loop</span></h2>
          <p className="text-xl mx-auto max-w-2xl text-blue-100 mb-8">Get exclusive deals, early access to new products, and tech tips that'll make you the coolest person in your group chat 😎</p>
          <div className="flex gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-6 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-6 focus:ring-orange-400 transition duration-300"/>
            <button className=" bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">Join Now! 🚀</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
