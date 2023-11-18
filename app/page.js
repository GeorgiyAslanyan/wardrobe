import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F0F0F0] min-h-screen w-screen grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid xl:grid-cols-6 gap-4 md:gap-8 xl:gap-10 p-5 md:p-10 xl:p-20">
      <Link
        className="border overflow-hidden transition-all ease-linear duration-100 hover:shadow-lg border-gray-200 hover:border-blue-500 bg-white font-bold backdrop-blur-xl rounded-lg text-center text-black h-fit"
        href={"/spline"}>
        <img className="w-full h-[100px] object-cover" src={'/spline.png'}/>
         <p className=" px-3 py-2">Cursor tracker</p>
      </Link>
      <Link
        className="border overflow-hidden transition-all ease-linear duration-100 hover:shadow-lg border-gray-200 hover:border-blue-500 bg-white font-bold backdrop-blur-xl rounded-lg text-center text-black h-fit"
        href={"/sculpture"}>
        <img className="w-full h-[100px] object-cover" src={'/sculpture.png'}/>
         <p className=" px-3 py-2">Scroll 3d</p>
      </Link>
      <Link
        className="border overflow-hidden transition-all ease-linear duration-100 hover:shadow-lg border-gray-200 hover:border-blue-500 bg-white font-bold backdrop-blur-xl rounded-lg text-center text-black h-fit"
        href={"/wardrobe"}>
        <img className="w-full h-[100px] object-cover" src={'/wardrobe.png'}/>
         <p className=" px-3 py-2">Wardrobe</p>
      </Link>
      <Link
        className="border overflow-hidden transition-all ease-linear duration-100 hover:shadow-lg border-gray-200 hover:border-blue-500 bg-white font-bold backdrop-blur-xl rounded-lg  text-center text-black h-fit"
        href={"/chess"}>
        <img className="w-full h-[100px] object-cover" src={'/chess.png'}/>
         <p className=" px-3 py-2">Chess</p>
      </Link>
      <Link
        className="border overflow-hidden transition-all ease-linear duration-100 hover:shadow-lg border-gray-200 hover:border-blue-500 bg-white font-bold backdrop-blur-xl rounded-lg  text-center text-black h-fit"
        href={"/wire"}>
        <img className="w-full h-[100px] object-cover" src={'/wire.png'}/>
         <p className=" px-3 py-2">Wire</p>
      </Link>
    </main>
  );
}
