import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg"
          alt="School Building"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in-up">
            About Our School
          </h1>
          <p className="text-xl text-white text-center animate-fade-in-up animation-delay-300">
            Nurturing minds, shaping futures
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To provide a nurturing environment that fosters academic
                  excellence, personal growth, and social responsibility,
                  preparing students to become lifelong learners and responsible
                  global citizens.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To be a leading educational institution that inspires and
                  empowers students to reach their full potential, contributing
                  positively to society and excelling in their chosen paths.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <p className="mb-4">
              Founded in 1995, our school has grown from a small local
              institution to a renowned center of learning. Over the years, we
              have consistently adapted our curriculum and facilities to meet
              the changing needs of our students and the evolving educational
              landscape.
            </p>
            <p>
              Today, we pride ourselves on our state-of-the-art facilities,
              dedicated faculty, and a diverse student body that brings together
              various cultures and perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="bg-white bg-opacity-70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <Image
                    src={`/Temp.jpg`}
                    alt={`Leader ${item}`}
                    width={200}
                    height={200}
                    className="w-36 h-36 rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-xl font-bold text-center">
                    John Doe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Position</p>
                  <p className="text-center mt-2">
                    Brief description of the leader's role and experience.
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
          <h2 className="text-3xl font-bold mb-4">Join Our School Community</h2>
          <p className="mb-8">
            Experience the difference at our school. Schedule a visit or apply
            now!
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              Schedule a Visit
            </Button>
            <Button size="lg" variant="outline">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
