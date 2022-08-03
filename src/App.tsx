import { ProductCard } from "./components";
import { Icons } from "./components/icons";

function App() {
  return (
    <ProductCard>
      <ProductCard.Image />
      <ProductCard.Body>
        <ProductCard.Note note="Perfume" />
        <ProductCard.Title title="Gabrielle Essence Eau De Parfum" />
        <ProductCard.Description
          description="A floral, solar and voluptuous interpretation composed by Olivier Polge,
      Perfumer-Creator for the House of CHANEL."
        />
        <ProductCard.Price price={149.99} beforeDiscountPrice={169.99} />
        <ProductCard.Button title="Add to Cart" icon={<Icons.IconCart />} />
      </ProductCard.Body>
    </ProductCard>
  );
}

export default App;
