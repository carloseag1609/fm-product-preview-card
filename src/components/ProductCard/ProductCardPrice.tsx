type Props = {
  price: number;
  beforeDiscountPrice?: number;
};

export function ProductCardPrice({ price, beforeDiscountPrice }: Props) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-dark-cyan text-4xl font-bold font-serif">
        ${price}
      </span>
      {beforeDiscountPrice && (
        <span className="text-dark-grayish-blue text-base line-through font-medium">
          ${beforeDiscountPrice}
        </span>
      )}
    </div>
  );
}
