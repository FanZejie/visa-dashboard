import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="flex flex-row items-center justify-center h-[calc(100vh-5rem)] p-4">
      <div className="w-1/2 h-full">
        <HeroHighlight className="h-96">
          <h1 className="text-5xl font-bold text-black px-10 py-2">WelCome </h1>
          <h2 className="text-3xl font-bold text-black px-10">
            Help you get Australian 500 student visa information more easily
          </h2>
          <div className="text-black p-10">
            <Highlight>Share your visa progress</Highlight>
            and relieve your anxiety about visa application
          </div>
      <div className="flex flex-row items-center ">
      <div className="px-10">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Visa-Table
              </div>
            </button>
          </div>
          <div className="px-10">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                Login to Share
              </div>
            </button>
          </div>
      </div>
         
        </HeroHighlight>
      </div>
      <div className="w-1/2 h-full flex flex-col">
        {/* <Image className="rounded-md mt-12" src={"https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="image" width={600} height={500} /> */}
        <div className="flex flex-row items-end justify-end mb-2 w-full pr-4 bg-slate-500 h-12">Contributors</div>
        <div className="w-full pr-4 bg-slate-500 h-72 mb-2 "> table</div>
        <div className="flex flex-row w-full">
          <div className="w-1/2 px-4 bg-slate-500 h-72"> table</div>
          <div className="w-1/2 ml-4 pr-4 bg-slate-500 h-72"> table</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
