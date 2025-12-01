import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to rotation (-15deg to 0deg when centered)
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const percentage = x / bounds.width;
      videoRef.current.currentTime = percentage * duration;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#130f20] flex items-center justify-center relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8358ff]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#39c6fa]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div 
        ref={containerRef} 
        className="h-screen flex items-center justify-center w-full"
        style={{ perspective: '2000px' }}
      >
        <motion.div
          style={{
            rotateX,
            scale,
            opacity,
          }}
          className="relative w-[90%] max-w-4xl"
        >
          {/* macOS Window Frame with enhanced shadows */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-[0_20px_80px_rgba(131,88,255,0.3),0_0_40px_rgba(57,198,250,0.2)]">
            {/* macOS Title Bar */}
            <div className="bg-gradient-to-b from-gray-700 to-gray-800 px-4 py-3 flex items-center border-b border-gray-600">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer shadow-lg"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer shadow-lg"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer shadow-lg"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-300 text-sm font-medium">Video Player</span>
              </div>
              <div className="w-16"></div>
            </div>

            {/* Video Container */}
           <iframe width="951" height="535" src="https://www.youtube.com/embed/6eZ6QYcMc2c" title="ORN-AI Learning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          {/* Enhanced reflection effect */}
          <div className="absolute inset-x-0 -bottom-40 h-40 bg-gradient-to-b from-[#8358ff]/20 via-[#39c6fa]/10 to-transparent blur-2xl opacity-60 pointer-events-none"></div>
          
          {/* Additional glow around the window */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#8358ff]/10 via-transparent to-[#39c6fa]/10 blur-3xl rounded-xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroVideo;