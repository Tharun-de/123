import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import PageTransition from '../components/PageTransition';
import ClientLogos from '../components/ClientLogos';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API or database
  const serviceDetails = {
    'industrial-automation': {
      title: 'Industrial Automation',
      description: 'Our industrial automation services help businesses optimize their manufacturing processes, increase efficiency, and reduce operational costs.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      helpPoints: [
        'Design and implementation of automated control systems',
        'Integration of robotics and automated machinery',
        'Development of custom software solutions for process control',
        'Implementation of data collection and analysis systems',
        'Training and support for operational staff',
        'Ongoing maintenance and system optimization'
      ],
      uniquePoints: [
        'End-to-end automation solutions from design to implementation',
        'Industry-specific expertise across manufacturing sectors',
        'Integration capabilities with existing systems and equipment',
        'Focus on scalable solutions that grow with your business',
        'Emphasis on user-friendly interfaces and controls',
        'Comprehensive training and documentation'
      ]
    },
    'electrical-engineering': {
      title: 'Electrical Engineering',
      description: 'Our electrical engineering services provide comprehensive solutions for power distribution, control systems, and energy management in industrial and commercial facilities.',
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      helpPoints: [
        'Design and installation of power distribution systems',
        'Development of control panel solutions',
        'Implementation of energy management systems',
        'Electrical system audits and troubleshooting',
        'Compliance assessments and safety upgrades',
        'Preventive maintenance programs'
      ],
      uniquePoints: [
        'Specialized expertise in industrial electrical systems',
        'Focus on energy efficiency and cost reduction',
        'Integration of smart technologies for monitoring and control',
        'Comprehensive documentation and as-built drawings',
        'Compliance with all relevant codes and standards',
        'Emergency response capabilities'
      ]
    },
    'mechanical-systems': {
      title: 'Mechanical Systems',
      description: 'Our mechanical systems services cover the design, installation, and maintenance of various mechanical components and systems for industrial applications.',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482aec9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      helpPoints: [
        'Design and implementation of pneumatic systems',
        'Hydraulic system development and optimization',
        'Conveyor and material handling solutions',
        'Custom machinery design and fabrication',
        'Equipment installation and commissioning',
        'System upgrades and retrofits'
      ],
      uniquePoints: [
        'Comprehensive approach to mechanical system design',
        'Integration with electrical and automation systems',
        'Focus on reliability and operational efficiency',
        'Custom solutions tailored to specific applications',
        'Expertise across multiple industries and applications',
        'Ongoing support and maintenance services'
      ]
    },
    'preventive-maintenance': {
      title: 'Preventive Maintenance',
      description: 'Our preventive maintenance services help businesses minimize downtime, extend equipment life, and optimize operational performance through regular inspections and maintenance activities.',
      image: 'https://images.unsplash.com/photo-1565951707508-6937a61a0c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      helpPoints: [
        'Development of customized maintenance schedules',
        'Regular equipment inspections and testing',
        'Predictive maintenance using data analysis',
        'Spare parts inventory management',
        'Maintenance staff training and development',
        'Documentation and reporting of maintenance activities'
      ],
      uniquePoints: [
        'Data-driven approach to maintenance planning',
        'Focus on minimizing production disruptions',
        'Integration of predictive technologies',
        'Comprehensive documentation and record-keeping',
        'Continuous improvement of maintenance processes',
        'Emergency response capabilities'
      ]
    }
  };
  
  const service = serviceDetails[id as keyof typeof serviceDetails];
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/services" className="text-blue-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <Link to="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition duration-300">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Services
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-blue-100">{service.description}</p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <AnimatedSection className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </AnimatedSection>
              
              <div className="lg:w-1/2">
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Can Help</h2>
                  <div className="space-y-4 mb-12">
                    {service.helpPoints.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Why We're Unique</h2>
                  <div className="space-y-4">
                    {service.uniquePoints.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Logos Section */}
        <ClientLogos />
        
        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our other services that complement {service.title}
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(serviceDetails)
                .filter(([key]) => key !== id)
                .slice(0, 3)
                .map(([key, relatedService]) => (
                  <AnimatedSection key={key} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={relatedService.image} 
                      alt={relatedService.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{relatedService.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedService.description}</p>
                      <Link 
                        to={`/services/${key}`} 
                        className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition duration-300"
                      >
                        Learn More <ChevronRight className="ml-1 w-5 h-5" />
                      </Link>
                    </div>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="bg-blue-600 rounded-2xl p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  Contact us today to discuss how our {service.title.toLowerCase()} services can benefit your business.
                </p>
                <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition duration-300 inline-block">
                  Contact Us
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

export default ServiceDetailPage;