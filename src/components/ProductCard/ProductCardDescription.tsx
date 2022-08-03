type Props = {
  description: string;
};

export function ProductCardDescription({ description }: Props) {
  return <p className="text-dark-grayish-blue mb-6">{description}</p>;
}
