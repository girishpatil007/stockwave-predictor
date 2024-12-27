import { useState } from "react";
import MarketTicker from "@/components/MarketTicker";
import SearchBar from "@/components/SearchBar";
import StockCard from "@/components/StockCard";
import NewsCard from "@/components/NewsCard";
import PredictionResults from "@/components/PredictionResults";

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

  // Example prediction data - in a real app, this would come from an API
  const [predictionData] = useState({
    symbol: "RELIANCE",
    predictions: [
      { date: "2024-01", price: 2400 },
      { date: "2024-02", price: 2450 },
      { date: "2024-03", price: 2500 },
      { date: "2024-04", price: 2480 },
      { date: "2024-05", price: 2520 },
      { date: "2024-06", price: 2600 },
    ],
    trend: "up" as const,
    insight: "Based on our comprehensive analysis of Reliance Industries (RELIANCE), the stock shows strong potential for growth in the coming months. The company's robust fundamentals, including steady revenue growth and strategic investments in digital and retail segments, support a bullish outlook. Market sentiment remains positive, backed by institutional investor confidence and stable macroeconomic factors. Technical indicators suggest a continued upward trend, with key resistance levels likely to be tested. However, investors should monitor global oil prices and regulatory changes that could impact the company's petrochemical business. The diversified business model and strong leadership position in multiple sectors provide a safety net against market volatility. Our AI models predict a steady appreciation in stock value, with potential for 8-10% growth over the next quarter, subject to market conditions and execution of planned initiatives.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketTicker />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4 animate-slide-up">
          <h1 className="text-4xl font-bold">
            Smart Stock Predictions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get AI-powered insights for Indian stock markets. Make informed decisions with real-time data and advanced analytics.
          </p>
        </div>

        <div className="my-8">
          <SearchBar />
        </div>

        <PredictionResults stockData={predictionData} />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Stocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredStocks.map((stock, index) => (
              <StockCard key={index} {...stock} />
            ))}
          </div>
        </section>

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
