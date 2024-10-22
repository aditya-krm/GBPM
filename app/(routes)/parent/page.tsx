import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Parent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-green-500">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in-up">
            Parent Resources
          </h1>
          <p className="text-xl text-white text-center animate-fade-in-up animation-delay-300">
            Supporting your child's educational journey
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Parent Guidelines",
              "Pay Your Dues",
              "Home Task",
              "Attendance",
            ].map((item, index) => (
              <Link
                href={`/parent/${item.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
              >
                <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-center">
                      {item}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Portal */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Parent Portal</h2>
          <div className="bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <p className="mb-4 text-center">
              Access your child's academic information, attendance records, and
              more through our secure Parent Portal.
            </p>
            <div className="flex justify-center">
              <Button size="lg">Login to Parent Portal</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Stay Connected
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Newsletter", "Parent-Teacher Meetings", "School App"].map(
              (item, index) => (
                <Card
                  key={index}
                  className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-center">
                      {item}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center">
                      Brief description of the communication channel and its
                      importance.
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
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
                    information to common parent inquiries.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Additional Support?</h2>
          <p className="mb-8">
            Our team is here to help you with any questions or concerns you may
            have.
          </p>
          <Button size="lg" variant="secondary">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
