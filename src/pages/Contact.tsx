import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

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

export default Contact;
