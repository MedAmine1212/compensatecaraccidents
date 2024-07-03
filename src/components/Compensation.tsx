
import {FC, useEffect, useState} from "react";
import Percentage from "@/components/Percentage";
type Props = {
    amount: string
    percentage: number
}
const Compensation: FC<Props> = ({amount, percentage}: Props) => {
    return (
        <>
          <div className="w-full h-fit flex justify-between dark:bg-white bg-darkbg rounded-lg p-4">
            <div className=" w-full flex flex-col gap-4 justify-start">
                <div className="dark:text-black text-2xl w-full text-white sm:text-lg">Compensation amounts: </div>
                <div className={` text-4xl sm:text-2xl ${amount === "$0" ? "dark:text-subcolor text-white" : "dark:text-primary text-lightblue"}`}>{amount != "custom" ? amount : "Calculating"}</div>
            </div>
            <Percentage percentage={percentage}/>
          </div>
        </>
    )
}

export default Compensation
