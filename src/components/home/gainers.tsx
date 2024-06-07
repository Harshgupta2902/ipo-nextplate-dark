interface Stock {
  sid: string;
  name: string;
  price: number;
  change: number;
}

interface Props {
  gainers: Stock[];
}

const GainersCard: React.FC<Props> = ({ gainers }) => {
  return (
    <div className="row p-8">
      {gainers.map((stock, index) => (
        <div className="col-lg-5">
          <div
            className="inline-flex flex-wrap items-center sm:gap-4 md:gap-10 group"
            style={{ borderBottomWidth: "thin", borderColor: "grey" }}
          >
            <img
              src={`https://assets.tickertape.in/stock-logos/${stock.sid}.png`}
              alt="Stock Logo"
              style={{ width: "48px", height: "48px" }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/48x48/EEE/31343C?font=Lora&text=${stock.sid[0]}`;
              }}
            />

            <div className="grid grid-cols-1 stockSid my-6">
              <p className="text-white m-0">{stock.name}</p>
              <p className="text-grey m-0">{stock.sid}</p>
            </div>
            <span className="text-white stockSidPrice">
              ₹{stock.price.toLocaleString("en-IN")}
            </span>
            <span className="text-green">{stock.change.toFixed(2)}%</span>
          </div>
          <div className="" />
        </div>
      ))}
    </div>
  );
};

export default GainersCard;
