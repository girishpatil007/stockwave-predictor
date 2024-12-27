import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeFrame, setTimeFrame] = useState("1w");
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, MMMM yyyy");

  const handlePrediction = () => {
    // Prediction logic will be implemented here
    console.log("Predicting for:", searchQuery, "Time frame:", timeFrame);
  };

  return (
    <div className="space-y-4">
      <div className="text-right text-sm text-muted-foreground">
        {formattedDate}
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search stocks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-10 pr-4 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
          />
        </div>
        <Select
          value={timeFrame}
          onValueChange={setTimeFrame}
        >
          <SelectTrigger className="w-[140px] h-12 bg-secondary">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1w">1 Week</SelectItem>
            <SelectItem value="1m">1 Month</SelectItem>
            <SelectItem value="3m">3 Months</SelectItem>
            <SelectItem value="6m">6 Months</SelectItem>
            <SelectItem value="1y">1 Year</SelectItem>
          </SelectContent>
        </Select>
        <Button 
          onClick={handlePrediction}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 h-12"
        >
          Predict Stock Price
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;