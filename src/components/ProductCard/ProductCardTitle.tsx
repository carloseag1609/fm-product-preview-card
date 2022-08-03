type Props = {
  title: string;
};

export function ProductCardTitle({ title }: Props) {
  return (
    <h3 className="text-very-dark-blue font-serif text-4xl my-4 md:text-5xl md:mt-2 md:mb-4">
      {title}
    </h3>
  );
}
