import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/Temp.jpg"
          alt="School Campus"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
              Building the Future, One Child at a Time
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">
              Empowering students with knowledge and values
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="animate-fade-in-up animation-delay-600 transition-transform hover:scale-110"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="animate-fade-in-up animation-delay-900 transition-transform hover:scale-110"
              >
                Take a Tour
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-auto transform -translate-x-1/2 flex space-x-4 animate-bounce">
          <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
            #1 in Academics
          </span>
          <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
            25+ Years of Excellence
          </span>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Welcome to School Name
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Our school is dedicated to nurturing young minds, fostering
            creativity, and building a strong foundation for future leaders. We
            believe in holistic education that goes beyond textbooks.
          </p>
          <div className="text-center">
            <Button>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Consistently high performance in board exams and competitive
                  tests.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Modern Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  State-of-the-art labs, library, and smart classrooms for
                  enhanced learning.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Sports & Extra-curricular</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Wide range of sports and activities for all-round development.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Regular outreach programs and community service initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events & News Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Events & News
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="flex-shrink-0 w-64 bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle>Event Title {item}</CardTitle>
                  <CardDescription>Date: Jan {item}, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Short description of the event goes here.</p>
                  <Button className="mt-4" variant="outline">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button>View All Events</Button>
          </div>
        </div>
      </section>

      {/* Admissions Information Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Join Our School Community
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            We're now accepting applications for the upcoming academic year.
            Learn about our admission process and take the first step towards a
            bright future for your child.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary">Admission Process</Button>
            <Button variant="secondary">Apply Now</Button>
          </div>
        </div>
      </section>

      {/* Virtual Tour & Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore Our Campus Virtually
          </h2>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={`/Temp.jpg`}
                  alt={`Gallery Image ${item}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Parents and Students Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={`/Temp.jpg`}
                      alt={`User ${item}`}
                      width={50}
                      height={50}
                      className="size-12 rounded-full"
                    />
                    <div>
                      <CardTitle>Parent/Student Name</CardTitle>
                      <CardDescription>Parent/Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p>Happy Students</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p>Pass Rate</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Sports and Clubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Take the Next Step?
          </h2>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Contact Us</Button>
            <Button size="lg" variant="outline">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
