
import {FC} from "react";

type Props = {
    setEmail: (email :string) => void
    email: string
}
const EmailForm: FC<Props> = ({email, setEmail}: Props) => {
    return (
        <>
            <div className="w-full h-fit flex flex-col gap-4 sm:gap-2 my-4 sm:my-2">
                <div className="text-3xl font-bold sm:text-xl dark:text-white text-primary">
                    What is the best email to send your compensation estimate to?
                </div>
                <div className="text-xl font-bold sm:text-sm dark:text-subcolor text-black">
                    Our system will review your case, and email you the results directly to your inbox same-day.
                </div>
                <div className="flex flex-col gap-4 justify-center px-6 sm:px-1 mt-4">
                    <input value={email} type="email"
                           onChange={(e) =>{
                               setEmail(e.target.value);
                           }}
                           className="w-full mx-auto resize-none dark:text-white dark:placeholder-lightgrey border-[1px] border-lightgrey bg-white text-black placeholder-lightbg dark:border-darkgrey dark:bg-lightbg p-4 rounded-md"
                           placeholder="Your email address"/>
                </div>
            </div>
        </>
    )
}

export default EmailForm
