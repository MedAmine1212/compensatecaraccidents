
import {FC} from "react";

type Props = {
    description: string
    setDescription: (description: string) => void
}
const Describe: FC<Props> = ({description, setDescription}: Props) => {
    return (
        <>
            <div className="w-full h-fit flex flex-col gap-4 sm:gap-2 my-4 sm:my-2">
                <div className="text-3xl font-bold sm:text-xl dark:text-white text-primary">
                    Describe your incident
                </div>
                <div className="text-xl font-bold sm:text-sm dark:text-subcolor text-black">
                    Our system can understand large language models. A brief description of your accident will help us evaluate your case more accurately (optional)
                </div>
                <div className="flex justify-center px-6 sm:px-1 mt-4 h-[60vh]">
                   <textarea value={description} onChange={(e) =>{
                          setDescription(e.target.value);
                   }} className="w-full mx-auto resize-none dark:text-white dark:placeholder-lightgrey border-[1px] border-lightgrey bg-white text-black placeholder-lightbg dark:border-darkgrey dark:bg-lightbg p-4 rounded-md" placeholder="Describe your incident..." />
                </div>
            </div>
        </>
    )
}

export default Describe
