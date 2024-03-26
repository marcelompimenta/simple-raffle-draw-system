import NumberComponent from "@/components/Numbers";
import { data } from "./data";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-extrabold ">Rifa solidária da Wal</h1>
      <p className="mt-8 text-lg leading-loose">Tabela de números</p>
      <div className="w-full mt-6 overflow-hidden rounded-lg shadow-md sm:shadow-none">
        <ul className="flex flex-wrap justify-between">
          {data.map((props) => (<NumberComponent key={props.number} {...props} />))}
        </ul>
      </div>
      <section className="flex flex-wrap mt-10"> </section>
    </main>
  );
}
