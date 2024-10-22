"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Search,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white bg-opacity-70 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-1" /> +1234567890
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" /> info@schoolname.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Main Navbar */}
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="School Logo"
                width={50}
                height={50}
                className="w-12 h-12 rounded-full mr-2"
              />
              <span className="text-xl font-bold hidden md:block">
                Gour Banga Public Mission
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/parent"
                className="hover:text-primary transition-colors"
              >
                Parent
              </Link>
              <Link
                href="/school"
                className="hover:text-primary transition-colors"
              >
                School
              </Link>
              <Link
                href="/gallery"
                className="hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:block">
                <Link href="/admin-login">Admin</Link>
              </Button>
              {/* <Search className="size-6 cursor-pointer hidden md:block" /> */}
              <button className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md">
              <div className="flex flex-col space-y-4 py-4">
                <Link
                  href="/"
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/parent"
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Parent
                </Link>
                <Link
                  href="/school"
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  School
                </Link>
                <Link
                  href="/gallery"
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <div className="px-4 py-2">
                  <Button variant="outline" className="w-full">
                    <Link href="/parent-login">Login</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
