import HeroSection from "@/app/components/hero-section";
import WelcomeSection from "@/app/components/welcome-section";
import NumbersSection from "@/app/components/numbers-section";
import FeaturesSection from "@/app/components/features-section";
import PillarsSection from "@/app/components/pillars-section";
import FocusSectors from "@/app/components/focus-sectors";
// import SpeakersSection from "@/app/components/speakers-section"
import WhoShouldAttend from "@/app/components/who-should-attend";
import NewsletterSection from "@/app/components/newsletter-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WelcomeSection />
      <NumbersSection />
      <FeaturesSection />
      <PillarsSection />
      <FocusSectors />
      {/* <SpeakersSection /> */}
      <WhoShouldAttend />
      <NewsletterSection />
    </div>
  );
}
