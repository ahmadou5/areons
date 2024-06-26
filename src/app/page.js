import { Navbar2 } from "@/components/Navbar";
import { HomeView } from "@/components/Home";

export default function Home() {
  return (
    <main className="flex w-full items-center justify-between bg-[#171717]/15 lg:p-24 p-1">
      <Navbar2 />
      <HomeView/>
    </main>
  );
}
