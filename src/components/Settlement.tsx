import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const settlements = [
    {
        icon: '/settlements/motor.svg',
        name: 'Motor Vehicle accident',
        price: '$165,306',
    },
    {
        icon: '/settlements/uber.svg',
        name: 'Uber/Lyft accident',
        price: '$31,920',
    },
    {
        icon: '/settlements/car.svg',
        name: 'Real End Collision',
        price: '$75,012',
    }
]
const Settlement = () => {
    return (
        <>
        <div className="flex flex-col mt-6">
            <p className="sm:text-lg dark:text-white text-black">
                Settlement:
            </p>
            <div className="mt-5 flex justify-center gap-10">
                {settlements.map((settlement, index) => (
                    <div key={index} className="flex flex-col items-start gap-2">
                        <Image src={settlement.icon} alt={settlement.icon} width={100} height={100}
                               className="w-16 h-16"/>
                        <p className="text-primary font-bold dark:text-white text-lg">
                            {settlement.price}
                        </p>
                        <p className="text-black dark:text-white w-2/3 md:w-full text-lg sm:text-sm">
                            {settlement.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Settlement
