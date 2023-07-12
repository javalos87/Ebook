import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useState } from "react";

const CheckOutContainer = () => {
  const { cart, getTotalPrecio, limpiarCarrito } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrecio();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };
      let ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.cantidad,
        });
      });

      limpiarCarrito();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Campo obligatorio")
        .min(3, "Este campo debe ser mayor a 3 caracteres"),
      email: Yup.string()
        .required("Campo obligatorio")
        .email("Este email no es valido"),
      phone: Yup.string()
        .required("Campo obligatorio")
        .min(10, "El telefono no cumple con los requisitos"),
    }),
  });

  return (
    <div>
      {orderId ? (
        <h1>Se realizo la compra y el numero de registro es: {orderId}</h1>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckOutContainer;
