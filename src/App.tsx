import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { BookOpen, Book, GraduationCap, Users, ChevronRight, Star, PlayCircle, CheckCircle2, Mail, Phone, MapPin, Clock } from 'lucide-react';
import React from 'react';

// Page Components
const Home = () => (
  <>
    {/* Hero Section */}
    <section className="pt-24 pb-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}>
      <div className="container mx-auto max-w-6xl bg-white bg-opacity-75 p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Learn Quran Online with Expert Teachers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with qualified Quran teachers for personalized one-on-one lessons from the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition flex items-center">
                Book Free Trial <ChevronRight className="ml-2" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition flex items-center">
                Watch Demo <PlayCircle className="ml-2" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1596125160970-6f02eeba00d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
            <h3 className="text-4xl font-bold text-gray-900 mb-2">10K+</h3>
            <p className="text-gray-600">Active Students</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Certified Teachers</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">5K+</h3>
            <p className="text-gray-600">Graduates</p>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Athahseen?</h2>
          <p className="text-xl text-gray-600">We provide the best online Quran learning experience</p>
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

    {/* Featured Courses Section */}
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600">Start your journey with our most popular programs</p>
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
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {/* <button className="flex bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button 
            onClick={() => setCurrentPage('courses')}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition inline-flex items-center"
          >
            View All Courses <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>

    {/* Video Testimonials */}
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600">Hear from our students about their learning journey</p>
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

    {/* Student Feedback */}
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600">Reviews from our global community</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
            }
          ].map((feedback, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
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
          ))}
        </div>
      </div>
    </section>
  </>
);

const Courses = () => (
  <section className="pt-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Courses</h1>
        <p className="text-xl text-gray-600">Discover our range of specialized Quran learning programs</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Quran Reading",
            description: "Learn to read the Quran with proper Tajweed rules",
            duration: "6 months",
            level: "Beginner",
            features: ["Basic Quranic Arabic", "Pronunciation Rules", "Letter Recognition", "Weekly Assessments"],
            image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Quran Memorization",
            description: "Structured program for Hifz with expert guidance",
            duration: "24 months",
            level: "Intermediate",
            features: ["Memorization Techniques", "Revision Methods", "Tajweed Rules", "Progress Tracking"],
            image: "https://images.unsplash.com/photo-1588344093894-84efcf2720f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Tajweed Course",
            description: "Master the rules of Quranic recitation",
            duration: "12 months",
            level: "Advanced",
            features: ["Advanced Pronunciation", "Makharij Al-Huruf", "Recitation Rules", "Certification"],
            image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ].map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img 
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-emerald-100 text-emerald-600 text-sm px-3 py-1 rounded-full">Featured</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-emerald-600 mr-2" />
                  <span className="text-sm text-gray-600">Duration: {course.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-4 w-4 text-emerald-600 mr-2" />
                  <span className="text-sm text-gray-600">Level: {course.level}</span>
                </div>
              </div>
              <ul className="mb-4 space-y-2">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center mt-6">
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="pt-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Athahseen Academy</h1>
        <p className="text-xl text-gray-600">Dedicated to spreading Quranic education worldwide</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Athahseen, our mission is to make authentic Quranic education accessible to Muslims worldwide. We believe that learning the Quran should be possible for everyone, regardless of their location or schedule.
          </p>
          <p className="text-gray-600 mb-6">
            Founded in 2020, we've helped thousands of students connect with qualified Quran teachers and embark on their journey of learning the Holy Quran.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1626779828783-fac53ee0fabd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="About Athahseen"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-2 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900">Excellence</h4>
                <p className="text-gray-600">Commitment to providing the highest quality of Quranic education</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-2 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900">Authenticity</h4>
                <p className="text-gray-600">Ensuring authentic teaching methods and qualified instructors</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-2 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900">Accessibility</h4>
                <p className="text-gray-600">Making Quranic education available to everyone</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Teachers</h3>
          <p className="text-gray-600 mb-4">
            All our teachers are certified with:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="text-gray-600">Ijazah in Quran recitation</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="text-gray-600">Teaching experience</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="text-gray-600">Native Arabic speakers</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="text-gray-600">Online teaching expertise</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Impact</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center mb-2">
                <Users className="h-6 w-6 text-emerald-600 mr-2" />
                <span className="font-bold text-gray-900">10,000+ Students</span>
              </div>
              <p className="text-gray-600">Active learners worldwide</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <GraduationCap className="h-6 w-6 text-emerald-600 mr-2" />
                <span className="font-bold text-gray-900">5,000+ Graduates</span>
              </div>
              <p className="text-gray-600">Completed our programs</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
                <span className="font-bold text-gray-900">50+ Countries</span>
              </div>
              <p className="text-gray-600">Global reach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="pt-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">Get in touch with our team for any inquiries</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@athahseen.com</p>
                  <p className="text-gray-600">support@athahseen.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 956 123 4567</p>
                  <p className="text-gray-600">+91 854 987 6543</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Hours of Operation</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 10:00 PM IST</p>
                  <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 8:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How do online classes work?</h3>
                <p className="text-gray-600">Classes are conducted via video call using our secure platform. You'll need a stable internet connection and a device with a camera and microphone.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What is the class duration?</h3>
                <p className="text-gray-600">Standard classes are 45 minutes long, scheduled at your preferred time slot.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How do I get started?</h3>
                <p className="text-gray-600">Book a free trial class through our website, and our team will contact you to arrange your first session.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const Navigation = () => {
    const location = useLocation();
    const currentPage = location.pathname.substring(1) || 'home';

    return (
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/AthahseenLogo.png" alt="Athahseen Logo" className="h-16 w-auto object-contain" />
            <span className="text-2xl font-bold text-gray-800">Athahseen Academy</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/courses"
              className={`text-gray-600 hover:text-emerald-600 ${currentPage === 'courses' ? 'text-emerald-600' : ''}`}
            >
              Courses
            </Link>
            <Link 
              to="/about"
              className={`text-gray-600 hover:text-emerald-600 ${currentPage === 'about' ? 'text-emerald-600' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`text-gray-600 hover:text-emerald-600 ${currentPage === 'contact' ? 'text-emerald-600' : ''}`}
            >
              Contact
            </Link>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
              Start Learning
            </button>
          </div>
        </div>
      </nav>
    );
  };

  const Footer = () => {
    const navigate = useNavigate();
    
    return (
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="/AthahseenLogo.png" alt="Athahseen Logo" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold">Athahseen</span>
              </div>
              <p className="text-gray-400">Empowering Muslims worldwide with quality Quran education online.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/courses" className="text-gray-400 hover:text-white">Programs</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to receive updates on new courses and features.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button className="bg-emerald-600 px-6 py-2 rounded-r-full hover:bg-emerald-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Athahseen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
function setCurrentPage(page: string): void {
  const navigate = useNavigate();
  navigate(`/${page}`);
}
