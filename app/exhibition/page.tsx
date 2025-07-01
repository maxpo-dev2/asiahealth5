import ExhibitionHero from "@/app/components/exhibition-hero"
import WhoShouldExhibit from "@/app/components/who-should-exhibit"
import BookExhibitionSpace from "@/app/components/book-exhibition-space"

export default function ExhibitionPage() {
  return (
    <main>
      <ExhibitionHero />
      <WhoShouldExhibit />
      <BookExhibitionSpace />
    </main>
  )
}
