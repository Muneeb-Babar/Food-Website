import React from "react";
import Image from "next/image";
import SocialIcon from "@/components/SocialIcon/SocilIcon";
import { client } from "@/sanity/lib/client";

// Define the type for the product
type Product = {
  name: string;
  price: number;
  imageUrl: string;
  originalPrice?: number; // Optional property
  id: number; // Ensure each product has a unique ID
};

// Fetch data from Sanity
async function getData(): Promise<Product[]> {
  const query = `*[_type == "products"]{
    id,
    name,
    price,
    "imageUrl": image.asset->url
  }`;
  const fetchData = await client.fetch<Product[]>(query);
  return fetchData;
}

// Update to use the correct types for params (using Next.js' types)
type ShopItemPageProps = {
  params: { id: string }; // The dynamic part of the route, `id` will be passed as a string
};

const ShopItem = async ({ params }: ShopItemPageProps) => {
  const products: Product[] = await getData();
  const product = products.find((prod) => prod.id === parseInt(params.id)); // Find product by ID

  if (!product) {
    return <div>Product not found</div>; // Fallback for invalid product IDs
  }

  return (
    <div>
      <div className="section1 w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%] max-xl:flex-col items-center">
        {/* Product Images */}
        <div className="left grid grid-cols-4 grid-rows-4 gap-2 max-xl:w-full">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="">
              <Image
                src={product.imageUrl || `/img/placeholder.svg`}
                alt={product.name}
                width={132}
                height={129}
              />
            </div>
          ))}
          <div className="col-span-3 row-span-4">
            <Image
              src={product.imageUrl || `/img/placeholder.svg`}
              alt={product.name}
              width={491}
              height={596}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-[50%] h-[718px] flex flex-col justify-between max-xl:pt-10 max-xl:w-full">
          {/* Stock status */}
          <div className="px-4 py-2">
            <span className="inline-block bg-primary_color text-white text-xs font-semibold px-2 py-1 rounded-full">
              In stock
            </span>
          </div>

          {/* Product Title */}
          <div className="px-4 pb-15 text-black border-b border-gray-400">
            <h2 className="text-5xl font-bold max-sm:text-2xl">{product.name}</h2>
            <p className="text-gray-600 w-[608px] text-lg mt-5 pb-16 max-sm:w-full max-sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
          </div>

          {/* Price and Rating */}
          <div className="px-4 py-2">
            <div className="flex flex-col justify-between">
              <span className="text-3xl font-bold">${product.price}</span>
              <div className="flex items-center">
                <span className="text-primary_color text-xl mr-1">★★★★★</span>
                <span className="text-gray-600 text-sm">| 5 rating | 22 Reviews</span>
              </div>
            </div>
          </div>

          {/* Add to cart */}
          <div className="px-4 py-4">
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 h-[50px] text-center border border-gray-300 rounded-md"
              />
              <button className="ml-4 px-4 py-2 h-[50px] bg-orange-400 text-white text-sm font-medium rounded-md hover:bg-orange-600">
                Add to cart
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="px-4 py-2">
            <div className="text-sm text-gray-600 flex flex-wrap flex-col gap-4">
              <span>Category: <strong>Pizza</strong></span>
              <span>Tag: <strong>Our Shop</strong></span>
            </div>
          </div>

          {/* Social Share */}
          <div className="w-full items-start">
            <SocialIcon />
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="section2 w-[80%] m-auto py-20 max-xl:w-[95%]">
        <div className="border-b border-gray-300 flex space-x-4 text-sm">
          <button className="px-4 py-2 font-medium text-primary_color border-b-2 border-orange-500">
            Description
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 hover:text-orange-500">
            Reviews (24)
          </button>
        </div>
        <div className="mt-4 text-gray-700">
          <p>
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
