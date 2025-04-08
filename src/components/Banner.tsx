"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface BannerProps {
  imageUrl: string;
  videoId: string;
  altText: string;
  transitionDelay?: number; // in milliseconds
}

export default function Banner({
  imageUrl,
  videoId,
  altText,
  transitionDelay = 2000,
}: BannerProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [userTriggered, setUserTriggered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle automatic transition after delay
  useEffect(() => {
    if (imageLoaded && !userTriggered) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, transitionDelay);

      return () => clearTimeout(timer);
    }
  }, [imageLoaded, transitionDelay, userTriggered]);

  // Handle manual play button click
  const handlePlayClick = () => {
    setShowVideo(true);
    setUserTriggered(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-lg bg-gray-100 h-(--banner-height)"
    >
      {/* Image Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showVideo ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover"
            priority
            onLoad={() => setImageLoaded(true)}
          />

          {/* Play button overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={handlePlayClick}
          >
            <div className="bg-black/30 p-4 rounded-full transition-transform hover:scale-110">
              <Play size={48} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000  ${
          showVideo ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${
            showVideo ? 1 : 0
          }&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&loop=1&playlist=${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
