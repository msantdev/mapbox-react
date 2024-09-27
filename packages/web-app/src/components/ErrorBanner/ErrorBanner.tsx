const ErrorBanner = ({ message }: { message: string }) => {
    return (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-4 rounded-md shadow-md z-10">
            <p className="font-bold">{message}</p>
        </div>
    );
};

export default ErrorBanner;
