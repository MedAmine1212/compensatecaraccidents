
import {FC} from "react";

type Props = {
    setPhoneNumber: (number : string) => void
    phoneNumber: string
}
const PhoneNumberForm: FC<Props> = ({phoneNumber, setPhoneNumber}: Props) => {
    return (
        <>
            <div className="w-full h-fit flex flex-col gap-4 sm:gap-2 my-4 sm:my-2">
                <div className="text-3xl font-bold sm:text-xl dark:text-white text-primary">
                    What is your phone number?
                </div>
                <div className="flex flex-col gap-4 justify-center px-6 sm:px-1 mt-4">
                   <input value={phoneNumber} onChange={(e) => {
                          setPhoneNumber(e.target.value);
                   }} type="text" className="w-full mx-auto resize-none dark:text-white dark:placeholder-lightgrey border-[1px] border-lightgrey bg-white text-black placeholder-lightbg dark:border-darkgrey dark:bg-lightbg p-4 rounded-md" placeholder="000-000-0000" />
                </div>
            </div>
        </>
    )
}

export default PhoneNumberForm
