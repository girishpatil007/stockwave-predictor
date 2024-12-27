import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <input
        type="text"
        placeholder="Search stocks..."
        className="w-full h-12 pl-10 pr-4 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;