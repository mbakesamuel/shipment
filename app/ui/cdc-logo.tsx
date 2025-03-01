import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Cdclogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center mx-auto leading-none text-white`}
    >
      <Image
        src="/cdclogo.png"
        alt="cdc_logo"
        width={300}
        height={300}
        className="h-12 w-12"
      />
    </div>
  );
}
