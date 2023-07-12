import useCount from "../../../hooks/useCount";
import { Button, CardActions, Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      {stock == 0 ? (
        <div>
          <CardActions style={{ justifyContent: "space-between" }}>
            <Stack direction="row" spacing={1}>
              <Chip label="AGOTADO" />
            </Stack>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button variant="contained">VOLVER</Button>
            </Link>
          </CardActions>
        </div>
      ) : (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardActions style={{ justifyContent: "space-between" }}>
                <div>
                  <Button variant="contained" onClick={decrement}>
                    -
                  </Button>
                  <Button variant="text">{count}</Button>
                  <Button variant="contained" onClick={increment}>
                    +
                  </Button>
                </div>
              </CardActions>
            </Grid>
            <Grid item xs={12}>
              <CardActions style={{ justifyContent: "space-between" }}>
                <Button variant="contained" onClick={() => onAdd(count)}>
                  Agregar Al carrito
                </Button>
                <Link style={{ textDecoration: "none" }} to="/">
                  <Button variant="contained">VOLVER</Button>
                </Link>
              </CardActions>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default ItemCount;
