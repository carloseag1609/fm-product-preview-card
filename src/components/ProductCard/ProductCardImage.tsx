import imageProductMobile from "../../assets/image-product-mobile.jpg";
import imageProductDesktop from "../../assets/image-product-desktop.jpg";
import { useMediaQuery } from "../../hooks";

export function ProductCardImage() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <img
      className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
      src={isDesktop ? imageProductDesktop : imageProductMobile}
      alt="Product image"
    />
  );
}
