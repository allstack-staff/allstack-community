import Input from "./Input";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["500"], subsets: ["latin"] });

const buttonStyle = {
  backgroundColor: "#2179DF",
  borderRadius: "15px",

};

function Form() {
  return (
    <form className=" pt-3 md:px-20 md:pt-11">
      <div className="">
        <Input
          Placeholder="Endereço de e-mail"
          Type="email"
          Id="email"
          Required={true}
        />
      </div>
      <div className="w-2 m-1 md:ml-[3em] md:mt-[2em] ">
        <button type="submit" className={`${roboto.className} md:w-[19rem] md:h-[2.5rem] text-white`} style={buttonStyle}>
          Continuar
        </button>
      </div>
    </form>
  );
}

export default Form;