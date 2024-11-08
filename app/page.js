import Image from "next/image";
import bg from "@/components/Images/BgImage.avif"

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-900">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="text-white space-y-2">
          <p className="text-lg md:text-xl font-semibold">
            The best URL shortener
          </p>
          <p className="text-sm md:text-base">
            We are the most URL shortener in the world
          </p>
        </div>
        <div className="relative w-full h-64 md:h-auto">
          <Image src={bg} fill={true} alt="This is the vector Image" className="object-cover -z-10" />
        </div>
      </section>
    </main>
  );
}