import {FC} from "react";
import MainTitle from "@/components/MainTitle";
import StartButton from "@/components/StartButton";
import Settlement from "@/components/Settlement";
import Privacy from "@/components/Privacy";
import EndSurveyTitle from "@/components/EndSurveyTitle";
import Image from "next/image";
type Props = {
    name?: string | null
    compensation?: string
}
const EndSurvey: FC<Props> = ({name, compensation}: Props) => {
    return (
        <>
            <div className="text-darkbg dark:text-white h-full overflow-y-auto">
                <div className="w-full h-full">
                    <EndSurveyTitle name={name} compensation={compensation}/>
                    <div
                        className="-mt-12 pt-10 gap-4 justify-between px-7 flex flex-col rounded-t-[40px] bg-white dark:bg-darkbg w-full h-96">
                        <Image src="/done.svg" className="m-auto" alt="Main background" height={100} width={100}/>
                        <StartButton title={"Start survey again"}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EndSurvey
