import Image from "next/image";
import {FC, useEffect, useState} from "react";
import {Answer, Question} from "@/lib/questionHelper";
type Props = {
    question: Question
    selected:number | undefined
    compensation:string,
    setCompensation: (amount: string) => void
    answerQuestion: (answer: Answer, questionId: number) => void
    terminate: (ended: boolean, valid: boolean) => void
}
const QuestionComponent: FC<Props> = ({question, selected, compensation, setCompensation, terminate, answerQuestion}: Props) => {
    const trigger = (answer) => {
        if(answer.terminate){
            terminate(true, false);
        } else {
            console.log(answer)
            if(answer.customCompensation) {
                setCompensation("custom");
                console.log("here")
            }
            else if(answer.compensationAmountMax && answer.compensationAmountMin) {
                setCompensation(answer.compensationAmountMin + " - " + answer.compensationAmountMax);
            }
            question.originalCompensation = compensation;
            answerQuestion(answer, question.id);
        }
    }
    return (
        <>
            {question && (
            <div className="w-full h-fit flex flex-col gap-4 sm:gap-2 my-4 sm:my-2">
                <div className="text-3xl font-bold sm:text-xl dark:text-white text-primary">
                    {question.question}
                </div>
                <div className="text-xl font-bold sm:text-sm dark:text-subcolor text-black">
                    {question.description}
                </div>
                 <div className={` ${question.type === 'grid' ? "grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : "flex flex-col "} mt-5 gap-4`}>
                    {question.answers.map((answer, index) => {
                        return (
                            <div key={index} onClick={() => {
                                trigger(answer)
                            }} className={`flex p-4 ${selected === answer.id ? "bg-primary" : "bg-darkanswer hover:border-lightblue  hover:bg-darkblue"} cursor-pointer border-[1px] border-transparent rounded-xl justify-between w-full gap-2 items-center`}>
                                <div className="flex flex-col justify-start gap-2">
                                {answer.icon && (
                                    <Image src={`/answers/${answer.icon}.svg`} height={40} width={40} alt={answer.icon}/>
                                )}
                                    <div className={`${selected === answer.id && "text-white"} text-white text-lg sm:text-sm`}>
                                        {answer.answer}
                                    </div>
                                </div>
                                <div className="h-full justify-end flex">
                                    {selected === answer.id && (
                                        <Image
                                            className="mb-auto"
                                            src="/selected.svg"
                                            alt="selected"
                                            width={20}
                                            height={20}
                                        />
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            )}
        </>
    )
}

export default QuestionComponent
