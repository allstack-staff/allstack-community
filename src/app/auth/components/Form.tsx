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
    <form>
      <div className="relative">
        <Input
          Placeholder="Endereço de e-mail"
          Type="email"
          Id="email"
          Required={true}
        />
      </div>
      <div className="w-2">
        <button type="submit" className={`${roboto.className} text-white`} style={buttonStyle}>
          Continuar
        </button>
      </div>
    </form>
  );
}

export default Form;
