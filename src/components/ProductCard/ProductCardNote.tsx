type Props = {
  note: string;
};

export function ProductCardNote({ note }: Props) {
  return (
    <span className="text-dark-grayish-blue text-xs uppercase tracking-[.25em] md:text-base">
      {note}
    </span>
  );
}
