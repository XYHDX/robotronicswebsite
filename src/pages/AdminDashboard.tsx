import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/auth';
import { collection, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

const AdminDashboard: React.FC = () => {
  const { currentUser, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        // Fetch inquiries
        const inquiriesQuery = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
        const inquiriesSnapshot = await getDocs(inquiriesQuery);
        const inquiriesList = inquiriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate().toLocaleString() || 'Unknown date'
        }));
        setInquiries(inquiriesList);

        // Fetch products
        const productsQuery = query(collection(db, "products"), orderBy("name"));
        const productsSnapshot = await getDocs(productsQuery);
        const productsList = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteInquiry = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      try {
        await deleteDoc(doc(db, "inquiries", id));
        setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
      } catch (err) {
        console.error("Error deleting inquiry: ", err);
        setError('Failed to delete inquiry. Please try again.');
      }
    }
  };

  const handleUpdateProduct = async (id: string, updatedData: any) => {
    try {
      await updateDoc(doc(db, "products", id), updatedData);
      setProducts(products.map(product => 
        product.id === id ? { ...product, ...updatedData } : product
      ));
    } catch (err) {
      console.error("Error updating product: ", err);
      setError('Failed to update product. Please try again.');
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="mt-2 text-xl font-medium text-gray-900">Access Denied</h3>
            <p className="mt-1 text-gray-500">You don't have permission to access this page.</p>
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
            <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">
              Manage inquiries, products, and website content
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'inquiries'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                User Inquiries
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'products'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'analytics'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Analytics
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
                {/* Inquiries Tab */}
                {activeTab === 'inquiries' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Inquiries</h2>
                    
                    {inquiries.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">No inquiries found.</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Interest
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {inquiries.map((inquiry) => (
                              <tr key={inquiry.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                                  {inquiry.company && (
                                    <div className="text-sm text-gray-500">{inquiry.company}</div>
                                  )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{inquiry.email}</div>
                                  {inquiry.phone && (
                                    <div className="text-sm text-gray-500">{inquiry.phone}</div>
                                  )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    {inquiry.interest}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {inquiry.createdAt}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                    onClick={() => {
                                      // View inquiry details
                                      alert(`Message: ${inquiry.message}`);
                                    }}
                                    className="text-primary hover:text-blue-700 mr-3"
                                  >
                                    View
                                  </button>
                                  <button
                                    onClick={() => handleDeleteInquiry(inquiry.id)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}

                {/* Products Tab */}
                {activeTab === 'products' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium text-gray-900">Products</h2>
                      <button
                        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-blue-700"
                      >
                        Add New Product
                      </button>
                    </div>
                    
                    {products.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">No products found.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                          <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            {product.imageUrl && (
                              <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                              />
                            )}
                            <div className="p-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={() => {
                                    // Edit product (simplified for demo)
                                    const newName = prompt("Enter new product name:", product.name);
                                    if (newName && newName !== product.name) {
                                      handleUpdateProduct(product.id, { name: newName });
                                    }
                                  }}
                                  className="px-3 py-1 text-xs font-medium text-primary border border-primary rounded-md hover:bg-blue-50"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => {
                                    // Delete product (simplified for demo)
                                    if (window.confirm('Are you sure you want to delete this product?')) {
                                      // Implementation would go here
                                      alert('Delete functionality would be implemented here');
                                    }
                                  }}
                                  className="px-3 py-1 text-xs font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Analytics Tab */}
                {activeTab === 'analytics' && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Website Analytics</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <div className="ml-5">
                            <p className="text-sm font-medium text-gray-500">Page Views</p>
                            <p className="text-3xl font-semibold text-gray-900">12,721</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-green-600 font-medium">+12.5%</p>
                            <p className="text-sm text-gray-500">vs last month</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="ml-5">
                            <p className="text-sm font-medium text-gray-500">New Users</p>
                            <p className="text-3xl font-semibold text-gray-900">487</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-green-600 font-medium">+8.2%</p>
                            <p className="text-sm text-gray-500">vs last month</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="ml-5">
                            <p className="text-sm font-medium text-gray-500">Inquiries</p>
                            <p className="text-3xl font-semibold text-gray-900">{inquiries.length}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-green-600 font-medium">+23.1%</p>
                            <p className="text-sm text-gray-500">vs last month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
                      <div className="h-64 flex items-center justify-center">
                        <p className="text-gray-500">Analytics chart would be displayed here</p>
                      </div>
                    </div>
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

export default AdminDashboard;
