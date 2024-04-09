import { Navbar2 } from "@/components/Navbar";
import { HomeView } from "@/components/Home";

export default function Home() {
  return (
    <main className="flex w-full items-center justify-between lg:p-24 p-4">
      <Navbar2 />
      <HomeView/>
    </main>
  );
}
