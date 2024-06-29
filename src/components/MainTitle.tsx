import Image from "next/image";
import {fetchStateFullName} from "@/lib/stateHelper";
import {FC, useState} from "react";

const avatars = [
    "/avatars/avatar-1.svg",
    "/avatars/avatar-2.svg",
    "/avatars/avatar-3.svg",
    "/avatars/avatar-4.svg",
    "/avatars/avatar-5.svg",
]
type Props = {
    state: string
    count: string
}
const MainTitle: FC<Props> = ({state, count}: Props) => {
    const [stateName, setStateName] = useState<string>(fetchStateFullName(state));

    return (
        <>
            <div className=" w-full dark:bg-darkbg bg-gradient-to-b from-[#243875] to-[#3668DA] ">
                <div className="h-full flex justify-center p-10 pb-20 inset-0 z-0 bg-cover flex-col px-8 gap-2 bg-center"
                     style={{backgroundImage: "url('/main-bg.svg')"}}>
                <h1 className="text-white text-3xl md:text-2xl">Don{"'"}t Waste Time!</h1>
                <p className="text-white md:text-sm text-xl">One third of {stateName} Residents that fill out this survey get major cash for their accident.</p>
                <div className="flex mt-5">
                    {avatars.map((avatar, index) => (
                        <div key={index} className={`relative ${index != 0 && "-ml-4"}  w-12 h-12`}>
                            <Image src={avatar}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                </div>
                ))}
            </div>
               <p className="text-white sm:text-sm">
                   <b>{count} people</b> fill out this survey
               </p>
                </div>
            </div>
        </>
    )
}

export default MainTitle
