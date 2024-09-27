interface ChipProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Chip = ({ label, variant = 'secondary', onClick }: ChipProps) => {
  const chipStyle = variant === 'primary' ? 'bg-green-brand text-white' : 'bg-grey-default text-black-primary';

  return (
    <div
      className={`h-12 px-6 w-26 flex items-center justify-center rounded-full ${chipStyle} cursor-pointer`}
      onClick={onClick}
    >
      <span className="font-medium leading-5 text-sm">{label}</span>
    </div>
  );
};

export default Chip;
