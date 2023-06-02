import Elipse49 from "./components/icons/svg/Ellipse49.svg";
import ti51 from "./components/icons/svg/ti51.svg";
import Elipse50 from "./components/icons/svg/Ellipse50.svg";
import { GoogleIcon, AppleIcon, SsoIcon } from "./components/icons";
import React from "react";
import Form from "./components/Form";
import Image from "next/image";

function Login() {
  return (
    <section className="grid grid-cols-2">
      <article className="">
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
      </article>
      <article className="hidden relative md:flex flex-row">
        <div className="overflow-x-hidden">
          <div className="absolute top-0 right-0 z-0">
            <Image src={Elipse49} width={600} height={250} alt="" />
          </div>
          <div className="absolute top-18 right-0 z-10">
            <Image src={Elipse50} width={471.8} height={471.8} alt="" />
          </div>
          <div className="absolute top-20 left-0 z-20">
            <Image src={ti51} width={537.2} height={537.2} alt="" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Login;
