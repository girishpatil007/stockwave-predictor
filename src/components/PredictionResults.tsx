import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface PredictionResultsProps {
  stockData?: {
    symbol: string;
    predictions: Array<{
      date: string;
      price: number;
    }>;
    trend: "up" | "down";
    insight: string;
  };
}

const PredictionResults = ({ stockData }: PredictionResultsProps) => {
  if (!stockData) return null;

  return (
    <Card className="w-full mt-8 bg-gradient-to-b from-background/80 to-background border-none shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{stockData.symbol} Price Prediction</span>
          <span className={`flex items-center ${
            stockData.trend === "up" ? "text-success" : "text-destructive"
          }`}>
            {stockData.trend === "up" ? (
              <ArrowUpIcon className="w-5 h-5 mr-1" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 mr-1" />
            )}
            Trend
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stockData.predictions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke={stockData.trend === "up" ? "#22c55e" : "#ef4444"}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Prediction Insight</h3>
          <p className="text-muted-foreground leading-relaxed">
            {stockData.insight}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionResults;