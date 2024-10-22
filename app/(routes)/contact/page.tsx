import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-blue-500">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl text-white text-center animate-fade-in-up animation-delay-300">
            We're here to help and answer any question you might have
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2" /> Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>+1 (123) 456-7890</p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2" /> Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>info@schoolname.com</p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2" /> Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>123 School Street, City, State 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your Message" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.6142963349603!2d88.11761207528632!3d25.001929677837186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafc3063bced71%3A0xb3ba2f1892915957!2sGour%20Banga%20Public%20Mission!5e1!3m2!1sen!2sin!4v1729587676033!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Question {item}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Answer to the frequently asked question. This provides quick
                    information to common inquiries.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
