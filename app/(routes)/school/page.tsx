import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function School() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg"
          alt="School Campus"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in-up">
            Our School
          </h1>
          <p className="text-xl text-white text-center animate-fade-in-up animation-delay-300">
            A place of learning, growth, and discovery
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Academic Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Elementary", "Middle School", "High School"].map(
              (program, index) => (
                <Card
                  key={index}
                  className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {program}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Brief description of the {program.toLowerCase()} program
                      and its key features.
                    </p>
                    <Button className="mt-4" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Library",
              "Science Labs",
              "Computer Lab",
              "Sports Complex",
              "Art Studio",
              "Auditorium",
            ].map((facility, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <Image
                    src={`/placeholder.svg?text=${facility}`}
                    alt={facility}
                    width={300}
                    height={200}
                    className="rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">{facility}</h3>
                  <p>
                    Brief description of the {facility.toLowerCase()} and its
                    importance in student learning.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Extracurricular Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Sports Teams",
              "Music and Arts",
              "Debate Club",
              "Science Olympiad",
            ].map((activity, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {activity}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Description of the {activity.toLowerCase()} and how it
                    contributes to student development.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Calendar */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            School Calendar
          </h2>
          <div className="bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <p className="text-center mb-4">
              View important dates, events, and holidays for the current
              academic year.
            </p>
            <div className="flex justify-center">
              <Button size="lg">View Full Calendar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our School</h2>
          <p className="mb-8">
            Schedule a campus tour or attend an open house to learn more about
            our programs and facilities.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              Schedule a Tour
            </Button>
            <Button size="lg" variant="outline">
              Upcoming Open Houses
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
