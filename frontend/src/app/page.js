import Image from "next/image";

import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import BookTable from './components/BookTableButton';


export default function Home() {
  return (
    <div className="h-screen">
       
        <HeroSection />
        <BookTable />
    </div>
  );
}
