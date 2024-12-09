
// import SocialIcon from '@/components/SocialIcon/SocilIcon';
// import Image from 'next/image';
// import { FC } from 'react';

// interface BlogPageProps {
//   params: { blogId: string }; // Change blogId to string
// }

// const posts = [
//   {
//     image: "/assets/blog1.svg",
//     title: "10 Reasons To Do A Digital Detox Challenge",
//     date: "June 28, 2023",
//     comments: 15,
//     author: "Admin",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     link: "/post/1",
//   },
//   {
//     image: "/assets/blog2.svg",
//     title: "Traditional Soft Pizzas with Sweet Beer Cheese",
//     date: "June 27, 2023",
//     comments: 20,
//     author: "Admin",
//     description: "Discover the best recipes for sweet beer cheese pizzas.",
//     link: "/post/2",
//   },
//   {
//     image: "/assets/blog3.svg",
//     title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
//     date: "June 26, 2023",
//     comments: 10,
//     author: "Admin",
//     description:
//       "A perfect recipe for recovering after a long night—easy to make and delicious.",
//     link: "/post/3",
//   },
//   {
//     image: "/assets/blog4.svg",
//     title: "My Favorite Easy Avocado Pizza Toast Recipe",
//     date: "June 25, 2023",
//     comments: 8,
//     author: "Admin",
//     description:
//       "This avocado pizza toast recipe is healthy, easy, and perfect for breakfast.",
//     link: "/post/4",
//   },
// ];

// const Page: FC<BlogPageProps> = ({ params }) => {
  
//   // Convert blogId to a number
//   const blogId = parseInt(params.blogId);

//   return (
//     <div>
//       <div className="w-[80%] max-lg:w-[95%] py-20 flex justify-between m-auto">
//         <div className="p-4 max-sm:p-0">
//           <div className="w-[80%] mx-auto max-sm:w-full">
//             {/* Image Section */}
//             <div className="relative">
//               <Image
//                 src={`/assets/blog${blogId + 1}.svg`}
//                 alt="no img found"
//                 height={520}
//                 width={872}
//               />
//             </div>

//             {/* Content Section */}
//             <div className="p-6">
//               <div className="flex items-center text-gray-500 text-sm mb-4">
//                 <span className="mr-2">📅 {posts[blogId].date}</span>
//                 <span className="mr-2">📖 3 min read</span>
//                 <span>👤 {posts[blogId].author}</span>
//               </div>

//               <h1 className="text-2xl font-bold text-gray-800 mb-4">
//                 {posts[blogId].title}
//               </h1>

//               <p className="text-gray-700 mb-4">{posts[blogId].description}</p>

//               {/* Highlight Section */}
//               <div className="bg-orange-100 border-l-4 border-primary_color p-4 mb-4">
//                 <p className="text-primary_color font-semibold">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
//                 </p>
//               </div>

//               <p className="text-gray-700 mb-4">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
//               </p>

//               {/* Additional Image Section */}
//               <div className="mb-4">
//                 <Image
//                   src={`/assets/blog${blogId + 1}.svg`}
//                   alt="no img found"
//                   height={422}
//                   width={366}
//                 />
//               </div>

//               <p className="text-gray-700 mb-4">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. At vero eos et accusam justo duo dolores et ea rebum.
//               </p>

//               {/* Tags Section */}
//               <div className="flex flex-wrap gap-2 mt-6 text-black">
//                 <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Restaurant</span>
//                 <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Dinner</span>
//                 <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Pizza</span>
//                 <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Yummy</span>
//               </div>

//               {/* Share Section */}
//               <div className="mt-6 flex gap-4 text-gray-500">
//                 <SocialIcon/>
//               </div>
//             </div>
//           </div>

//           {/* Comments Section */}
//           <div className="w-[80%] mx-auto max-sm:w-[90%] py-20">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Comments - 03</h2>
//             {/* Comment List */}
//             <div className="space-y-6">
//               {/* Individual Comment */}
//               <div className="flex items-start space-x-4">
//                 <Image
//                   src="/assets/comment1.svg"
//                   alt="MD Sojib Khan"
//                   width={65}
//                   height={65}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <div className="flex items-center space-x-2 mb-2">
//                     <h3 className="font-bold text-gray-800">MD Sojib Khan</h3>
//                     <span className="text-sm text-gray-500">June 22, 2020</span>
//                   </div>
//                   <p className="text-gray-700 mb-2 max-sm:text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.
//                   </p>
//                   <button className="text-primary_color text-sm">Reply</button>
//                 </div>
//               </div>

//               {/* Reply to Comment */}
//               <div className="flex items-start space-x-4 ml-10">
//                 <Image
//                   src="/assets/comment2.svg"
//                   alt="MD Sojib Khan"
//                   width={65}
//                   height={65}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <div className="flex items-center space-x-2 mb-2">
//                     <h3 className="font-semibold text-gray-800">MD Moon Khan</h3>
//                     <span className="text-sm text-gray-500">June 22, 2020</span>
//                   </div>
//                   <p className="text-gray-700 mb-2 max-sm:text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.
//                   </p>
//                   <button className="text-primary_color text-sm">Reply</button>
//                 </div>
//               </div>

//               {/* Another Comment */}
//               <div className="flex items-start space-x-4">
//                 <Image
//                   src="/assets/comment3.svg"
//                   alt="MD Sojib Khan"
//                   width={65}
//                   height={65}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <div className="flex items-center space-x-2 mb-2">
//                     <h3 className="font-semibold text-gray-800">MD Gulli Khan</h3>
//                     <span className="text-sm text-gray-500">June 22, 2020</span>
//                   </div>
//                   <p className="text-gray-700 mb-2 max-sm:text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.
//                   </p>
//                   <button className="text-primary_color text-sm">Reply</button>
//                 </div>
//               </div>
//             </div>

//             {/* Post a Comment Section */}
//             <div className="mt-8 ">
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">Post a comment</h3>
//               <form className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Name*"
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary_color"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email*"
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary_color"
//                   />
//                 </div>
//                 <textarea
//                   placeholder="Your comment*"
//                   rows={4}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary_color"
//                 ></textarea>
//                 <button type="submit" className="bg-primary_color text-white px-6 py-2 rounded-md">Post Comment</button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar Section */}
//         <div className="w-[30%] max-sm:hidden">
//           <h3 className="text-2xl font-bold text-gray-800 mb-6">Trending Posts</h3>
//           {/* Trending Posts */}
//           <div>
//             {posts.map((post, index) => (
//               <div key={index} className="mb-6">
//                 <Image
//                   src={post.image}
//                   alt="Trending Post"
//                   width={300}
//                   height={200}
//                   className="rounded-lg mb-2"
//                 />
//                 <h4 className="text-lg font-semibold text-gray-800">{post.title}</h4>
//                 <p className="text-sm text-gray-500">{post.date}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
