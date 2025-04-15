import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../firebase/auth';

const ContactForm: React.FC = () => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    name: currentUser?.displayName || '',
    email: currentUser?.email || '',
    phone: '',
    company: '',
    message: '',
    interest: 'general'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Add inquiry to Firestore
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        userId: currentUser?.uid || null,
        createdAt: new Date()
      });
      
      setSubmitSuccess(true);
      
      // Reset form if not logged in
      if (!currentUser) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          interest: 'general'
        });
      } else {
        // Just clear message for logged in users
        setFormData(prev => ({
          ...prev,
          message: ''
        }));
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitError('There was an error submitting your inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitSuccess ? (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-800">
                Thank you for your message! We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-5">
                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">
                    {submitError}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div>
              <label htmlFor="name" className="block px-1 py-2 text-sm font-medium text-gray-700 ">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block px-1 py-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div>
              <label htmlFor="phone" className="block px-1 py-2 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block px-1 py-2 text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="interest" className="block px-1 py-2 text-sm font-medium text-gray-700">I'm interested in</label>
            <select
              name="interest"
              id="interest"
              value={formData.interest}
              onChange={handleChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="general">General Information</option>
              <option value="automated">Automated Model</option>
              <option value="remote">Remote-Controlled Model</option>
              <option value="demo">Product Demonstration</option>
              <option value="quote">Request a Quote</option>
              <option value="support">Technical Support</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
