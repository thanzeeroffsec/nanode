import CanvasComponent from "@/components/CanvasComponent";
import StarrySky from "@/components/StarrySky";
import ZoneSection from "@/components/ZoneSection";
import discord from "/discord.svg";
import { Button } from "@/components/ui/moving-border";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src={"/logo.png"}
          width={300}
          height={300}
          alt="arc logo"
          className="m-auto object-contain absolute  z-10 top-0 left-0 right-0 w-[300px] h-auto"
        />
      </div>
      <main className="scroll-smooth flex flex-col relative w-full min-h-screen items-center justify-center">
        <StarrySky />

        <div className="md:w-[80vw] w-[90%] h-screen   mb-10">
          {/* top part section start */}
          <section className="h-[400px] mt-32   flex items-center flex-col ">
            <div className=" h-full w-full flex  items-center    ">
              <div className="w-[60%]">
                <h1 className="text-3xl font-bold tracking-wider sm:text-5xl hacked-font text-yellow-400">
                  nanode <br />
                  Hardware Village
                </h1>
                <div className="flex flex-col text-gray-500 space-y-4 ">
                  <span className="text-base !leading-7 sm:text-xl md:text-base lg:text-2xl/none mt-3 font-semibold mb-2">
                    Nanode invites tech enthusiasts, innovators, and hardware
                    professionals to collaborate and innovate.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-end mt-auto justify-center  ">
              <div className="">
                <Link href={"#zones"}>
                  <Button
                    borderRadius="10px"
                    className="bg-slate-900 w-[200px] lg:w-[300px] p-1  text-white   dark:border-slate-800 text-lg"
                  >
                    EVENTS
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          {/* top part section end */}
        </div>

        <div className="w-full relative overflow-hidden h-[100%] ">
          <CanvasComponent />

          <div className="md:w-[80vw] w-[90%] m-auto h-full ">
            {/* second section start */}
            <section className="glassCard w-full text-white">
              <div className="flex  w-[100%] lg:w-[50%] m-auto justify-around text-center">
                <div>
                  <h3 className="text-yellow-400 font-bold text-xl">
                    Register
                  </h3>
                  <span className="text-red-500 font-medium  text-md">
                    Closed
                  </span>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold text-xl">Date</h3>
                  <span className="text-[#9CA3AF] font-medium text-md">
                    July 11
                  </span>
                </div>
                <div>
                  <h3 className=" text-yellow-400 font-bold text-xl">Time</h3>
                  <span className="text-[#9CA3AF] font-medium text-md">
                    9:30 AM
                  </span>
                </div>
              </div>
            </section>
            {/* second section end */}

            {/* third section start */}
            <section className="glassCard w-full text-white">
              <div className="flex w-full m-auto justify-between text-center flex-col lg:flex-row">
                <div className="text-left w-full lg:w-full m-auto text-yellow-400 px-5">
                  <h3 className=" font-bold text-2xl sm:text-4xl font-mono mb-2">
                    Event Details
                  </h3>
                  <p className="font-mono leading-6 text-lg">
                    Hakxite hackathon is a 3-day online event where developers
                    can collaborate and build projects using the Vercel
                    platform. Participants will have the opportunity to create
                    web applications, APIs, and more, and showcase their work to
                    the community.
                  </p>
                  <p className="font-mono leading-6 text-lg">
                    Whether you're a beginner or an experienced developer, the
                    hackathon is open to everyone. You can work solo or as part
                    of a team, and you'll have access to resources, tutorials,
                    and support from the Hakxite team.
                  </p>
                </div>
                {/* <div className="text-yellow-400 w-full lg:w-[50%] text-left mt-10 px-5 lg:mt-0 lg:text-center">
                  <h1 className=" font-bold text-3xl mb-2">Schedule</h1>
                  <ul className="list-disc list-inside  text-lg leading-10">
                    <li>
                      <b>Day 1 (march 27)</b>: Kickoff and hacking begins
                    </li>
                    <li>
                      <b>Day 1 (march 27)</b>: Kickoff and hacking begins
                    </li>
                    <li>
                      <b>Day 1 (march 27)</b>: Kickoff and hacking begins
                    </li>
                  </ul>
                </div> */}
              </div>
            </section>
            {/* third section end */}
            {/* zones section  */}

            <ZoneSection />

            {/* tab section section 1 start*/}
            {/* <section className="glassCard w-full text-white !p-5  ">
              <div className=" w-full h-auto text-white text-lg px-5">
                <h1 className="font-bold text-yellow-400 text-2xl  sm:text-3xl font-mono mb-2">
                  Section Details
                </h1>

                <div className="w-full mt-5">
                  <div className="flex justify-between p-5 rounded-[10px] w-full">
                    <div className="w-[150px] text-center p-2  border-2 cursor-pointer  ">
                      sector 1
                    </div>
                    <div className="w-[150px] text-center p-2 border-2">
                      sector 2
                    </div>
                    <div className="w-[150px] text-center p-2 border-2">
                      sector 3
                    </div>
                    <div className="w-[150px] text-center p-2 border-2">
                      sector 4
                    </div>
                    <div className="w-[150px] text-center p-2 border-2">
                      sector 5
                    </div>
                    <div className="w-[150px] text-center p-2 border-2">
                      sector 6
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* tab section section 1 end */}

            {/* zones section  */}
            {/* fifth section start */}
            <section className="glassCard w-full text-white">
              <div className="flex w-full m-auto   flex-col px-5 gap-5">
                <h3 className=" font-bold text-2xl sm:text-4xl font-mono mb-2 text-yellow-400">
                  Powered By
                </h3>
                <div className="text-left w-[100%] lg:w-[80%] m-auto flex justify-around gap-5">
                  <div className="h-fit">
                    <Image
                      src="/arc-logo.png"
                      width={250}
                      height={250}
                      alt="Picture of the author"
                      className="w-[250px] h-auto align-middle border-none object-contain"
                    />
                  </div>
                  <div className="h-fit">
                    <Image
                      src="/offenso.webp"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                      className="w-full h-auto align-middle border-none object-contain"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* fifth section end */}

            {/* footer section start  */}
            <footer className="glassCard w-full text-white">
              <div className="flex w-[90%]  items-center lg:w-[50%] m-auto justify-center gap-10 text-center">
                <Link
                  href={"https://chat.whatsapp.com/D7nyaiI4tYZKYjDLkmf1Cv"}
                  target="_blank"
                >
                  <div>
                    <img src="/whatsapp.svg" width={50} height={50} alt="" />
                  </div>
                </Link>

                <Link href={"http://discord.com"}>
                  <div>
                    <img src="/discord.svg" width={60} height={60} alt="" />
                  </div>
                </Link>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-center gap-5 h-[80px] mt-[3rem]">
                <Image
                  src="/logo.png"
                  width={200}
                  height={100}
                  alt="footer logo"
                  className="object-contain w-[200px] h-auto "
                />

                <span className="text-yellow-300 text-lg ">
                  All rights reserved © The ARC COMMUNITY
                </span>
              </div>
            </footer>
            {/* footer section end  */}
          </div>
        </div>
      </main>
    </>
  );
}
