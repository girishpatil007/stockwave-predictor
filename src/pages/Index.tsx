import { useState } from "react";
import MarketTicker from "@/components/MarketTicker";
import SearchBar from "@/components/SearchBar";
import StockCard from "@/components/StockCard";
import NewsCard from "@/components/NewsCard";

const Index = () => {
  const [featuredStocks] = useState([
    {
      symbol: "RELIANCE",
      name: "Reliance Industries",
      price: 2456.75,
      change: 1.25,
      prediction: "buy" as const,
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      price: 3789.90,
      change: -0.50,
      prediction: "hold" as const,
    },
    {
      symbol: "INFY",
      name: "Infosys Limited",
      price: 1567.80,
      change: 2.30,
      prediction: "buy" as const,
    },
  ]);

  const [newsItems] = useState([
    {
      title: "RBI Keeps Repo Rate Unchanged at 6.5% for Sixth Time in a Row",
      source: "Economic Times",
      time: "2 hours ago",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Sensex Hits New All-Time High, Crosses 72,000 Mark",
      source: "Business Standard",
      time: "4 hours ago",
      imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1000",
    },
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Market Ticker */}
      <MarketTicker />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 animate-slide-up">
          <h1 className="text-4xl font-bold">
            Smart Stock Predictions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get AI-powered insights for Indian stock markets. Make informed decisions with real-time data and advanced analytics.
          </p>
        </div>

        {/* Search */}
        <div className="my-8">
          <SearchBar />
        </div>

        {/* Featured Stocks */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Stocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredStocks.map((stock, index) => (
              <StockCard key={index} {...stock} />
            ))}
          </div>
        </section>

        {/* Market News */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Market News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsItems.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;