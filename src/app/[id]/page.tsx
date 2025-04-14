import NavBar from "../widgets/NavBar";
import TopHeader from "../widgets/TopHeader";

export default function Details() {
  return (
    <div>
      <header className="bg-amber-300">
        <TopHeader />
        <NavBar />
      </header>

      <main>Detalhes</main>
    </div>
  );
}
