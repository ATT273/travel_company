import PopularDestination from "@/components/PopularDestination";
import Hero from "@/components/Hero";
import PopularCategory from "@/components/PopularCategory";
import Stories from "@/components/Stories";
import Topbar from "@/components/Topbar";
import TopDestination from "@/components/TopDestination";
import Feedbacks from "@/components/Feedbacks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="main-container">
      <Topbar />
      <Hero />
      <PopularCategory />
      <Stories />
      <PopularDestination />
      <TopDestination />
      <Feedbacks />
      <Newsletter />
      <Footer />
    </div>
  );
}
