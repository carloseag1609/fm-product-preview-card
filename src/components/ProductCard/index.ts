import { ProductCard as ProductCardComponent } from "./ProductCard";
import { ProductCardBody } from "./ProductCardBody";
import { ProductCardButton } from "./ProductCardButton";
import { ProductCardDescription } from "./ProductCardDescription";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardNote } from "./ProductCardNote";
import { ProductCardPrice } from "./ProductCardPrice";
import { ProductCardTitle } from "./ProductCardTitle";

const ProductCard = Object.assign(ProductCardComponent, {
  Image: ProductCardImage,
  Body: ProductCardBody,
  Note: ProductCardNote,
  Title: ProductCardTitle,
  Description: ProductCardDescription,
  Price: ProductCardPrice,
  Button: ProductCardButton,
});

export { ProductCard };
