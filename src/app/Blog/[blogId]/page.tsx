
import SocialIcon from '@/components/SocialIcon/SocilIcon';
import Image from 'next/image'



const posts = [
    {
        image: "/assets/blog1.svg",
        title: "10 Reasons To Do A Digital Detox Challenge",
        date: "June 28, 2023",
        comments: 15,
        author: "Admin",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "/post/1",
    },
    {
        image: "/assets/blog2.svg",
        title: "Traditional Soft Pizzas with Sweet Beer Cheese",
        date: "June 27, 2023",
        comments: 20,
        author: "Admin",
        description: "Discover the best recipes for sweet beer cheese pizzas.",
        link: "/post/2",
    },
    {
        image: "/assets/blog3.svg",
        title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
        date: "June 26, 2023",
        comments: 10,
        author: "Admin",
        description:
            "A perfect recipe for recovering after a long night—easy to make and delicious.",
        link: "/post/3",
    },
    {
        image: "/assets/blog4.svg",
        title: "My Favorite Easy Avocado Pizza Toast Recipe",
        date: "June 25, 2023",
        comments: 8,
        author: "Admin",
        description:
            "This avocado pizza toast recipe is healthy, easy, and perfect for breakfast.",
        link: "/post/4",
    },
];

const page = ({ params }: { params: { blogId: number } }) => {
    return (
        <div>
            

            <div className="w-[80%] max-lg:w-[95%] py-20 flex justify-between m-auto">

                <div className=" p-4 max-sm:p-0">
                    <div className="w-[80%] mx-auto max-sm:w-full">
                        {/* Image Section */}
                        <div className="relative">
                            <Image
                                src={`/assets/blog${Number(params?.blogId) + 1}.svg`}
                                alt="no img found"
                                height={520}
                                width={872}

                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-6">
                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                <span className="mr-2">📅 {posts[params?.blogId].date}</span>
                                <span className="mr-2">📖 3 min read</span>
                                <span>👤 {posts[params?.blogId].author}</span>
                            </div>

                            <h1 className="text-2xl font-bold text-gray-800 mb-4">{posts[params?.blogId].title}</h1>

                            <p className="text-gray-700 mb-4">
                                {posts[params?.blogId].description}
                            </p>

                            {/* Highlight Section */}
                            <div className="bg-orange-100 border-l-4 border-primary_color p-4 mb-4">
                                <p className="text-primary_color font-semibold">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                </p>
                            </div>

                            <p className="text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy euismod tincidunt ut laoreet dolore
                                magna aliquam erat volutpat.
                            </p>

                            {/* Additional Image Section */}
                            <div className="mb-4">
                                <Image
                                    src={`/assets/blog${Number(params?.blogId) + 1}.svg`}
                                    alt="no img found"
                                    height={422}
                                    width={366}

                                />
                            </div>

                            <p className="text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy euismod tincidunt ut laoreet dolore
                                magna aliquam erat volutpat. At vero eos et accusam justo duo dolores et ea rebum.
                            </p>

                            {/* Tags Section */}
                            <div className="flex flex-wrap gap-2 mt-6 text-black">
                                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Restaurant</span>
                                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Dinner</span>
                                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Pizza</span>
                                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Yummy</span>
                            </div>

                            {/* Share Section */}
                            <div className="mt-6 flex gap-4 text-gray-500">
                                <SocialIcon/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[80%] mx-auto max-sm:w-[90%] py-20">
                        {/* Comments Header */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Comments - 03</h2>

                        {/* Comment List */}
                        <div className="space-y-6">
                            {/* Individual Comment */}
                            <div className="flex items-start space-x-4">
                                <Image
                                    src="/assets/comment1.svg"
                                    alt="MD Sojib Khan"
                                    width={65}
                                    height={65}
                                    className='rounded-full'
                                />
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <h3 className="font-bold text-gray-800">MD Sojib Khan</h3>
                                        <span className="text-sm text-gray-500">June 22, 2020</span>
                                    </div>
                                    <p className="text-gray-700 mb-2 max-sm:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed,
                                        pulvinar et sem, Fusce hendrerit faucibus sollicitudin.
                                    </p>
                                    <button className="text-primary_color text-sm">Reply</button>
                                </div>
                            </div>

                            {/* Reply to Comment */}
                            <div className="flex items-start space-x-4 ml-10">
                                <Image
                                    src="/assets/comment2.svg"
                                    alt="MD Sojib Khan"
                                    width={65}
                                    height={65}
                                    className='rounded-full'
                                />
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <h3 className="font-semibold text-gray-800">MD Moon Khan</h3>
                                        <span className="text-sm text-gray-500">June 22, 2020</span>
                                    </div>
                                    <p className="text-gray-700 mb-2 max-sm:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed,
                                        pulvinar et sem, Fusce hendrerit faucibus sollicitudin.
                                    </p>
                                    <button className="text-primary_color text-sm">Reply</button>
                                </div>
                            </div>

                            {/* Another Comment */}
                            <div className="flex items-start space-x-4">
                                <Image
                                    src="/assets/comment3.svg"
                                    alt="MD Sojib Khan"
                                    width={65}
                                    height={65}
                                    className='rounded-full'
                                />
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <h3 className="font-semibold text-gray-800">MD Gulli Khan</h3>
                                        <span className="text-sm text-gray-500">June 22, 2020</span>
                                    </div>
                                    <p className="text-gray-700 mb-2 max-sm:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed,
                                        pulvinar et sem, Fusce hendrerit faucibus sollicitudin.
                                    </p>
                                    <button className="text-primary_color text-sm">Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Post a Comment Section */}
                        <div className="mt-8 ">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Post a comment</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary_color"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary_color"
                                    />
                                </div>
                                <textarea
                                    placeholder="Write a comment"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary_color h-[200px]"

                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-primary_color text-white h-[56px] py-2 px-4 rounded-md hover:bg-orange-600"
                                >
                                    Post a comment
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="sidebar w-[424px] bg-white p-4 border border-gray-200 space-y-6 max-md:hidden">
                    {/* Search Box */}
                    <div>
                        <input
                            type="text"
                            placeholder="Search Your Keyword..."
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                        />
                    </div>

                    {/* Profile Section */}
                    <div className="text-center border border-gray-300 rounded p-4">
                        <img
                            src="/assets/bloguser.svg" // Replace with actual profile image
                            alt="Profile"
                            className="w-20 h-20 mx-auto rounded-full"
                        />
                        <h3 className="mt-2 font-semibold">Prince Miyako</h3>
                        <p className="text-sm text-gray-500">Blogger & Photographer</p>
                        <div className="text-primary_color flex justify-center space-x-1 mt-1 text-sm">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                            <span className="text-gray-500">(5 Reviews)</span>
                        </div>
                        <div className="flex justify-center space-x-2 mt-3">
                            {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                                <a
                                    key={platform}
                                    href="#"
                                    className="text-gray-500 hover:text-primary_color"
                                >
                                    <i className={`fab fa-${platform}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Recent Post */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Recent Post</h3>
                        <div className="space-y-4">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img
                                        src="/assets/shop9.svg" // Replace with actual post images
                                        alt="Post"
                                        className="w-12 h-12 rounded"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500">June 28, 2023</p>
                                        <p className="text-sm font-medium">Lorem ipsum dolor sit amet...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Filter By Menu */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Filter By Menu</h3>
                        <div className="space-y-2">
                            {[
                                { name: "Chicken Fry", count: 28 },
                                { name: "Burger Food", count: 48 },
                                { name: "Pizza", count: 16 },
                                { name: "Fresh Fruits", count: 38 },
                                { name: "Vegetables", count: 15 },
                            ].map((item) => (
                                <div key={item.name} className="flex justify-between text-sm">
                                    <span>{item.name}</span>
                                    <span>({item.count})</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular Tags */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Popular Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Sandwich",
                                "Tikka",
                                "Bbq",
                                "Restaurant",
                                "Chicken Shawarma",
                                "Health",
                                "Fastfood",
                                "Food",
                                "Pizza",
                                "Burger",
                                "Chicken",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200 cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Photo Gallery */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Photo Gallery</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {[...Array(6)].map((_, index) => (
                                <img
                                    key={index}
                                    src="/assets/shop14.svg" // Replace with gallery images
                                    alt="Gallery"
                                    className="w-20 h-20 rounded object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                        <SocialIcon/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page