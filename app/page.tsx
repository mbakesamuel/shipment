import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-lg font-bold">CAMEROON DEVELOPMENT CORPORATION</h1>
        <h2>Group Rubber Department</h2>
        <h1>GR - Stat Application</h1>
      </div>
      <div>
        <Image src="/cdclogo.png" alt="cdc_logo" width={150} height={150} />
      </div>
      <div>
        <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </div>
  );
}
