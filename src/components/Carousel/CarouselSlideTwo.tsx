import Image from "next/image";
import img1 from "@/assets/logo.png";
import { Text } from "../Text/Text";

export default function CarouselSlideTwo() {
  return (
    <div className="flex w-4/5 h-full mx-auto">
      <div className="w-1/2 flex items-center justify-start">
        <Image src={img1} alt="Slide 1" priority />
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center text-white">
        <div>
          <Text variant="title">Inshallah</Text>
        </div>
        <div>
          <Text variant="subtitle">Join this cool club</Text>
        </div>
      </div>
    </div>
  );
}

