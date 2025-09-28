import Image from "next/image";
import img1 from "@/assets/logo.png";
import { Text } from "../Text/Text";

export default function CarouselSlideThree() {
  return (
    <div className="flex w-4/5 h-full mx-auto">
      <div className="w-1/2 flex flex-col items-center justify-center text-white">
        <div className="">
          <Text variant="title">UBC MakeMed</Text>
        </div>
        <div className="">
          <Text variant="subtitle">Join this cool club</Text>
        </div>
        <div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image src={img1} alt="Slide 1" priority />
      </div>
    </div>
  );
}
