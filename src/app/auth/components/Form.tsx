import Input from "./Input";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["500"], subsets: ["latin"] });

const buttonStyle = {
  backgroundColor: "#2179DF",
};

function Form() {
  return (
    <form className="flex flex-col items-center my-6 pt-3 md:block md:px-20 md:pt-11">
      <div className="hidden md:flex">
        <Input
          Placeholder="Endereço de e-mail"
          Type="email"
          Id="email"
          Required={true}
        />
      </div>

      <div className="md:hidden">
        <input
          type="email"
          placeholder="Endereço de e-mail"
          required
          className="border-2 border-gray-600 rounded-lg w-[18rem] h-[2rem] placeholder:text-sm placeholder:text-center"
        />
      </div>

      <div className="md:ml-[3em] md:mt-[2em] mt-4">
        <button
          type="submit"
          className={`${roboto.className} rounded-3xl text-sm w-[7rem] h-[2.3rem] md:rounded-2xl md:w-[19rem] md:h-[2.5rem] text-white`}
          style={buttonStyle}>
          Continuar
        </button>
      </div>
    </form>
  );
}

export default Form;
