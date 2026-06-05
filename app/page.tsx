import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AlbumInfoSection from "@/components/AlbumInfoSection";
import ShopSection from "@/components/ShopSection";
import ConcertScheduleSection from "@/components/ConcertScheduleSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AlbumInfoSection />
      <ShopSection />
      <ConcertScheduleSection />
    </main>
  );
}
