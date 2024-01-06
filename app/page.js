import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Link
        href={"/form"}
        className="bg-gray-400 py-3 px-3 rounded-md hover:bg-gray-400/80"
      >
        Form Page
      </Link>
    </main>
  );
}
