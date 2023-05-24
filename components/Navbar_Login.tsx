import Image from "next/image";

export default function Navbar_Login() {
  return (
    <header>
      <nav className="">
        <Image
          src="/images/AS_icone.png"
          width={83}
          height={96}
          alt="AllStack"
        />
        <p>
          <span>All</span>Stack
        </p>

        <div className="-mr-2 flex md:hidden">
        <button
          type="button"

          className="toggle-icon inline-flex items-center justify-center p-2 rounded-md"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

        <div>
          <p>Já possui conta?</p>
          <a href="#">Fazer Login</a>
        </div>
        <div>
          <Image src="/images/email.png" width={63} height={63} alt="E-mail" />
          <Image
            src="/images/acessibilidade.png"
            width={63}
            height={63}
            alt="Acessibilidade"
          />
        </div>
      </nav>
    </header>
  );
}
