import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 bg-opacity-70 backdrop-blur-md text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="hover:text-primary transition-colors"
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p>123 School Street, City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@schoolname.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div>
            <Image src="/Temp.jpg" alt="School Logo" width={100} height={100} />
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} School Name. All rights reserved.
          </p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
