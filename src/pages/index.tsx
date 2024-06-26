import ThemeToggler from "@/components/ThemeToggler";
import MainTitle from "@/components/MainTitle";
import StartButton from "@/components/StartButton";
import Settlement from "@/components/Settlement";
import Privacy from "@/components/Privacy";


export default function Home() {
    return (
        <>
        <div className="text-darkbg dark:text-white h-full overflow-y-auto">
            <div className="w-full h-full">
                <div className="w-full -mb-12 flex justify-end -ml-10 md:-ml-2 mt-4">
                    <ThemeToggler />
                </div>
                <MainTitle/>
                <div className="-mt-12 pt-10 gap-4 px-7 flex flex-col rounded-t-[40px] bg-white dark:bg-darkbg w-full h-96">
                    <p className="sm:text-sm">
                        Fill out this 30-second survey to see what you qualify for:
                    </p>
                    <StartButton/>
                    <Settlement/>
                    <Privacy/>
                    <br/>
                </div>
            </div>
        </div>
        </>
    )
}
