import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Cpu, Shield, Zap, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import ClientLogos from '../components/ClientLogos';
import AnimatedSection from '../components/AnimatedSection';
import PageTransition from '../components/PageTransition';

const HomePage = () => {
  const services = [
    {
      id: 'industrial-automation',
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      title: "Industrial Automation",
      description: "Complete automation solutions for manufacturing processes, including PLC programming, SCADA systems, and HMI design."
    },
    {
      id: 'electrical-engineering',
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: "Electrical Engineering",
      description: "Comprehensive electrical system design, installation, and maintenance for industrial and commercial facilities."
    },
    {
      id: 'mechanical-systems',
      icon: <Activity className="w-10 h-10 text-blue-600" />,
      title: "Mechanical Systems",
      description: "Design and implementation of mechanical systems, including pneumatic and hydraulic systems for industrial applications."
    },
    {
      id: 'preventive-maintenance',
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Preventive Maintenance",
      description: "Regular inspection and maintenance programs to ensure optimal performance and prevent costly downtime."
    }
  ];

  const testimonials = [
    {
      name: "John Anderson",
      company: "Precision Manufacturing Inc.",
      content: "Delta Elmech Systems transformed our production line with their automation solutions. Efficiency increased by 35% within the first month.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Sarah Johnson",
      company: "TechnoFab Solutions",
      content: "Their electrical engineering team designed a system that reduced our energy consumption by 28%. Highly professional and knowledgeable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Michael Chen",
      company: "Global Industries",
      content: "The preventive maintenance program implemented by Delta Elmech has virtually eliminated unplanned downtime in our facility.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const benefits = [
    "Increased operational efficiency",
    "Reduced maintenance costs",
    "Enhanced system reliability",
    "Improved workplace safety",
    "Energy consumption optimization",
    "Extended equipment lifespan"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-white text-gray-900 pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 md:pr-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl font-bold mb-6 leading-tight">Engineering Excellence for <span className="text-blue-600">Industrial Solutions</span></h1>
                <p className="text-xl mb-8 text-gray-600">Delta Elmech Systems provides cutting-edge automation, electrical, and mechanical solutions for modern industrial challenges.</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 flex items-center">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link to="/services" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-md transition duration-300">
                    Explore Services
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 mt-12 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22731ce444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Industrial automation equipment" 
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <ClientLogos />

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <p className="text-blue-600 font-semibold mb-2">OUR SERVICES</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Engineering Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of engineering services designed to optimize your industrial operations and increase productivity.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <Link to={`/services/${service.id}`}>
                    <ServiceCard 
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                View All Services <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="md:w-1/2">
                <p className="text-blue-600 font-semibold mb-2">ABOUT US</p>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Innovative Solutions for Complex Industrial Challenges</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2005, Delta Elmech Systems has established itself as a leader in providing integrated engineering solutions for industrial clients across multiple sectors. Our team of experienced engineers and technicians is dedicated to delivering innovative, efficient, and reliable systems.
                </p>
                <p className="text-gray-600 mb-6">
                  We combine expertise in automation, electrical engineering, and mechanical systems to create comprehensive solutions tailored to each client's specific needs. Our commitment to quality and excellence has earned us the trust of industry leaders worldwide.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-4xl font-bold text-blue-600">15+</p>
                    <p className="text-gray-600">Years of Experience</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-4xl font-bold text-blue-600">500+</p>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-4xl font-bold text-blue-600">98%</p>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-4xl font-bold text-blue-600">24/7</p>
                    <p className="text-gray-600">Technical Support</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection className="md:w-1/2" delay={0.2}>
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9d15482aec9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Industrial automation equipment" 
                  className="rounded-lg shadow-xl"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <p className="text-blue-200 font-semibold mb-2">WHY CHOOSE US</p>
              <h2 className="text-3xl font-bold mb-4">Benefits of Working With Us</h2>
              <p className="max-w-2xl mx-auto text-blue-100">
                Our solutions are designed to deliver measurable improvements to your operations, efficiency, and bottom line.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <p className="text-blue-600 font-semibold mb-2">OUR WORK</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore some of our recent projects that showcase our expertise and commitment to excellence.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1565951707508-6937a61a0c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Automotive manufacturing plant automation" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Automotive Manufacturing Plant Automation</h3>
                    <p className="text-gray-600 mb-4">Complete redesign and automation of assembly line processes, resulting in 40% increased production capacity.</p>
                    <a href="#" className="text-blue-600 font-semibold flex items-center">
                      View Case Study <ChevronRight className="ml-1 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Power distribution system" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Industrial Power Distribution System</h3>
                    <p className="text-gray-600 mb-4">Design and implementation of a smart power distribution system for a large manufacturing facility.</p>
                    <a href="#" className="text-blue-600 font-semibold flex items-center">
                      View Case Study <ChevronRight className="ml-1 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1581093458791-9d15482aec9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="SCADA system implementation" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">SCADA System Implementation</h3>
                    <p className="text-gray-600 mb-4">Development and deployment of a comprehensive SCADA system for real-time monitoring and control.</p>
                    <a href="#" className="text-blue-600 font-semibold flex items-center">
                      View Case Study <ChevronRight className="ml-1 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="bg-blue-600 rounded-2xl p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industrial Operations?</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  Contact us today to discuss how our engineering solutions can help optimize your processes and increase productivity.
                </p>
                <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition duration-300 inline-block">
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <p className="text-blue-600 font-semibold mb-2">TESTIMONIALS</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with Delta Elmech Systems.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <TestimonialCard 
                    name={testimonial.name}
                    company={testimonial.company}
                    content={testimonial.content}
                    image={testimonial.image}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default HomePage;