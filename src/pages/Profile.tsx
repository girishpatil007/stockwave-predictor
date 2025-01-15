import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, Lock, UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  
  // Mock user data - in a real app, this would come from your auth system
  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
  };

  const handleLogout = () => {
    // Add your logout logic here
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <UserCircle className="w-24 h-24 mx-auto mb-4 text-primary" />
          <h1 className="text-3xl font-bold">Profile</h1>
        </div>

        <div className="space-y-6 bg-card p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
            <User className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{user.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
            <UserCircle className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Username</p>
              <p className="font-medium">{user.username}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
            <Lock className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Password</p>
              <p className="font-medium">••••••••</p>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-full"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
            <Link to="/" className="w-full">
              <Button variant="outline" className="w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;