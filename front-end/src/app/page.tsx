import NavBar from "./widgets/NavBar";
import ProductGrid from "./widgets/ProductGrid";
import TopHeader from "./widgets/TopHeader";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-300">
        <TopHeader />
        <NavBar />
      </header>

      <main>
        <ProductGrid />
      </main>
    </div>
  );
}
