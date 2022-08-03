type Props = {
  title: string;
  icon?: JSX.Element;
};

export function ProductCardButton({ title, icon }: Props) {
  return (
    <button className="bg-dark-cyan w-full h-14 rounded-lg flex items-center justify-center gap-3 text-white transition-colors ease-in-out hover:bg-[#1A4031]">
      {icon && icon}
      <span>{title}</span>
    </button>
  );
}
