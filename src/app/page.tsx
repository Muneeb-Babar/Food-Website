import ActiveBanner from "@/components/ActiveBanner/ActiveBanner";
import { Details } from "@/components/Details/Details";
import FoodCategories from "@/components/FoodCategories/FoodCategories";
import HeroSection from "@/components/Hero/HeroSection";
import Hidden from "@/components/Hidden/Hidden";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeBlog from "@/components/HomeBlog/HomeBlog";
import { HomeWhyUs } from "@/components/HomeWhyUs/HomeWhyUs";
import { MidBanner } from "@/components/MidBanner/MidBanner";
import { OurChef } from "@/components/OurChef/OurChef";
import { ClientTestimonials } from "@/components/Testimonials/ClientTestimonials";
// import { client } from "@/sanity/lib/client";





export default async function Home() {


  return (
    <>
            <Hidden />
    <HeroSection/>
    <HomeAbout/>
    <FoodCategories/>
    <HomeWhyUs/>
    <MidBanner/>
    <Details/>
    <OurChef/>
    <ClientTestimonials/>
    <ActiveBanner/>
    <HomeBlog/>
    </>
  );
}
