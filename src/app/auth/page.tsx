import React from 'react';
import { GoogleIcon, AppleIcon, SsoIcon } from "./components/icons";
import Form from "./components/Form";

function Login() {
  return (
    <>
      <section>
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
          <div>
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
      <article>
        <div></div>
      </article>
    </>
  );
}

export default Login;
