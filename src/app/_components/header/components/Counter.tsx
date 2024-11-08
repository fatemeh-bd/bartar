export const Counter = ({ value }: { value: number }) => {
    return (
      <span className="absolute -top-1 left-0 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-primary text-white font-bold text-xs">
          {value}
        </span>
      </span>
    );
  };
  