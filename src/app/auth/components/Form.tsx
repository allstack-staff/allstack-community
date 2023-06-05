import Input from "./Input";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["500"], subsets: ["latin"] });


const buttonStyle = {
  backgroundColor: "#2179DF",
  borderRadius: "15px",
  width: "19rem",
  height: "2.5rem",
};

function Form() {
  return (
    <form className="pl-20 pr-20 pt-16">
      <div className="relative">
        <Input
          Placeholder="Endereço de e-mail"
          Type="email"
          Id="email"
          Required={true}
        />
      </div>
      <div className="w-2 m-1 ml-[20px]">
        <button type="submit" className={`${roboto.className} text-white`} style={buttonStyle}>
          Continuar
        </button>
      </div>
    </form>
  );
}

export default Form;
