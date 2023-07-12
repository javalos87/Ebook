import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ProductsList.css";

import { BeatLoader } from "react-spinners/";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  const { genero } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta;

    if (!genero) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("genero", "==", genero));
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [genero]);

  /* return temprano
if (items.length === 0){
  return <h1>Cargando</h1>
}
 */
  return (
    <div>
      {items.length > 0 ? (
        <ProductsListPresentacional items={items} />
      ) : (
        <div className="loader-container">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};

export default ProductsListContainer;
