import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Calendar, Upload, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import PageTransition from '../components/PageTransition';

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    experience: '',
    linkedin: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // This would typically come from an API or database
  const jobDetails = {
    'automation-engineer': {
      title: 'Automation Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-5 years',
      postedDate: 'June 15, 2025',
      description: 'We are looking for an experienced Automation Engineer to design, program, and implement automated control systems for industrial applications.',
      responsibilities: [
        'Design, develop, and implement automation solutions for manufacturing processes',
        'Program PLCs, HMIs, and SCADA systems for industrial control applications',
        'Troubleshoot and resolve issues with existing automation systems',
        'Collaborate with cross-functional teams to integrate automation solutions',
        'Develop technical documentation for automation projects',
        'Provide technical support and training to clients and internal teams'
      ],
      requirements: [
        'Bachelor\'s degree in Electrical Engineering, Computer Engineering, or related field',
        '3-5 years of experience in industrial automation',
        'Proficiency in PLC programming (Allen Bradley, Siemens, etc.)',
        'Experience with HMI development and SCADA systems',
        'Knowledge of industrial communication protocols (Modbus, Profibus, Ethernet/IP)',
        'Strong problem-solving and analytical skills',
        'Excellent communication and teamwork abilities'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health insurance',
        'Retirement benefits',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Collaborative and innovative work environment'
      ]
    },
    'electrical-engineer': {
      title: 'Electrical Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '2-4 years',
      postedDate: 'June 10, 2025',
      description: 'Join our team as an Electrical Engineer to design and implement electrical systems for industrial and commercial facilities.',
      responsibilities: [
        'Design electrical systems for industrial and commercial applications',
        'Develop electrical schematics and documentation',
        'Perform electrical load calculations and system sizing',
        'Specify electrical equipment and components',
        'Conduct site surveys and assessments',
        'Collaborate with clients and team members on project requirements'
      ],
      requirements: [
        'Bachelor\'s degree in Electrical Engineering',
        '2-4 years of experience in electrical system design',
        'Proficiency in electrical design software (AutoCAD Electrical, etc.)',
        'Knowledge of electrical codes and standards (NEC, IEC, etc.)',
        'Experience with power distribution systems',
        'Strong analytical and problem-solving skills',
        'Excellent communication abilities'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health insurance',
        'Retirement benefits',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Collaborative and innovative work environment'
      ]
    },
    'mechanical-engineer': {
      title: 'Mechanical Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-6 years',
      postedDate: 'June 5, 2025',
      description: 'We are seeking a skilled Mechanical Engineer to design and develop mechanical systems for various industrial applications.',
      responsibilities: [
        'Design mechanical systems and components for industrial applications',
        'Develop detailed drawings and specifications',
        'Perform engineering calculations and analysis',
        'Select appropriate materials and components',
        'Collaborate with cross-functional teams on integrated solutions',
        'Oversee fabrication and installation of mechanical systems'
      ],
      requirements: [
        'Bachelor\'s degree in Mechanical Engineering',
        '3-6 years of experience in mechanical design',
        'Proficiency in CAD software (SolidWorks, AutoCAD, etc.)',
        'Experience with pneumatic and hydraulic systems',
        'Knowledge of manufacturing processes and materials',
        'Strong analytical and problem-solving skills',
        'Excellent communication and teamwork abilities'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health insurance',
        'Retirement benefits',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Collaborative and innovative work environment'
      ]
    },
    'project-manager': {
      title: 'Project Manager',
      department: 'Project Management',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '5-8 years',
      postedDate: 'May 28, 2025',
      description: 'Lead and manage engineering projects from inception to completion, ensuring they are delivered on time and within budget.',
      responsibilities: [
        'Manage engineering projects from planning to completion',
        'Develop project schedules, budgets, and resource plans',
        'Coordinate cross-functional teams and external contractors',
        'Monitor project progress and address issues as they arise',
        'Communicate with clients and stakeholders',
        'Ensure project quality and compliance with requirements'
      ],
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '5-8 years of experience in project management',
        'PMP certification preferred',
        'Experience managing industrial or engineering projects',
        'Strong leadership and team management skills',
        'Excellent communication and client relationship abilities',
        'Proficiency in project management software'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health insurance',
        'Retirement benefits',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Collaborative and innovative work environment'
      ]
    },
    'software-developer': {
      title: 'Software Developer',
      department: 'Software Development',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '2-5 years',
      postedDate: 'June 1, 2025',
      description: 'Develop software solutions for industrial automation and control systems, including HMI interfaces and SCADA systems.',
      responsibilities: [
        'Design and develop software for industrial automation applications',
        'Create user interfaces for control systems',
        'Implement data collection and analysis features',
        'Integrate software with hardware systems',
        'Test and debug software solutions',
        'Provide technical support and documentation'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science, Software Engineering, or related field',
        '2-5 years of experience in software development',
        'Proficiency in programming languages (C#, C++, Python, etc.)',
        'Experience with industrial software platforms (Wonderware, FactoryTalk, etc.)',
        'Knowledge of database systems and SQL',
        'Understanding of industrial control systems',
        'Strong problem-solving and analytical skills'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health insurance',
        'Retirement benefits',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Collaborative and innovative work environment'
      ]
    },
    'automation-intern': {
      title: 'Automation Engineering Intern',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Internship',
      duration: '6 months',
      postedDate: 'June 12, 2025',
      description: 'Gain hands-on experience in industrial automation, working alongside experienced engineers on real-world projects.',
      responsibilities: [
        'Assist in the design and implementation of automation solutions',
        'Support PLC programming and HMI development',
        'Help with testing and troubleshooting of automation systems',
        'Participate in project meetings and discussions',
        'Contribute to technical documentation',
        'Learn about industrial control systems and applications'
      ],
      requirements: [
        'Currently pursuing a degree in Electrical Engineering, Computer Engineering, or related field',
        'Basic knowledge of automation principles',
        'Familiarity with programming concepts',
        'Strong analytical and problem-solving skills',
        'Eagerness to learn and grow',
        'Good communication and teamwork abilities'
      ],
      benefits: [
        'Competitive stipend',
        'Hands-on experience with real projects',
        'Mentorship from experienced engineers',
        'Networking opportunities',
        'Potential for full-time employment',
        'Certificate of completion'
      ]
    },
    'electrical-intern': {
      title: 'Electrical Engineering Intern',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Internship',
      duration: '3 months',
      postedDate: 'June 8, 2025',
      description: 'Learn about electrical system design and implementation for industrial applications in a practical setting.',
      responsibilities: [
        'Assist in electrical system design and documentation',
        'Support electrical calculations and analysis',
        'Help with equipment selection and specification',
        'Participate in site surveys and assessments',
        'Contribute to project documentation',
        'Learn about industrial electrical systems'
      ],
      requirements: [
        'Currently pursuing a degree in Electrical Engineering',
        'Basic knowledge of electrical principles',
        'Familiarity with electrical schematics',
        'Strong analytical and problem-solving skills',
        'Eagerness to learn and grow',
        'Good communication and teamwork abilities'
      ],
      benefits: [
        'Competitive stipend',
        'Hands-on experience with real projects',
        'Mentorship from experienced engineers',
        'Networking opportunities',
        'Potential for full-time employment',
        'Certificate of completion'
      ]
    }
  };
  
  const job = jobDetails[id as keyof typeof jobDetails];
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job not found</h1>
          <Link to="/careers" className="text-blue-600 hover:underline">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real application, you would send this data to your backend
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        experience: '',
        linkedin: '',
        resume: null,
      });
      
      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      setSubmitError('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <Link to="/careers" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition duration-300">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Careers
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{job.title}</h1>
              <div className="flex flex-wrap gap-6 mb-4">
                <span className="inline-flex items-center text-blue-100">
                  <Briefcase className="w-5 h-5 mr-2" /> {job.department}
                </span>
                <span className="inline-flex items-center text-blue-100">
                  <MapPin className="w-5 h-5 mr-2" /> {job.location}
                </span>
                <span className="inline-flex items-center text-blue-100">
                  <Calendar className="w-5 h-5 mr-2" /> Posted: {job.postedDate}
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>
                {job.experience && (
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {job.experience} experience
                  </span>
                )}
                {job.duration && (
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {job.duration}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Details */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <AnimatedSection>
                  <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
                    <p className="text-gray-700 mb-6">{job.description}</p>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Key Responsibilities</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Requirements</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      {job.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Benefits</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-1/3">
                <AnimatedSection delay={0.2}>
                  <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply for this Position</h2>
                    
                    {submitSuccess ? (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                        <p className="font-semibold">Application Submitted!</p>
                        <p>Thank you for your interest. We'll review your application and contact you soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        {submitError && (
                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                            {submitError}
                          </div>
                        )}
                        
                        <div className="mb-4">
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                            Years of Experience *
                          </label>
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select experience</option>
                            <option value="0-1">Less than 1 year</option>
                            <option value="1-2">1-2 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-7">5-7 years</option>
                            <option value="7-10">7-10 years</option>
                            <option value="10+">10+ years</option>
                          </select>
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                            LinkedIn Profile (Optional)
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Linkedin className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="url"
                              id="linkedin"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleInputChange}
                              placeholder="https://linkedin.com/in/yourprofile"
                              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                            Resume/CV (PDF or Word) *
                          </label>
                          <div className="relative border border-gray-300 rounded-md px-4 py-2 bg-white">
                            <div className="flex items-center justify-between">
                              <label className="flex items-center cursor-pointer">
                                <Upload className="h-5 w-5 text-gray-400 mr-2" />
                                <span className="text-gray-500 text-sm">
                                  {formData.resume ? formData.resume.name : 'Upload your resume'}
                                </span>
                                <input
                                  type="file"
                                  id="resume"
                                  name="resume"
                                  onChange={handleFileChange}
                                  accept=".pdf,.doc,.docx"
                                  required
                                  className="hidden"
                                />
                              </label>
                              <button
                                type="button"
                                onClick={() => document.getElementById('resume')?.click()}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                              >
                                Browse
                              </button>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                      </form>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Jobs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Similar Positions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore other opportunities that might match your skills and interests
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(jobDetails)
                .filter(([key, value]) => key !== id && value.department === job.department)
                .slice(0, 3)
                .map(([key, similarJob]) => (
                  <AnimatedSection key={key} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{similarJob.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" /> {similarJob.location}
                        </span>
                        <span className="text-sm text-gray-600">{similarJob.type}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{similarJob.description}</p>
                      <Link 
                        to={`/careers/${key}`} 
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                      >
                        View Details <ChevronRight className="ml-1 w-5 h-5" />
                      </Link>
                    </div>
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

export default JobDetailPage;