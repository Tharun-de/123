import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Cpu, Shield, Zap, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import PageTransition from '../components/PageTransition';

const ServicesPage = () => {
  const services = [
    {
      id: 'industrial-automation',
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      title: "Industrial Automation",
      description: "Complete automation solutions for manufacturing processes, including PLC programming, SCADA systems, and HMI design.",
      features: [
        "PLC programming and integration",
        "SCADA system development",
        "HMI design and implementation",
        "Process control systems",
        "Robotics integration",
        "Industrial IoT solutions"
      ]
    },
    {
      id: 'electrical-engineering',
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Electrical Engineering",
      description: "Comprehensive electrical system design, installation, and maintenance for industrial and commercial facilities.",
      features: [
        "Power distribution systems",
        "Control panel design and fabrication",
        "Energy management systems",
        "Lighting design and controls",
        "Electrical system audits",
        "Compliance and safety assessments"
      ]
    },
    {
      id: 'mechanical-systems',
      icon: <Activity className="w-12 h-12 text-blue-600" />,
      title: "Mechanical Systems",
      description: "Design and implementation of mechanical systems, including pneumatic and hydraulic systems for industrial applications.",
      features: [
        "Pneumatic system design",
        "Hydraulic system implementation",
        "Mechanical equipment installation",
        "Conveyor systems",
        "Material handling solutions",
        "Custom machinery design"
      ]
    },
    {
      id: 'preventive-maintenance',
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Preventive Maintenance",
      description: "Regular inspection and maintenance programs to ensure optimal performance and prevent costly downtime.",
      features: [
        "Scheduled maintenance programs",
        "Equipment health monitoring",
        "Predictive maintenance solutions",
        "Reliability-centered maintenance",
        "Spare parts management",
        "Maintenance staff training"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-100">
                Comprehensive facility management solutions tailored to your needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-12">
              {services.map((service, index) => (
                <AnimatedSection 
                  key={service.id} 
                  delay={index * 0.1}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center items-center text-center">
                      <div className="bg-blue-100 p-4 rounded-full mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link 
                        to={`/services/${service.id}`} 
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                      >
                        Learn More <ChevronRight className="ml-1 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="bg-blue-600 rounded-2xl p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Need a Customized Solution?</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  Contact us to discuss your specific requirements and how we can help you achieve your goals.
                </p>
                <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition duration-300 inline-block">
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;