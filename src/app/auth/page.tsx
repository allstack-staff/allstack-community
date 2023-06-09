// Components
import React from "react";
import Form from "./components/Form";
import Image from "next/image";
import Link from "next/link";

//Icons
import Elipse49 from "./components/icons/svg/Ellipse49.svg";
import ti51 from "./components/icons/svg/ti51.svg";
import Elipse50 from "./components/icons/svg/Ellipse50.svg";
import GoogleIcon from "./components/icons/svg/google.svg";
import AppleIcon from "./components/icons/svg/apple.svg";
import SsoIcon from "./components/icons/svg/sso.svg";

const font = {
  fontSize: "0.7rem",
};

const links = {
  color: "#3693FF",
  textDecoration: "underline",
  cursor: "pointer",
};

function Login() {
  return (
    <section className="md:grid md:grid-cols-2 overflow-y-auto">
      <article className="flex flex-col items-center">
        <div className="mt-[2.5em]">
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-3xl font-bold md:text-4xl">
            Crie sua Conta
          </p>
        </div>
        <Form />

        <div className=" mt-4 md:mt-2" style={font}>
          <p className="">
            Ao continuar, eu concordo com a{" "}
            <Link href="/privacidade">
              <span style={links} /*onClick={_privacidade}*/>
                Declaração de <br />
                Privacidade
              </span>{" "}
            </Link>
            e os Termos de serviço do{" "}
            <Link href="/termos_de_servico">
              <span style={links} /*onClick={_allStack}*/>AllStack.</span>
            </Link>
          </p>
        </div>

        <div className="flex-col justify-center items-center flex">
          <div className="my-8 md:my-6 text-md">
            <h2>Ou conecte-se com</h2>
          </div>

          <ul className="flex flex-row gap-6">
            <li className="rounded-full border-2 border-gray-600 p-2 md:p-3 ">
              <div className="pr-[1px]">
                <Image src={GoogleIcon} width={40} height={40} alt="" />
              </div>
            </li>

            <li className="rounded-full border-2 border-gray-600 p-2 md:p-3 md:ml-3">
              <div className="mb-[4px] pr-[1.5px]">
                <Image src={AppleIcon} width={40} height={40} alt="" />
              </div>
            </li>

            <li className="rounded-full border-2 border-gray-600 p-2 md:p-3 md:ml-3">
              <div className="ml-[4px] mt-[3px]">
                <Image src={SsoIcon} width={40} height={40} alt="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-row min-w-fit max-w-fit justify-center items-center gap-2 md:hidden">
          <p>Já possui conta?</p>
          <a href="#" className="text-blue-500">
            Fazer Login
          </a>
        </div>
      </article>

      {/*elipses*/}
      <article className="hidden relative md:flex">
        <div className="">
          <div className="absolute  top-0 right-0 z-0">
            <Image src={Elipse49} width={433} height={960} alt="" />
          </div>
          <div className="absolute  top-18 right-0 z-10">
            <Image src={Elipse50} width={615} height={985} alt="" />
          </div>
          <div className="absolute -top-4 z-20">
            <Image src={ti51} width={904 - 310} height={851 - 310} alt="" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Login;
