import { Navbar2 } from "@/components/Navbar";
import { ChartView } from "@/components/Chart";
import { HomeView } from "@/components/Home";

export default function Chart() {
    
  return (
    <main className="flex w-full items-center justify-between bg-[#171717]/15 lg:p-4 p-1">
      <Navbar2 />
      <ChartView />
    </main>
  );
}