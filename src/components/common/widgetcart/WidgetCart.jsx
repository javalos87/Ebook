import { Badge, IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import * as React from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const WidgetCart = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();
  return (
    <div>
      <Link to="/carrito">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={totalItems} showZero color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Link>
    </div>
  );
};

export default WidgetCart;
