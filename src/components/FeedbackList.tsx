import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";

interface FeedbackEntry {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const FeedbackList = () => {
  const [feedback, setFeedback] = useState<FeedbackEntry[]>([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
    setFeedback(storedFeedback);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>
      {feedback.map((entry) => (
        <Card key={entry.id} className="p-4 bg-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">{entry.name}</h3>
              <p className="text-sm text-muted-foreground">{entry.email}</p>
            </div>
            <span className="text-xs text-muted-foreground">
              {new Date(entry.timestamp).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm mt-2">{entry.message}</p>
        </Card>
      ))}
      {feedback.length === 0 && (
        <p className="text-muted-foreground text-center py-4">No feedback submitted yet.</p>
      )}
    </div>
  );
};

export default FeedbackList;