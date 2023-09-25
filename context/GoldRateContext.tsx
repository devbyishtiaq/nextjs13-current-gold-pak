"use client";
import { apiBaseUrl } from "@/lib/constants";
import React, { createContext, useContext, useState, useEffect } from "react";

const GoldRateContext = createContext<{
  todayRate: number;
  isLoading: boolean;
  error: string | null;
}>({
  todayRate: 0,
  isLoading: true,
  error: null,
});

export const useGoldRate = () => useContext(GoldRateContext);

type GoldRateProviderProps = {
  children: React.ReactNode;
};

export const GoldRateProvider: React.FC<GoldRateProviderProps> = ({
  children,
}) => {
  const [todayRate, setTodayRate] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoldRate = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/currentgold`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const jsonData = await response.json();
        setTodayRate(jsonData[0].rate);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching gold rate.");
        setIsLoading(false);
      }
    };

    fetchGoldRate();
  }, []);

  return (
    <GoldRateContext.Provider value={{ todayRate, isLoading, error }}>
      {children}
    </GoldRateContext.Provider>
  );
};
