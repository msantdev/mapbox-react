export const getMarkerColor = (status: string) => {
    switch (status) {
        case "AVAILABLE":
            return "bg-yellow-default";
        case "BOOKED":
            return "bg-black-primary";
        case "MAINTENANCE":
            return "bg-red-500";
        default:
            return "bg-gray-500";
    }
};