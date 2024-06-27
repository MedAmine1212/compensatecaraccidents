import Compensation from "@/components/Compensation";
import { useEffect, useState } from "react";
import { Answer, getQuestions, Question } from "@/lib/questionHelper";
import QuestionComponent from "@/components/QuestionComponent";
import { FaArrowRight } from "react-icons/fa6";
import { m } from "framer-motion";
import { useRouter } from "next/router";
import SecondPrivacy from "@/components/SecondPrivacy";
import EndSurvey from "@/components/EndSurvey";

const Survey = () => {
    const [compensationAmount, setCompensationAmount] = useState<string>("0");
    const [percentage, setPercentage] = useState<number>(0);
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
    const [isBackClicked, setIsBackClicked] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [ended, setEnded] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setQuestions(null)
        setQuestions(getQuestions());
    }, []);

    const backStep = () => {
        if (currentQuestionId > 1) {
            setCurrentQuestionId(currentQuestionId - 1);
            setIsBackClicked(true);
        } else {
            terminate(false);
        }
    };

    const terminate = (ended: boolean) => {
        if (!ended) {
            router.replace("/");
        } else {
            setCompensationAmount(null)
            setEnded(true);
            setQuestions([]);
            setPercentage(0);
            setCurrentQuestionId(1);
        }
    };

    const answerQuestion = (answer: Answer, questionId: number) => {
        setIsBackClicked(false);
        const newQuestions = questions.map((question) => {
            if (question.id === questionId) {
                question.selected = answer;
            }
            return question;
        });
        setQuestions(newQuestions);
        if (questionId < questions.length) {
            setCurrentQuestionId(currentQuestionId + 1);
        }
    };

    const slideVariants = {
        hidden: { x: "100vw", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
        exit: { x: "-100vw", opacity: 0, transition: { ease: "easeIn" } },
    };

    useEffect(() => {
        if (!questions.length) return;
        const percentage = currentQuestionId - 1 === 0 ? 0 : Math.round(((currentQuestionId - 1) / (questions.length + 2)) * 100);
        setPercentage(percentage);
    }, [currentQuestionId, questions.length]);

    return (
        <>
            {questions.length > 0 && !ended ? (
                <div className="flex flex-col h-screen text-darkbg dark:text-white justify-between">
                    <div className="p-8 sm:p-4 overflow-y-auto">
                        <div className="w-full">
                            <Compensation amount={compensationAmount} percentage={percentage} />
                        </div>
                        <div className="mt-4 mb-16 overflow-x-hidden flex-col flex justify-between">
                            <m.div
                                key={currentQuestionId}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="overflow-x-hidden"
                                variants={slideVariants}
                            >
                                <QuestionComponent
                                    selected={questions.find((question) => question.id === currentQuestionId)?.selected?.id}
                                    setCompensation={setCompensationAmount}
                                    answerQuestion={answerQuestion}
                                    terminate={terminate}
                                    question={questions.find((question) => question.id === currentQuestionId) as Question}
                                />
                            </m.div>
                        </div>
                        <SecondPrivacy/>
                    </div>
                    <div style={{
                        boxShadow: "0px 0px 50px 0px rgba(36, 56, 117, 0.20)",
                    }} className="h-20 w-[99%] justify-between rounded-t-3xl flex p-4 dark:bg-darkbg bg-white">
                        <button
                            onClick={backStep}
                            className="dark:text-white hover:border-primary border-[1px] border-transparent rounded-lg p-2"
                        >
                            Back
                        </button>
                        <button
                            style={{
                                boxShadow: "0px 20px 60px 0px rgba(46, 144, 250, 0.30)",
                            }}
                            disabled={questions.length === currentQuestionId}
                            onClick={() => {
                                setIsBackClicked(false);
                                setCurrentQuestionId(currentQuestionId + 1);
                            }}
                            className={`bg-primary hover:bg-opacity-70 justify-center w-fit gap-3 flex rounded-[100px] ${!isBackClicked && "hidden"} ${
                                questions.length === currentQuestionId && "bg-opacity-40"
                            } text-white px-4 py-2`}
                        >
                            <div className="m-auto">Next</div>
                            <div className="rounded-full m-auto p-2 my-auto bg-white text-primary text-xs">
                                <FaArrowRight />
                            </div>
                        </button>
                    </div>
                </div>
            ) : (
                ended && (
                    <EndSurvey compensation={compensationAmount} name={null}/>
                )
            )}
        </>
    );
};

export default Survey;
