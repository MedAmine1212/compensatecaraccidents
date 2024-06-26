import { FaArrowRight } from "react-icons/fa6";

const StartButton = () => {
    return (
        <>
        <button className="w-full bg-custom-gradient shadow-custom-shadow flex gap-4 rounded-full p-2">
            <div className="rounded-full p-3 my-auto bg-white text-primary sm:text-sm">
                <FaArrowRight />
            </div>
            <div className="text-white w-full text-center -ml-10 my-auto sm:text-lg">
                Start survey now
            </div>
        </button>
        </>
    )
}

export default StartButton
