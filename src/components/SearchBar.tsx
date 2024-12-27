import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { format } from "date-fns";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, MMMM yyyy");

  const handlePrediction = () => {
    // Prediction logic will be implemented here
    console.log("Predicting for:", searchQuery);
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
        <Button 
          onClick={handlePrediction}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
        >
          Predict Stock Price
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;