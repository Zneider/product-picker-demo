import { useNavigate } from "react-router";
import { Header } from "./components/Header";

function App() {
  const navigate = useNavigate();

  const onclickHandler = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header theme="light" />
      <main
        className="pt-[72px] bg-scroll h-full"
        style={{
          backgroundImage: "url('/bg_frontpage.png')",
          backgroundPosition: "top center",
        }}
      >
        <section className="flex d´flex-col h-full items-end bg-gradient-to-b from-transparent to-[#003732] to-50% justify-center">
          <div className="h-1/2 text-white mt-1/2 bg-[#003732] w-full flex flex-col items-center gap-y-[16px] max-w-[640px]">
            <h1 className="text-[16px] font-semibold">Produktvælger</h1>
            <h2 className="text-[52px] font-extralight flex text-center">
              Lad os hjælpe dig med at finde rigtig ladeløsning
            </h2>
            <span className="text-[16px] text-center">
              Svar på spørgsmålene og find ud af hvilken Clever løsning der
              passer bedst til dine behov
            </span>
            <button
              className="px-4 py-1 bg-white text-[#003732] text-[16px]"
              onClick={onclickHandler}
              title="Tag testen her"
            >
              Tag testen her
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
