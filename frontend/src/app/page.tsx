import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Take Five</h1>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Five minute activities to bring delight to your day.
          </p>
      </div>
    </main>
  );
}
