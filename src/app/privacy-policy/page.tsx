"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow overflow-hidden rounded-lg"
        >
          <div className="px-6 py-8 sm:p-10">
            <div className="prose prose-lg max-w-none text-gray-600">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                MNM Technology Privacy Policy
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h3>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number when you contact us</li>
                    <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages</li>
                    <li><strong>Cookies:</strong> We use cookies to improve your experience on our website</li>
                    <li><strong>Communication Data:</strong> Records of your correspondence with us</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h3>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Provide and maintain our services</li>
                    <li>Notify you about changes to our services</li>
                    <li>Allow you to participate in interactive features</li>
                    <li>Provide customer support</li>
                    <li>Gather analysis to improve our website</li>
                    <li>Monitor usage of our website</li>
                    <li>Detect and prevent technical issues</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Data Protection</h3>
                  <p>We implement appropriate security measures including:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Regular security audits</li>
                    <li>Access controls to personal information</li>
                    <li>Secure storage solutions</li>
                  </ul>
                  <p className="mt-4">However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h3>
                  <p>We may employ third-party companies for:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Website analytics (Google Analytics)</li>
                    <li>Hosting services</li>
                    <li>Customer relationship management</li>
                  </ul>
                  <p className="mt-4">These third parties have access only to information needed to perform their functions.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Request transfer of your data</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="mt-4">To exercise these rights, please contact us at privacy@mnmtchnology.com.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Children's Privacy</h3>
                  <p>Our services are not directed to anyone under 13. We do not knowingly collect personal information from children.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h3>
                  <p>We may update our Privacy Policy. We will notify you of changes by posting the new policy on this page.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Contact Us</h3>
                  <p>For questions about this policy:</p>
                  <address className="not-italic mt-2">
                    MNM Technology<br />
                    H#I87 Allam khan road<br />
                    Rawalpindi,Pakistan<br />
                    Email: munem.habib1@gmail.com<br />
                    Phone: 92 (316) 5338040
                  </address>
                </section>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;