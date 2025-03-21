import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users, ChevronRight, Star, PlayCircle, CheckCircle2, ChevronLeft } from 'lucide-react';

const Home = () => (
  <>
    {/* Hero Section */}
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}>
      <div className="container mx-auto max-w-6xl bg-white bg-opacity-75 p-4 md:p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              Learn Quran Online with Expert Teachers
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Connect with qualified Quran teachers for personalized one-on-one lessons from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-emerald-600 text-white px-6 py-3 text-sm md:text-base rounded-full hover:bg-emerald-700 transition flex items-center justify-center">
                Get Started <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
              <a 
                href="https://athahseen.com/brochure"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 text-sm md:text-base rounded-full hover:border-emerald-600 hover:text-emerald-600 transition flex items-center justify-center"
              >
                Brochure <PlayCircle className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1596125160970-6f02eeba00d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Quran Education"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10K+</h3>
            <p className="text-gray-600">Active Students</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Certified Teachers</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5K+</h3>
            <p className="text-gray-600">Graduates</p>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Why Choose Athahseen?</h2>
          <p className="text-lg md:text-xl text-gray-600">We provide the best online Quran learning experience</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Qualified Teachers",
              description: "Learn from certified Quran teachers with ijazah in Quran recitation"
            },
            {
              title: "Flexible Schedule",
              description: "Choose your preferred time for one-on-one online classes"
            },
            {
              title: "Personalized Learning",
              description: "Custom curriculum tailored to your learning pace and goals"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Courses */}
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Featured Courses</h2>
          <p className="text-lg md:text-xl text-gray-600">Start your journey with our most popular programs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Basic Quran Reading",
              description: "Learn to read Quran with proper Tajweed",
              image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Quran Memorization",
              description: "Structured program for Hifz with expert guidance",
              image: "https://images.unsplash.com/photo-1588344093894-84efcf2720f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Tajweed Course",
              description: "Master the rules of Quranic recitation",
              image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
          ].map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/courses"
            className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition inline-flex items-center"
          >
            View All Courses <ChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>

    {/* Video Testimonials */}
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Student Success Stories</h2>
          <p className="text-lg md:text-xl text-gray-600">Hear from our students about their learning journey</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Sarah Ahmed",
              role: "Quran Memorization Student",
              video: "https://www.youtube.com/embed/gvqPqcV97yQ",
              quote: "The one-on-one attention and flexible schedule made it possible for me to memorize the Quran while working full-time."
            },
            {
              name: "Mohammed Khan",
              role: "Tajweed Course Graduate",
              video: "https://www.youtube.com/embed/BbXM8vJrzv0",
              quote: "The interactive lessons and patient teachers helped me perfect my Quranic recitation."
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <iframe
                  src={testimonial.video}
                  title={`Testimonial from ${testimonial.name}`}
                  className="w-full h-64 object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Student Reviews */}
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">What Our Students Say</h2>
          <p className="text-lg md:text-xl text-gray-600">Reviews from our global community</p>
        </div>
        <ReviewsCarousel />
      </div>
    </section>
  </>
);

const reviews = [
  {
    name: "Aisha Rahman",
    location: "KSA",
    rating: 5,
    review: "The quality of teaching is exceptional. I've improved my recitation significantly in just a few months."
  },
  {
    name: "Yusuf Ali",
    location: "India",
    rating: 5,
    review: "Flexible timing and professional teachers make this the perfect solution for busy professionals."
  },
  {
    name: "Fatima Hassan",
    location: "Qatar",
    rating: 5,
    review: "The personalized attention and structured curriculum helped me achieve my goals faster than expected."
  },
  {
    name: "Ahmad Khan",
    location: "UAE",
    rating: 5,
    review: "The teachers are very patient and knowledgeable. My children love their Quran classes."
  },
  {
    name: "Zainab Omar",
    location: "UK",
    rating: 5,
    review: "Being able to learn from home has made it possible for me to consistently attend classes."
  }
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (reviews.length - itemsPerSlide + 1)
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, reviews.length - itemsPerSlide)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden px-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
        >
          {reviews.map((feedback, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{feedback.review}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{feedback.name}</h4>
                  <p className="text-gray-600">{feedback.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-emerald-600 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={currentIndex >= reviews.length - itemsPerSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-emerald-600 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(reviews.length - itemsPerSlide + 1)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === idx ? 'bg-emerald-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
