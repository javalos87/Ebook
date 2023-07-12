import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

import { BeatLoader } from "react-spinners/";
import Swal from "sweetalert2";
import "./ProductDetail.css";
const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { agregarAlCarrito, getTotalCantidadById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalCantidadById(+id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      cantidad: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto se agrego al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let refDoc = doc(itemsCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ProductDetail
          cantidad={cantidad}
          productSelected={productSelected}
          agregarAlCarrito={agregarAlCarrito}
          onAdd={onAdd}
        />
      ) : (
        <div className="loader-container">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailContainer;
