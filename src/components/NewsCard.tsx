interface NewsCardProps {
  title: string;
  source: string;
  time: string;
  imageUrl: string;
}

const NewsCard = ({ title, source, time, imageUrl }: NewsCardProps) => {
  return (
    <div className="glass-dark rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{source}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;