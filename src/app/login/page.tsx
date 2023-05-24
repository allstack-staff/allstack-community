//import '../../style/globals.css'
import Image from "next/image";
import Navbar from "../../../components/Navbar_Login";

export default function Login() {
  return (
    <body>
      <Navbar />
      <main>
        <section>
          <h1>Crie sua Conta</h1>
          <div>
            <form action="">
              <input type="text" placeholder="Endereço de e-mail" />
              <button type="submit">Continuar</button>
              <p>
                Ao continuar, eu concordo com a
                <a href="">Declaração de Privacidade</a> e os Termos de serviço
                do <a href="">AllStack</a>.
              </p>
            </form>
            <div>
              <h2>Ou conecte-se com</h2>
              <div>
                <ul>
                  <li>
                    <Image
                      src="/images/google.png"
                      width={40}
                      height={40}
                      alt="Google"
                    />

                    <p>Google</p>
                  </li>
                  <li>
                    <Image
                      src="/images/apple.png"
                      width={40}
                      height={40}
                      alt="Apple"
                    />
                    <p>Apple</p>
                  </li>
                  <li>
                    <Image
                      src="/images/sso.png"
                      width={40}
                      height={40}
                      alt="SSO"
                    />
                    <p>SSO</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <Image
              src="/images/img_tech.png"
              width={500}
              height={500}
              alt="Undefined"
            />
          </div>
          <div>
            <Image
              src="/images/Ellipse.png"
              width={150}
              height={150}
              alt="Undefined"
            />
          </div>
        </section>
      </main>
    </body>
  );
}
