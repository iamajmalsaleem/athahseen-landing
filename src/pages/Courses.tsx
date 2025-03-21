import React from 'react';
import { Clock, GraduationCap, CheckCircle2 } from 'lucide-react';

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
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
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
              <button className="w-full bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
