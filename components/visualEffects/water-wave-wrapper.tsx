"use client"
import React, { ReactNode } from "react";
import WaterWave from "react-water-wave";

interface WaterWaveWrapperProps {
  imageUrl: string;
  dropRadius: string;
  perturbance: string;
  resolution: string;
  children: () => ReactNode;
}

export default function WaterWaveWrapper({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children,
}: WaterWaveWrapperProps) {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
}
