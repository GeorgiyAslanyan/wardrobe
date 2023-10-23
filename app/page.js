import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F0F0F0] min-h-screen w-screen grid grid-cols-8 gap-10 p-20">
      <Link className="border border-gray-200 hover:border-blue-500 bg-white font-bold backdrop-blur-xl rounded-lg px-3 py-2 text-center text-black h-fit" href={'/wardrobe'} > Wardrobe </Link>
      <Link className="border border-gray-200 hover:border-blue-500 bg-white font-bold backdrop-blur-xl rounded-lg px-3 py-2 text-center text-black h-fit" href={'/chess'} > Chess </Link>
    </main>
  )
}
