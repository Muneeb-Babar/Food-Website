
import MainBreadcum from '@/components/Breadcum/MainBreadcum';
import SocialIcon from '@/components/SocialIcon/SocilIcon';
import Image from 'next/image'


const products = [
    { name: "Chicken chup", price: 12.0, image: "/assets/shop1.svg" },
    { name: "Sandwiches", price: 25.0, image: "/assets/shop2.svg" },
    { name: "cheese Butter", price: 10.0, image: "/assets/shop3.svg" },
    { name: "Pizza", price: 43.0, image: "/assets/shop4.svg" },
    { name: "Drink", price: 23.0, image: "/assets/shop5.svg" },
    { name: "Chicken Chup", price: 17.0, image: "/assets/shop6.svg" },
    { name: "Sandwiches", price: 25.0, image: "/assets/shop7.svg" },
    { name: "Cheese Butter", price: 10.0, image: "/assets/shop8.svg" },
    { name: "Pizza", price: 43.0, image: "/assets/shop9.svg" },
    { name: "Drink", price: 23.0, originalPrice: 46.0, image: "/assets/shop10.svg" },
    { name: "Country Burger", price: 45.0, image: "/assets/shop11.svg" },
    { name: "Burger", price: 21.0, originalPrice: 45.0, image: "/assets/shop12.svg" },
    { name: "Chocolate Muffin", price: 27.0, originalPrice: 45.0, image: "/assets/shop13.svg" },
    { name: "Fresh Lime", price: 28.0, originalPrice: 45.0, image: "/assets/shop14.svg" },
    { name: "Country Burger", price: 45.0, image: "/assets/shop15.svg" },

  ];


const ShopItem = ({ params }: { params: { itemId: number } }) => {



    return (
        <div>
            <MainBreadcum name='Shop Details' pageName='Shop Details'/>
            <div className="section1 w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%] max-xl:flex-col items-center">
                <div className="left grid grid-cols-4 grid-rows-4 gap-2 max-xl:w-full">
                    <div className="">
                        <Image
                            src={`/assets/shop${Number(params?.itemId)+1}.svg`}
                            alt="user"
                            width={132}
                            height={129}

                        />
                    </div>
                    <div className="col-span-3 row-span-4">
                        <Image
                            src={`/assets/shop${Number(params?.itemId)+1}.svg`}
                            alt="user"
                            width={491}
                            height={596}

                        />
                    </div>
                    <div className="">
                        <Image
                            src={`/assets/shop${Number(params?.itemId)+1}.svg`}
                            alt="user"
                            width={132}
                            height={129}

                        />
                    </div>
                    <div className="">
                        <Image
                            src={`/assets/shop${Number(params?.itemId)+1}.svg`}
                            alt="user"
                            width={132}
                            height={129}

                        />
                    </div>
                    <div className="">
                        <Image
                            src={`/assets/shop${Number(params?.itemId)+1}.svg`}
                            alt="user"
                            width={132}
                            height={129}

                        />
                    </div>

                </div>

                <div className="w-[50%] h-[718px] flex flex-col justify-between max-xl:pt-10 max-xl:w-full">
                    {/* Stock status */}
                    <div className="px-4 py-2">
                        <span className="inline-block bg-primary_color text-white text-xs font-semibold px-2 py-1 rounded-full">
                            In stock
                        </span>
                    </div>

                    {/* Product Title */}
                    <div className="px-4 pb-15 text-black border-b border-gray-400">
                        <h2 className="text-5xl font-bold max-sm:text-2xl">{products[params?.itemId].name}</h2>
                        <p className="text-gray-600 w-[608px] text-lg mt-5 pb-16 max-sm:w-full max-sm:text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                            pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
                            urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
                            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </p>
                    </div>

                    {/* Price and Rating */}
                    <div className="px-4 py-2">
                        <div className="flex  flex-col justify-between">
                            <span className="text-3xl font-bold ">{products[params?.itemId].price}</span>
                            <div className="flex items-center">
                                <span className="text-primary_color  text-xl mr-1">★★★★★</span>
                                <span className="text-gray-600 text-sm">|5 rating | 22 Reviews</span>
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
                            <button className="ml-4 px-4 py-2 h-[50px] bg-primary_colortext-white text-sm font-medium rounded-md hover:bg-orange-600">
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

                        <SocialIcon/>
                    </div>

                </div>
            </div>
            
            <div className="section2 w-[80%] m-auto py-20  max-xl:w-[95%] ">
                {/* Tabs */}
                <div className="border-b border-gray-300 flex space-x-4 text-sm">
                    <button className="px-4 py-2 font-medium text-primary_color border-b-2 border-orange-500">
                        Description
                    </button>
                    <button className="px-4 py-2 font-medium text-gray-600 hover:text-orange-500">
                        Reviews (24)
                    </button>
                </div>

                {/* Content */}
                <div className="mt-4 text-gray-700">
                    <p>
                        Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu
                        euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus
                        bibendum.
                    </p>
                    <p className="mt-2">
                        Suspendisse cursus sodales placerat. Morbi eu lacus ex. Curabitur blandit justo urna, id
                        porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere.
                    </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800">Key Benefits</h3>
                    <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                        <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                        <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                        <li>Mauris eget diam magna, in blandit turpis.</li>
                    </ul>
                </div>

                {/* Similar Products */}
                <div className="mt-10">
                    <h3 className="text-lg font-bold text-gray-800">Similar Products</h3>
                    <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-4 ">
                        {[
                            { title: "Fresh Lime", price: 38, oldPrice: 45, image: "/assets/shop1.svg" },
                            { title: "Chocolate Muffin", price: 28, image: "/assets/shop2.svg" },
                            { title: "Burger", price: 21, image: "/assets/shop3.svg" },
                            { title: "Fresh Lime", price: 38, oldPrice: 45, image: "/assets/shop4.svg" },
                        ].map((product, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-[267px] object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800">{product.title}</h4>
                                    <div className="mt-1">
                                        <span className="text-primary_color  font-bold text-lg">${product.price}</span>
                                        {product.oldPrice && (
                                            <span className="text-gray-500 line-through text-sm ml-2">
                                                ${product.oldPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem