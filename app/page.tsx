import { PageLayout } from "@/components/page-layout";
import { MemorialHeroSection } from "@/components/memorial-hero-section";

export default function Home() {
  return (
    <PageLayout>
      <MemorialHeroSection
        fullName="Александр Викторович Карпук"
        firstName="Александр"
        lastName="Карпук"
        middleName="Викторович"
        birthDate="1977-02-24"
        deathDate="2025-09-24"
        yearsLived="1977 - 2025"
        ageAtDeath={48}
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
        mainImageUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/b8519e34-146a-4f58-be46-ba3f3111e01b/photo/1758735361505_main_image.png"
        backgroundImageUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/b8519e34-146a-4f58-be46-ba3f3111e01b/photo/1758735405394_hero_section_bg_image.png"
      />
    </PageLayout>
  );
}