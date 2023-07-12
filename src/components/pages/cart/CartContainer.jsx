import { useNavigate } from "react-router-dom";
import CartPresentacional from "./CartPresentacional";
import { Margin } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { products } from "../../productsMocks";
import Swal from "sweetalert2";
import AgregarDocs from "../../../AgregarDocs";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";
import { Button, Box } from "@mui/material";
import "./Cart.css";

useContext;
const CartContainer = () => {
  const { cart, limpiarCarrito, eliminarById, getTotalPrecio } =
    useContext(CartContext);
  let totalPrecio = getTotalPrecio();

  const limpiar = () => {
    Swal.fire({
      title: "Esta seguro que quiere vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        limpiarCarrito();
        Swal.fire("Se ha vaciado el carrito!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Se cancelo", "", "info");
      }
    });
  };
  const eliminar = ({ product }) => {
    Swal.fire({
      title: "Esta seguro que quiere eliminar el producto?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        eliminarById(product.id);
        Swal.fire("Se ha eliminado el producto", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Se cancelo", "", "info");
      }
    });
  };

  const navigate = useNavigate();

  const realizarCompra = () => {
    // navegar
    navigate("/checkout");
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="container">
          <div
            className="cart-container"
            style={{ color: "blue", lineHeight: 1, padding: 1 }}
          >
            <h1>SU CARRITO ESTA VACIO</h1>
          </div>
        </div>
      ) : (
        <div className="container">
          <div
            className="cart-container"
            style={{ color: "blue", lineHeight: 1, padding: 1 }}
          >
            <h1>ORDEN DE COMPRA</h1>
            <Box sx={{ overflow: "auto" }}>
              <Box
                sx={{ width: "100%", display: "table", tableLayout: "fixed" }}
              >
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 1 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>PRODUCTOS </TableCell>
                        <TableCell align="right">PRECIO</TableCell>
                        <TableCell align="right">CANTIDAD</TableCell>
                        <TableCell align="right">TOTAL</TableCell>
                        <TableCell align="right">QUITAR</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.map((product) => (
                        <TableRow
                          key={product.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {product.titulo}
                          </TableCell>
                          <TableCell align="right">{product.precio}</TableCell>
                          <TableCell align="right">
                            {product.cantidad}
                          </TableCell>
                          <TableCell align="right">
                            {product.precio * product.cantidad}
                          </TableCell>
                          <TableCell align="right">
                            <button onClick={() => eliminar({ product })}>
                              <DeleteIcon sx={{ color: pink[500] }} />
                            </button>
                            {/* <button onClick={() => eliminarById(product.id)}>
                      <DeleteIcon sx={{ color: pink[500] }} />
                    </button> */}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
            <div
              key={1}
              style={{
                color: "blue",
                lineHeight: 2,
                padding: 20,
                marginLeft: "auto",
              }}
            >
              <Button
                style={{ margin: 10 }}
                variant="contained"
                onClick={limpiar}
              >
                VACIAR CARRITO
              </Button>
              <Button style={{}} variant="contained" onClick={realizarCompra}>
                TERMINAR COMPRA
              </Button>
            </div>
            <h1>Total: {totalPrecio}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
