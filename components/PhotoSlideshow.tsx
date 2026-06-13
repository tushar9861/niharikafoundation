'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

export function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Ceremony photos from public directory
  const photos = [
    { src: '/ceremony-gallery/1.jpg', caption: 'Opening Ceremony - Medha Samman 2026' },
    { src: '/ceremony-gallery/2.jpg', caption: 'Chief Guest Address' },
    { src: '/ceremony-gallery/3.jpg', caption: 'Scholarship Distribution' },
    { src: '/ceremony-gallery/4.jpg', caption: 'Student Felicitation' },
    { src: '/ceremony-gallery/5.jpg', caption: 'Award Presentation' },
    { src: '/ceremony-gallery/6.jpg', caption: 'Founder with Scholars' },
    { src: '/ceremony-gallery/7.jpg', caption: 'Group Photo' },
    { src: '/ceremony-gallery/8.jpg', caption: 'Student Excellence' },
    { src: '/ceremony-gallery/9.jpg', caption: 'Community Celebration' },
    { src: '/ceremony-gallery/10.jpg', caption: 'Mentorship Moment' },
    { src: '/ceremony-gallery/11.jpg', caption: 'Achievement Recognition' },
    { src: '/ceremony-gallery/12.jpg', caption: 'Future Leaders' },
    { src: '/ceremony-gallery/13.jpg', caption: 'Educational Impact' },
    { src: '/ceremony-gallery/14.jpg', caption: 'Success Stories' },
    { src: '/ceremony-gallery/15.jpg', caption: 'Together We Rise' },
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
      setImageLoaded(false);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setImageLoaded(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setImageLoaded(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setImageLoaded(false);
  };

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 animate-fadeIn">
            Moments of Excellence
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Experience the energy and emotion from Medha Samman 2026 - where 700+ students were recognized for their academic excellence
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div className="relative group">
          {/* Image Container with Cinematic Effect */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video bg-gray-800">
            {/* Current Image with Fade Animation */}
            <div className="relative w-full h-full">
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].caption}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Loading State */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 animate-pulse" />
              )}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Caption at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-8 py-12">
                <p className="text-white text-2xl font-bold">
                  {photos[currentIndex].caption}
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  {currentIndex + 1} of {photos.length}
                </p>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Live Moment
              </div>
            </div>

            {/* Left Arrow - Slide Transition */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-red-600 text-white rounded-full p-3 transition transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Arrow - Slide Transition */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-red-600 text-white rounded-full p-3 transition transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="absolute bottom-4 right-4 z-10 bg-white/20 hover:bg-red-600 text-white rounded-full p-3 transition transform hover:scale-110"
              aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isAutoPlay ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-4 px-2">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition transform cursor-pointer group/thumb ${
                  index === currentIndex
                    ? 'ring-4 ring-red-600 scale-105'
                    : 'ring-2 ring-gray-700 hover:ring-red-600 hover:scale-105'
                }`}
              >
                <img
                  src={photo.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition flex items-center justify-center">
                  <div className="text-white text-xs font-bold text-center px-1">
                    {index + 1}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="mt-6 flex justify-center gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-red-600 w-8 h-3'
                    : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-8 grid grid-cols-3 gap-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6">
            <div className="text-center">
              <div className="text-3xl font-black text-red-600">700+</div>
              <p className="text-gray-400 text-sm mt-2">Scholars Honored</p>
            </div>
            <div className="text-center border-l border-r border-gray-700">
              <div className="text-3xl font-black text-red-600">15</div>
              <p className="text-gray-400 text-sm mt-2">Photo Moments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-red-600">May 24</div>
              <p className="text-gray-400 text-sm mt-2">2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
