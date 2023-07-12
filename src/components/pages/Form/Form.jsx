import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [userData, setUserData] = useState({ name: "", last: "" });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento);

    let data = {
      nombreUsuario: name,
      apellidoUsuario: lastName,
    };
    console.log(data);
    //mandarle info al back - para loguearme
  };

  const handleName = (evento) => {
    setName(evento.target.value);
  };
  const handleLastName = (evento) => {
    setLastName(evento.target.value);
  };
  return (
    <div>
      <h2> Estes es el formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="apellido"
          onChange={handleLastName}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
