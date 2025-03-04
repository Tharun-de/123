import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import PageTransition from '../components/PageTransition';

const CareersPage = () => {
  // This would typically come from an API or database
  const jobOpenings = [
    {
      id: 'automation-engineer',
      title: 'Automation Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for an experienced Automation Engineer to design, program, and implement automated control systems for industrial applications.'
    },
    {
      id: 'electrical-engineer',
      title: 'Electrical Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Join our team as an Electrical Engineer to design and implement electrical systems for industrial and commercial facilities.'
    },
    {
      id: 'mechanical-engineer',
      title: 'Mechanical Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'We are seeking a skilled Mechanical Engineer to design and develop mechanical systems for various industrial applications.'
    },
    {
      id: 'project-manager',
      title: 'Project Manager',
      department: 'Project Management',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead and manage engineering projects from inception to completion, ensuring they are delivered on time and within budget.'
    },
    {
      id: 'software-developer',
      title: 'Software Developer',
      department: 'Software Development',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'Develop software solutions for industrial automation and control systems, including HMI interfaces and SCADA systems.'
    }
  ];

  const internships = [
    {
      id: 'automation-intern',
      title: 'Automation Engineering Intern',
      department: 'Engineering',
      location: 'Hyderabad, India',
      duration: '6 months',
      description: 'Gain hands-on experience in industrial automation, working alongside experienced engineers on real-world projects.'
    },
    {
      id: 'electrical-intern',
      title: 'Electrical Engineering Intern',
      department: 'Engineering',
      location: 'Hyderabad, India',
      duration: '3 months',
      description: 'Learn about electrical system design and implementation for industrial applications in a practical setting.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-blue-100">
                Discover exciting career opportunities at Delta Elmech Systems and be part of our mission to deliver innovative engineering solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Join Delta Elmech Systems?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer a dynamic work environment where innovation is encouraged, professional growth is supported, and your contributions make a real impact.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Innovative Projects</h3>
                <p className="text-gray-600">
                  Work on cutting-edge projects that challenge your skills and push the boundaries of industrial engineering.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Growth</h3>
                <p className="text-gray-600">
                  Benefit from continuous learning opportunities, mentorship programs, and a clear career progression path.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborative Culture</h3>
                <p className="text-gray-600">
                  Join a team of passionate professionals who work together to solve complex engineering challenges.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Job Openings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our current opportunities and find a role that matches your skills and career aspirations.
              </p>
            </AnimatedSection>
            
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <AnimatedSection 
                  key={job.id} 
                  delay={index * 0.1}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform duration-300 hover:shadow-xl"
                >
                  <div className="p-6 flex flex-col md:flex-row justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <Briefcase className="w-4 h-4 mr-1" /> {job.department}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" /> {job.location}
                        </span>
                        <span className="text-sm text-gray-600">{job.type}</span>
                        <span className="text-sm text-gray-600">{job.experience} experience</span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    <Link 
                      to={`/careers/${job.id}`} 
                      className="mt-4 md:mt-0 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                      View Details <ChevronRight className="ml-1 w-5 h-5" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Internship Opportunities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kickstart your career with an internship at Delta Elmech Systems and gain valuable industry experience.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {internships.map((internship, index) => (
                <AnimatedSection 
                  key={internship.id} 
                  delay={index * 0.1}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform duration-300 hover:shadow-xl"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{internship.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-1" /> {internship.department}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" /> {internship.location}
                      </span>
                      <span className="text-sm text-gray-600">{internship.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{internship.description}</p>
                    <Link 
                      to={`/careers/${internship.id}`} 
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                      View Details <ChevronRight className="ml-1 w-5 h-5" />
                    </Link>
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
                <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Match?</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
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

export default CareersPage;