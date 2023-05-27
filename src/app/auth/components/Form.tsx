import Input from "./Input";

const buttonStyle = {
  backgroundColor: "#2179DF",
  borderRadius: "15px",
  width: "23.625rem",
  height: "3.5625rem",
};

function Form() {
  return (
    <form>
      <div style={{ position: "relative" }}>
        <Input
          Placeholder="Endereço de e-mail"
          Type="email"
          Id="email"
          Required={true}
        />
      </div>
      <div>
        <button type="submit" className="text-white" style={buttonStyle}>
          Continuar
        </button>
      </div>
    </form>
  );
}

export default Form;
