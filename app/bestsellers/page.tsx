import Jumbotron from "@/components/Jumbotron";

export default function Bestsellers() {
  return (
    <main className="">
      <Jumbotron
        header="Our Bestsellers"
        subheader="Discover What's Trending - Shop Our Customer Favorites"
        src="/shirt-hero.jpg"
        alt="A Stylish Shirt"
      />
      <h1 className="text-3xl font-bold">Test Content</h1>
    </main>
  );
}
