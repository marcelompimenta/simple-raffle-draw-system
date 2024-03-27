import NumberComponent from "@/components/Numbers";
import { data } from "./data";

export default function Home() {
  return (
    <main className="flex m-auto min-h-screen max-w-[1200px] flex-col items-center gap-5 pr-5 pl-5 pt-8 overflow-hidden">
      <h1 className="text-5xl font-extrabold ">Rifa solidária da Wal</h1>
      <button
        type="button"
        className="text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-[14] p-4 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Iniciar Sorteio
      </button>
      <div className="w-full mt-6 overflow-hidden rounded-lg shadow-md sm:shadow-none">
        <ul className="flex flex-wrap justify-between">
          {data.map((props) => (
            <NumberComponent key={props.number} {...props} />
          ))}
        </ul>
      </div>
      <section className="flex flex-wrap mt-10">
        <h2 className="text-5xl">Nome do ganhador - Numero</h2>
      </section>
    </main>
  );
}
