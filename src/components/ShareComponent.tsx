import {
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share'
import {FC} from "react";
import {IoIosLink, IoLogoWhatsapp} from "react-icons/io";
import {FaTelegram} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import { useRouter } from 'next/router';
import {toast} from "react-toastify";

const ShareComponent: FC = ({}) => {
    const url = window.location.origin+useRouter().asPath;
    const copyToClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(`Take this survey and get major cash for your accident! : ${url}`)
            toast.success('Link copied to clipboard !')
        } catch {
            console.error('Error copying to clipboard !')
        }

    }
    return (
        <>
            <p className="sm:text-md text-black dark:text-white">
                Share your survey with all your friends and invite them to join to play:
            </p>
            <div className="items-center w-fit mx-auto gap-6 justify-center flex">
                <div onClick={copyToClipBoard} className="m-auto flex flex-col">
                        <div className="flex justify-center">
                            <div
                                className="flex h-20 w-20 cursor-pointer rounded-full  p-3 text-4xl bg-lightanswer dark:bg-darkblue dark:text-white text-primary hover:opacity-60 xs:h-10 xs:w-10 xs:p-2 xs:text-2xl">
                                <IoIosLink className="m-auto"/>
                            </div>
                        </div>
                </div>
                <div className="m-auto flex flex-col">
                    <WhatsappShareButton title={"Take this survey and get major cash for your accident!"} url={url}>
                        <div className="flex justify-center">
                            <div
                                className="flex h-20 w-20 cursor-pointer rounded-full p-3 text-4xl bg-lightanswer dark:bg-darkblue dark:text-white text-primary hover:opacity-60 xs:h-10 xs:w-10 xs:p-2 xs:text-2xl">
                                <IoLogoWhatsapp className="m-auto"/>
                            </div>
                        </div>
                    </WhatsappShareButton>
                </div>
                <div className="m-auto flex flex-col">
                    <TelegramShareButton title={"Take this survey and get major cash for your accident!"} url={url}>
                        <div className="flex justify-center">
                            <div
                                className="flex h-20 w-20 cursor-pointer rounded-full p-3 text-3xl bg-lightanswer dark:bg-darkblue dark:text-white text-primary hover:opacity-60 xs:h-10 xs:w-10 xs:p-2 xs:text-2xl">
                                <FaTelegram className="m-auto"/>
                            </div>
                        </div>
                    </TelegramShareButton>
                </div>
                <div className="m-auto flex flex-col">
                    <TwitterShareButton title={"Take this survey and get major cash for your accident!"} url={url}>
                        <div className="flex justify-center">
                            <div
                                className="flex h-20 w-20 cursor-pointer rounded-full p-3 text-3xl hover:opacity-60 bg-lightanswer dark:bg-darkblue dark:text-white text-primary xs:h-10 xs:w-10 xs:p-2 xs:text-2xl">
                                <FaSquareXTwitter className="m-auto"/>
                            </div>
                        </div>
                    </TwitterShareButton>
                </div>
            </div>
        </>
    )
}

export default ShareComponent
