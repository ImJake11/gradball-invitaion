import Image from "next/image";
import HighlightsComp from "../components/HightLights";
import bg from "@/public/bg.jpg";

export default function PageFour() {
    return (
        <div className="w-screen h-screen  flex flex-col justify-evenly box-border relative text-white">
            <Image
                src={bg}
                alt={"image"}
                className="absolute z-0 w-dvw h-dvh"
            ></Image>
            <div className="absolute z-[1] p-[10px]">
                <ul>
                    {Array.from({length: 3}).map((_, index) => (
                        <li key={index}>
                            <HighlightsComp isLeft={index % 2 !== 0}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
