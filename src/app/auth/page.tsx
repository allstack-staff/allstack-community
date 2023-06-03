import React from "react";
import Link from "next/link";

//Icons
import Elipse49 from "./components/icons/svg/Ellipse49.svg";
import ti51 from "./components/icons/svg/ti51.svg";
import Elipse50 from "./components/icons/svg/Ellipse50.svg";
import { GoogleIcon, AppleIcon, SsoIcon } from "./components/icons";
// Components
import Form from "./components/Form";
import Image from "next/image";

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
    <section className="grid grid-cols-2">
      <article className="">
        <div>
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-4xl font-bold leading-10">
            Crie sua Conta
          </p>
        </div>
        <Form />

        <div className="block m-3" style={font}>

          <p className="m-16">

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

      {/*elipses*/}
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
