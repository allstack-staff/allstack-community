import Elipse49 from "./components/icons/svg/Ellipse49.svg";
import ti51 from "./components/icons/svg/ti51.svg";
import Elipse50 from "./components/icons/svg/Ellipse50.svg";
import { GoogleIcon, AppleIcon, SsoIcon } from "./components/icons";
import React from "react";
import Form from "./components/Form";
import Image from "next/image";

function Login() {
  return (
    <main className="grid grid-cols-2">
      <section className="">
        <div>
          <p>Crie sua Conta</p>
          <Form />
        </div>
        <div>
          <p>
            Ao continuar, eu concordo com a{" "}
            <a href="#">Declaração de Privacidade</a> e os Termos de serviço do{" "}
            <a href="#">AllStack</a>.
          </p>
        </div>
        <div>
          <h2>Ou conecte-se com</h2>
          <div className="hidden md:flex flex-row min-w-fit max-w-fit justify-center items-center gap-3">
            <span>
              <GoogleIcon />
            </span>

            <span>
              <AppleIcon />
            </span>

            <span>
              <SsoIcon />
            </span>
          </div>
        </div>
      </section>
      <article className="hidden md:flex flex-row ">
        <div className="relative">
          <div className="">
            <Image src={Elipse49} width={500} height={500} alt="" />
          </div>
          <div className="">
            <Image src={Elipse50} width={500} height={500} alt="" />
          </div>
          <div className="">
            <Image src={ti51} width={500} height={500} alt="" />
          </div>
        </div>
      </article>
    </main>
  );
}

export default Login;
