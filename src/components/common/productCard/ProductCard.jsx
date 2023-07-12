import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card style={{}} sx={{ bgcolor: "text.disabled", width: 220, height: 420 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 220, height: 320 }}
          image={elemento.img}
          title={elemento.titulo}
        />
        <CardContent
          style={{
            textAlign: "center",
            alignItems: "center",
            height: 3,
          }}
        ></CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <Link to={`/productDetail/${elemento.id}`}>
          <Button style={{}} variant="contained">
            VER MAS
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
