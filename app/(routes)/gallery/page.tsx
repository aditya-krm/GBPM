"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "/Temp.jpg",
    alt: "Gallery Image 1",
    category: "Campus",
  },
  {
    id: 2,
    src: "/Temp.jpg",
    alt: "Gallery Image 2",
    category: "Events",
  },
  {
    id: 3,
    src: "/Temp.jpg",
    alt: "Gallery Image 3",
    category: "Students",
  },
  {
    id: 4,
    src: "/Temp.jpg",
    alt: "Gallery Image 4",
    category: "Campus",
  },
  {
    id: 5,
    src: "/Temp.jpg",
    alt: "Gallery Image 5",
    category: "Events",
  },
  {
    id: 6,
    src: "/Temp.jpg",
    alt: "Gallery Image 6",
    category: "Students",
  },
  {
    id: 7,
    src: "/Temp.jpg",
    alt: "Gallery Image 7",
    category: "Campus",
  },
  {
    id: 8,
    src: "/Temp.jpg",
    alt: "Gallery Image 8",
    category: "Events",
  },
  {
    id: 9,
    src: "/Temp.jpg",
    alt: "Gallery Image 9",
    category: "Students",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    src: string;
    alt: string;
    category: string;
  } | null>(null);

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-purple-500">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in-up">
            Our Gallery
          </h1>
          <p className="text-xl text-white text-center animate-fade-in-up animation-delay-300">
            Capturing moments and memories
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-8">
            {["All", "Campus", "Events", "Students"].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="mb-8">
            Visit our campus and experience our vibrant community firsthand.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Visit
          </Button>
        </div>
      </section>
    </div>
  );
}
