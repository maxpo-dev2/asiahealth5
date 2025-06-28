import Header from "@/app/components/header"
import HeroSection from "@/app/components/hero-section"
import WelcomeSection from "@/app/components/welcome-section"
import NumbersSection from "@/app/components/numbers-section"
import FeaturesSection from "@/app/components/features-section"
import PillarsSection from "@/app/components/pillars-section"
import FocusSectors from "@/app/components/focus-sectors"
import SpeakersSection from "@/app/components/speakers-section"
import WhoShouldAttend from "@/app/components/who-should-attend"
import NewsletterSection from "@/app/components/newsletter-section"
import Footer from "@/app/components/footer"

export default function SectionsPage() {
  return (
    <div className="min-h-screen bg-white space-y-16">
      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Header Component</h2>
        <Header />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Hero Section Component</h2>
        <HeroSection />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Section Component</h2>
        <WelcomeSection />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Numbers Section Component</h2>
        <NumbersSection />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Features Section Component</h2>
        <FeaturesSection />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Pillars Section Component</h2>
        <PillarsSection />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Focus Sectors Component</h2>
        <FocusSectors />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Speakers Section Component</h2>
        <SpeakersSection />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Who Should Attend Component</h2>
        <WhoShouldAttend />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Newsletter Section Component</h2>
        <NewsletterSection />
      </div>

      <div className="border-b-4 border-red-500 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Footer Component</h2>
        <Footer />
      </div>
    </div>
  )
}
