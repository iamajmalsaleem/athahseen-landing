import React from 'react';
import { CheckCircle2, Users, GraduationCap, MapPin } from 'lucide-react';

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

export default About;
