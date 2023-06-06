import Image from "next/image";
import { Roboto } from "next/font/google";
import { HamburguerIcon, AccessibilityIcon, EnveloperIcon } from "./icons";
const roboto = Roboto({ weight: ["500"], subsets: ["latin"] });

export default function Navbar_Login() {
  return (
    <header className={roboto.className}>
      <nav className="flex items-center flex-row justify-between px-4 py-3 sm:px-8 min-h-[100px] max-h-[100px]">
        {/* ICON */}
        <div className="flex items-center max-w-md min-h-full justify-center flex-row">
          <div className="w-auto">
            <Image
              src="/images/AllStack.svg"
              alt="AllStack-icon"
              width={100}
              height={100}
             // layout="responsive"
            />
          </div>
          <p className="text-center ">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
              <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
                All
              </span>
              Stack
            </span>
          </p>
        </div>

        <div className="hidden md:flex flex-row min-w-fit max-w-fit justify-center items-center gap-3 ">
          <p>Já possui conta?</p>
          <a href="#" className="text-blue-500">
            Fazer Login
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <button
              type="button"
              className="toggle-icon inline-flex items-center justify-center p-2 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              <HamburguerIcon />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-16">
            <div className="w-6 h-6 sm:w-12 sm:h-12 cursor-pointer">
              <EnveloperIcon />
            </div>

            <div className="w-6 h-6 sm:w-12 sm:h-12  cursor-pointer">
              <AccessibilityIcon />
            </div>
          </div>
        </div>
      </nav>
       <div className="border-2 border-solid border-gray-300 w-full"></div>
    </header>
  );
}
