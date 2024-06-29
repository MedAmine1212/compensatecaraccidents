
import {FC} from "react";
type Props = {
    setFirstName: (firstName :string) => void
    setLastName: (lastName :string) => void
    firstName: string
    lastName: string
}
const UserInfo: FC<Props> = ({setFirstName, setLastName, firstName, lastName}: Props) => {
    return (
        <>
            <div className="w-full h-fit flex flex-col gap-4 sm:gap-2 my-4 sm:my-2">
                <div className="text-3xl font-bold sm:text-xl dark:text-white text-primary">
                    What is your full name?
                </div>
                <div className="flex flex-col gap-4 justify-center px-6 sm:px-1 mt-4">
                   <input value={firstName} type="text" onChange={(e) => {
                          setFirstName(e.target.value);
                   }} className="w-full mx-auto resize-none dark:text-white dark:placeholder-lightgrey border-[1px] border-lightgrey bg-white text-black placeholder-lightbg dark:border-darkgrey dark:bg-lightbg p-4 rounded-md" placeholder="Your first name" />
                   <input value={lastName} onChange={(e) => {
                            setLastName(e.target.value);
                   }} type="text" className="w-full mx-auto resize-none dark:text-white dark:placeholder-lightgrey border-[1px] border-lightgrey bg-white text-black placeholder-lightbg dark:border-darkgrey dark:bg-lightbg p-4 rounded-md" placeholder="Your last name" />
                </div>
            </div>
        </>
    )
}

export default UserInfo
