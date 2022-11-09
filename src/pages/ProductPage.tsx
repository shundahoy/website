import React from "react";
import { Link, NavLink } from "react-router-dom";
import PageTop from "../components/PageTop/PageTop";
const ProductPage = () => {
  return (
    <>
      <PageTop
        title="All Product"
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        desc="Copper mug try-hard pitchfork pour-over freegan heirloom neutra"
      />
      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold">人気の商品</h2>
        <div className="mx-auto h-[3px] w-[5em] bg-gray-700 mt-2"></div>
        <div className="container mx-auto grid gap-x-4 md:gap-y-10 gap-y-20 grid-cols-1 lg:grid-cols-2 mt-10 px-4">
          <section className="text-gray-600 body-font">
            <div className="flex md:flex-row flex-col items-center">
              <div className="w-full sm:w-4/5 md:w-2/5  mb-6 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-2xl  text-xl mb-4 font-bold text-gray-900">
                  Before they
                </h1>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <Link to="/">Button</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="flex md:flex-row flex-col items-center">
              <div className="w-full sm:w-4/5 md:w-2/5  mb-6 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-2xl  text-xl mb-4 font-bold text-gray-900">
                  Before they
                </h1>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="flex md:flex-row flex-col items-center">
              <div className="w-full sm:w-4/5 md:w-2/5  mb-6 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-2xl  text-xl mb-4 font-bold text-gray-900">
                  Before they
                </h1>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="flex md:flex-row flex-col items-center">
              <div className="w-full sm:w-4/5 md:w-2/5  mb-6 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-2xl  text-xl mb-4 font-bold text-gray-900">
                  Before they
                </h1>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
