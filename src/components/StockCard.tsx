import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  prediction: "buy" | "sell" | "hold";
}

const StockCard = ({ symbol, name, price, change, prediction }: StockCardProps) => {
  const getPredictionColor = (pred: string) => {
    switch (pred) {
      case "buy":
        return "text-success";
      case "sell":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="stock-card">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-lg">{symbol}</h3>
          <p className="text-sm text-muted-foreground">{name}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getPredictionColor(prediction)} bg-secondary`}>
          {prediction.toUpperCase()}
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
        <span className="text-xl font-bold">₹{price.toLocaleString()}</span>
        <span
          className={`flex items-center ${
            change >= 0 ? "text-success" : "text-destructive"
          }`}
        >
          {change >= 0 ? (
            <ArrowUpIcon className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 mr-1" />
          )}
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  );
};

export default StockCard;