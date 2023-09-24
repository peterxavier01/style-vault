import Hero from "@/components/Hero";
import PageContent from "./_components/PageContent";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 my-12 md:my-24">
        <PageContent />
      </div>
    </main>
  );
}
