import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/auth';
import { collection, getDocs, query, where, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const UserDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [userProfile, setUserProfile] = useState<any>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) {
        console.warn("🚫 No currentUser found");
        return;
      }
  
      setLoading(true);
      setError('');
  
      try {
        console.log("🔐 Fetching Firestore data for:", currentUser.uid);
  
        // 1️⃣ Fetch user profile
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
  
        if (userDoc.exists()) {
          setUserProfile(userDoc.data());
          console.log("✅ User profile:", userDoc.data());
        } else {
          throw new Error("User profile not found in Firestore.");
        }
  
        // 2️⃣ Fetch user inquiries
        const inquiriesQuery = query(
          collection(db, "inquiries"),
          where("email", "==", currentUser.email),
          orderBy("createdAt", "desc")
        );
        const inquiriesSnapshot = await getDocs(inquiriesQuery);
        const inquiriesList = inquiriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate().toLocaleString() || 'Unknown date'
        }));
        setInquiries(inquiriesList);
      } catch (err: any) {
        console.error("🔥 Error in fetchData:", err.message || err);
        setError("Failed to load data. " + (err.message || ""));
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [currentUser]);
  

if (!currentUser) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="mt-2 text-xl font-medium text-gray-900">Authentication Required</h3>
          <p className="mt-1 text-gray-500">Please log in to access your dashboard.</p>
        </div>
      </div>
    </div>
  );
}

return (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        {/* Dashboard Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">User Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your profile, view your inquiries, and access resources
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-6 text-sm font-medium ${activeTab === 'profile'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              My Profile
            </button>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`py-4 px-6 text-sm font-medium ${activeTab === 'inquiries'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              My Inquiries
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-6 text-sm font-medium ${activeTab === 'resources'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              Resources
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">My Profile</h2>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <div className="flex items-center mb-6">
                      <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-semibold">
                        {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : currentUser.email?.charAt(0).toUpperCase()}
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-medium text-gray-900">{currentUser.displayName || 'User'}</h3>
                        <p className="text-gray-600">{currentUser.email}</p>
                        <p className="text-sm text-gray-500 mt-1">Member since {userProfile?.createdAt ? new Date(userProfile.createdAt.toDate()).toLocaleDateString() : 'Unknown'}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Full Name</h4>
                        <p className="text-gray-900">{userProfile?.name || currentUser.displayName || 'Not provided'}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Email Address</h4>
                        <p className="text-gray-900">{currentUser.email}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Phone Number</h4>
                        <p className="text-gray-900">{userProfile?.phone || 'Not provided'}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Company</h4>
                        <p className="text-gray-900">{userProfile?.company || 'Not provided'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-blue-700"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              )}

              {/* Inquiries Tab */}
              {activeTab === 'inquiries' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium text-gray-900">My Inquiries</h2>
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-blue-700"
                    >
                      New Inquiry
                    </button>
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No inquiries</h3>
                      <p className="mt-1 text-sm text-gray-500">Get started by creating a new inquiry.</p>
                      <div className="mt-6">
                        <button
                          onClick={() => window.location.href = '/contact'}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700"
                        >
                          New Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Subject</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {inquiries.map((inquiry) => (
                            <tr key={inquiry.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => alert(`Message: ${inquiry.message}`)}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <div className="font-medium text-gray-900">
                                  {inquiry.message.length > 50 ? inquiry.message.substring(0, 50) + '...' : inquiry.message}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                                  {inquiry.interest}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{inquiry.createdAt}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                  Submitted
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Resources Tab */}
              {activeTab === 'resources' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Resources</h2>

                  {resources.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No resources available at this time.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Sample resources since we don't have actual data */}
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <h3 className="ml-3 text-lg font-semibold text-gray-900">Product Manual</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">Comprehensive guide for operating and maintaining your Robotronics solar panel cleaning robot.</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">PDF • 4.2 MB</span>
                            <button className="px-3 py-1 text-xs font-medium text-primary border border-primary rounded-md hover:bg-blue-50">
                              Download
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <h3 className="ml-3 text-lg font-semibold text-gray-900">Installation Video</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">Step-by-step video guide for installing your Robotronics solar panel cleaning system.</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">MP4 • 12:45 min</span>
                            <button className="px-3 py-1 text-xs font-medium text-primary border border-primary rounded-md hover:bg-blue-50">
                              Watch
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <h3 className="ml-3 text-lg font-semibold text-gray-900">Maintenance Checklist</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">Regular maintenance checklist to ensure optimal performance of your robot.</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">PDF • 1.8 MB</span>
                            <button className="px-3 py-1 text-xs font-medium text-primary border border-primary rounded-md hover:bg-blue-50">
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);
};

export default UserDashboard;
