import { Button, TextField } from "@mui/material";
import "./Checkout.css";
const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Apellido y Nombre"
          variant="outlined"
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
          sx={{ width: 300 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
        />
        <Button variant="outlined" type="submit">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
