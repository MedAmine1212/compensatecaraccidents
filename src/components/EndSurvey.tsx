import {FC} from "react";
import MainTitle from "@/components/MainTitle";
import StartButton from "@/components/StartButton";
import Settlement from "@/components/Settlement";
import Privacy from "@/components/Privacy";
import EndSurveyTitle from "@/components/EndSurveyTitle";
import Image from "next/image";
import ShareComponent from "@/components/ShareComponent";
type Props = {
    name?: string | null
    compensation?: string
    email?: string
    isValid: boolean
}
const EndSurvey: FC<Props> = ({name, compensation, email, isValid}: Props) => {
    return (
        <>
            <div className="text-darkbg dark:text-white h-full overflow-y-auto">
                <div className="w-full h-full">
                    <EndSurveyTitle name={name} email={email} compensation={compensation}/>
                    <div
                        className="-mt-12 pt-10 gap-4 justify-between px-7 flex flex-col rounded-t-[40px] bg-white dark:bg-darkbg w-full h-96">
                        {!isValid ? (
                            <Image src="/done.svg" className="m-auto" alt="Main background" height={100} width={100}/>
                        ): (
                            <>
                            <p className="sm:text-md">
                                Our system will review your case,
                                and email you the results directly to your <br/>email: {email}
                            </p>
                            <hr className="h-[1px] border-lightanswerhover dark:border-darkgrey"/>
                            <ShareComponent />
                            </>
                        )}
                        <StartButton title={"Start survey again"}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EndSurvey
