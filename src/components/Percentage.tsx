import { FC } from "react";

type Props = {
    percentage: number;
};

const Percentage: FC<Props> = ({ percentage }) => {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex relative justify-center items-center h-32 w-32 sm:w-20 sm:h-20">
            <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 200 200">
                <circle
                    className="text-gray-200"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="100"
                    cy="100"
                />
                <circle
                    className="dark:text-primary text-lightblue"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="100"
                    cy="100"
                />
            </svg>
            <div className="absolute flex items-center justify-center">
                <span className={`sm:text-sm ${percentage == "0" ? "dark:text-subcolor text-white" : "text-percentage"}`}>{percentage}%</span>
            </div>
        </div>
    );
};

export default Percentage;
