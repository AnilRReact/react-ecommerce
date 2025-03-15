import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to Dashboard, {user?.email}</h1>
    </div>
  );
};

export default Dashboard;
