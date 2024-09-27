import { statusDisplayValues } from "../../utils/status";

export interface PillProps {
  value?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  status: "AVAILABLE" | "BOOKED" | "MAINTENANCE" | "DISABLED";
}

const Pill = ({
  status,
}: PillProps) => {
  const statusColors = {
    AVAILABLE: "bg-green-light text-green-primary",
    BOOKED: "bg-grey-default text-black-primary",
    MAINTENANCE: "bg-pink-default text-red-default",
    DISABLED: "bg-gray-300 text-gray-500",
  };

  const pillColor = status ? statusColors[status] : "bg-gray-200";

  const displayValue = statusDisplayValues[status];

  return (
    <span
      data-testid="pill"
      className={`inline-flex items-center ${pillColor} rounded-full p-1 px-2 opacity-100`}
    >
      <div
        className="text-center text-sm font-medium leading-5">
        {displayValue}
      </div>
    </span>
  );
};

export default Pill