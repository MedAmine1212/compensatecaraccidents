import { FaArrowRight } from "react-icons/fa6";
import {FC, useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import router, {useRouter} from 'next/router'

type Props = {
    title: string
}
const StartButton : FC<Props> = ({title}: Props) =>  {
    const router = useRouter();
    const UUID = router.query.UUID;
    const [isAnimating, setIsAnimating] = useState(false);
    const [buttonWidth, setButtonWidth] = useState(0);
    const buttonRef = useRef(null);
    useEffect(() => {
        if (buttonRef.current && buttonWidth === 0) {
            setButtonWidth(buttonRef.current.offsetWidth);
        }
    }, []);
    const handleClick = (e) => {
        e.preventDefault();
        setIsAnimating(true);
        setTimeout(() => {
            console.log(router.pathname)
            if(router.pathname === `/[UUID]/survey`)  router.reload();
            else router.push(`/${UUID}/survey`);
        }, 300);
    };
    return (
        <>
        <button
            ref={buttonRef}
            onClick={handleClick} className="w-full bg-custom-gradient shadow-custom-shadow flex gap-4 rounded-full p-2">
            <motion.div
                animate={isAnimating ? { x: [0, buttonWidth - 60] } : { x: 0 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="rounded-full p-3 my-auto bg-white text-primary sm:text-sm">
                <FaArrowRight />
            </motion.div>
            <div className="text-white w-full text-center -ml-10 my-auto sm:text-lg">
                {title}
            </div>
        </button>
        </>
    )
}

export default StartButton
