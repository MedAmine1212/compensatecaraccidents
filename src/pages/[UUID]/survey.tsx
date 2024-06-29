import Compensation from "@/components/Compensation";
import {CSSProperties, useContext, useEffect, useState} from "react";
import {Answer, Form, getForms, getQuestions, Question} from "@/lib/questionHelper";
import QuestionComponent from "@/components/QuestionComponent";
import {FaArrowRight} from "react-icons/fa6";
import {m} from "framer-motion";
import {useRouter} from "next/router";
import SecondPrivacy from "@/components/SecondPrivacy";
import EndSurvey from "@/components/EndSurvey";
import {GetServerSideProps} from "next";
import {google} from "googleapis";
import Describe from "@/components/Describe";
import UserInfo from "@/components/UserInfo";
import EmailForm from "@/components/EmailForm";
import PhoneNumberForm from "@/components/PhoneNumberForm";
import {toast} from "react-toastify";
import {BeatLoader} from "react-spinners";
import {ThemeContext} from "@/lib/contexts";
import StartButton from "@/components/StartButton";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
const Survey = ({client}) => {
    const [description, setDescription] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const router = useRouter();
    const {UUID} = router.query;
    const [compensationAmount, setCompensationAmount] = useState<string>("0");
    const [percentage, setPercentage] = useState<number>(0);
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
    const [isBackClicked, setIsBackClicked] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [forms, setForms] = useState<Form[]>([]);
    const [ended, setEnded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(?:\+1[-.\s]?)?([2-9][0-9]{2})[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/;
    const { isDarkMode } = useContext(ThemeContext)
    const getRandomNumber = () => {
        return Math.floor(10000000 + Math.random() * 90000000);
    };
    const submitForm = async () => {
        setIsSubmitting(true)
        const customField: { [key: string]: string } = {};
        questions.forEach(question => {
            if (question.selected && question.selected.answer) {
                customField[question.key] = question.selected.answer;
            }
        });
        const tags = `CarComp${firstName}${lastName}${client[16]}${getRandomNumber()}${UUID}`
        const payload = {
            email,
            phone: phoneNumber,
            firstName,
            lastName,
            customField,
            tags: [tags],
            title: client[0],
        }
        const result = await fetch('/api/submitGoHighLevel', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                payload,
                token: client[12]
            }),
        })
        if(!result.ok) {
            setError(true)
        } else {
            terminate(true, true)
        }
    }
    const validateForm = () =>  {
        const current = forms.find(form => form.id === currentQuestionId)?.name;
        switch (current) {
            case "userInfo": {
                if(lastName === "" || firstName === "") {
                    toast.warning("Please fill in your first and last name")
                    return;
                }
                break;
            }
            case "emailForm": {
                if(email === "") {
                    toast.warning("Please fill in your email address")
                    return;
                }
                if(!emailPattern.test(email)) {
                    toast.warning("Invalid email format")
                    return;
                }
                break;
            }
            case "phoneNumberForm" :
                if(phoneNumber === "") {
                    toast.warning("Please fill in your phone number")
                    return;
                }
                if(!phonePattern.test(phoneNumber)) {
                    toast.warning("Invalid phone number")
                    return;
                }
                break;
        }
        if(currentQuestionId < questions.length + forms.length) {
            setCurrentQuestionId(currentQuestionId + 1);
        } else {
            submitForm();
        }
    }
    useEffect(() => {
        setQuestions(null)
        setForms(null)
        setForms(getForms());
        setQuestions(getQuestions());
    }, []);

    const backStep = () => {
        if (currentQuestionId > 1) {
            setCurrentQuestionId(currentQuestionId - 1);
            setIsBackClicked(true);
        } else {
            terminate(false, true);
        }
    };

    const terminate = (ended: boolean, valid:boolean) => {
        if (!ended) {
            router.replace(`/${UUID}`);
        } else {
            if(!valid) {
                setCompensationAmount(null)
                setFirstName("")
                setLastName("")
                setEmail("")
                setPhoneNumber("");
            }
            setIsValid(valid);
            setIsSubmitting(false);
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
        if (questionId < questions.length + forms.length) {
            setCurrentQuestionId(currentQuestionId + 1);
        }
    };

    const slideVariants = {
        hidden: {x: "100vw", opacity: 0},
        visible: {x: 0, opacity: 1, transition: {type: "spring", stiffness: 80}},
        exit: {x: "-100vw", opacity: 0, transition: {ease: "easeIn"}},
    };

    useEffect(() => {
        if (!questions.length) return;
        const percentage = currentQuestionId - 1 === 0 ? 0 : Math.round(((currentQuestionId - 1) / (questions.length + forms.length)) * 100);
        setPercentage(percentage);
    }, [currentQuestionId, questions.length]);

    return (
        <>
            {error ? (
                    <div className="flex flex-col justify-center h-full w-full">
                        <div className="flex mx-auto w-2/3 text-center mb-7 mt-3 text-2xl sm:text-lg dark:text-white justify-center">
                            Oops! there was an error submitting the form
                        </div>
                        <div className="mx-auto w-48 flext justify-center">
                            <StartButton title={"Try again!"}/>
                        </div>

                    </div>
                ) :
                isSubmitting ? (
                    <div className="flex flex-col justify-center h-full w-full">
                        <div className="mx-auto flext justify-center">
                        <BeatLoader
                            color={isDarkMode ? "#ffffff" : "#000"}
                            cssOverride={override}
                            size={20}
                            aria-label="Submitting survey..."
                            data-testid="loader"
                        />
                    </div>
                    <div className="flex mx-auto mt-3 text-2xl sm:text-lg dark:text-white justify-center">
                        Submitting survey...
                    </div>
                </div>
            ) : questions.length > 0 && !ended ? (
                <div className="flex flex-col h-screen text-darkbg dark:text-white justify-between">
                    <div className="p-8 sm:p-4 overflow-y-auto">
                        <div className="w-full">
                            <Compensation amount={compensationAmount} percentage={percentage}/>
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
                                {currentQuestionId <= questions.length ? (
                                    <QuestionComponent
                                        selected={questions.find((question) => question.id === currentQuestionId)?.selected?.id}
                                        setCompensation={setCompensationAmount}
                                        answerQuestion={answerQuestion}
                                        terminate={terminate}
                                        question={questions.find((question) => question.id === currentQuestionId) as Question}
                                    />
                                ) : currentQuestionId === 6 ?(
                                    <Describe description={description} setDescription={setDescription}/>
                                ) : currentQuestionId === 7 ?(
                                    <UserInfo setFirstName={setFirstName} setLastName={setLastName} lastName={lastName} firstName={firstName} />
                                ) : currentQuestionId === 8 ? (
                                    <EmailForm email={email} setEmail={setEmail} />
                                ): currentQuestionId === 9 && (
                                    <PhoneNumberForm phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                                )}
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
                            onClick={() => {
                                 if(currentQuestionId > questions.length) {
                                    validateForm()
                            } else {
                                    setIsBackClicked(false);
                                    setCurrentQuestionId(currentQuestionId + 1);
                            }}}
                            className={`bg-primary hover:bg-opacity-70 justify-center w-fit gap-3 flex rounded-[100px] ${!isBackClicked && currentQuestionId <= questions.length && "hidden"} ${
                                questions.length === currentQuestionId && "bg-opacity-40"
                            } text-white px-4 py-2`}
                        >
                            <div className="m-auto">{currentQuestionId < questions.length + forms.length ? "Next" :"Submit"}</div>
                            <div className="rounded-full m-auto p-2 my-auto bg-white text-primary text-xs">
                                <FaArrowRight/>
                            </div>
                        </button>
                    </div>
                </div>
            ) : (
                ended && (
                    <EndSurvey compensation={compensationAmount} isValid={isValid} name={`${firstName} ${lastName}`} email={email}/>
                )
            )}
        </>
    );
};

export default Survey;


export const getServerSideProps: GetServerSideProps = async context => {
    if (!context.params?.UUID)
        return {redirect: {destination: '/', permanent: false}}

    const UUID = context.params.UUID.toString()
    try {
        // @ts-ignore
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheetId = process.env.SPREAD_SHEET_ID;
        // @ts-ignore
        const sheets = google.sheets({version: 'v4', auth: auth});
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: sheetId as string,
            range: 'Clients!A1:Z',
        });

        const rows = response.data.values;
        if (rows && rows.length) {
            const client = rows.find((row: any) => row[22] == UUID);
            if (client) {
                return {
                    props: {
                        client,
                    },
                };
            }
        }
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    } catch (error: any) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
}
