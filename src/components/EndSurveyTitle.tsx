import {FC} from "react";

type Props = {
    name?: string | null
    email?: string | null
    compensation?: string | null
}
const EndSurveyTitle: FC<Props> = ({name, compensation}: Props) => {
    return (
        <>
            <div className=" w-full dark:bg-darkbg bg-gradient-to-b from-[#243875] to-[#3668DA] ">
                <div className="h-full min-h-64 flex justify-center p-10 pb-20 inset-0 z-0 bg-cover flex-col px-8 gap-2 bg-center"
                     style={{backgroundImage: "url('/main-bg.svg')"}}>
                <h1 className="text-white text-3xl md:text-2xl">
                    Thank you{ name ? `,` : " for taking this survey!"}
                    {name && name != "" && (
                        <>
                        <br/>
                            {name}
                        </>
                    )}
                </h1>
            {compensation && compensation != "0" && (
                <>
                    <div className=" w-full flex flex-col gap-4 justify-start">
                        <div className="text-2xl w-full text-white sm:text-lg">Compensation amounts:
                        </div>
                        <div
                            className={` text-4xl text-white`}>${compensation}</div>
                    </div>
                </>
            )}
                </div>
            </div>
        </>
    )
}

export default EndSurveyTitle
