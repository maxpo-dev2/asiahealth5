


export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
{/* Top Heading Section */}
<div
  className="py-12 px-4 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/commonback.png')", // Replace with your actual image path
    minHeight: "200px",
  }}
>
  <div className="">
    <div className="container mx-auto text-start">
      <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="text-white">
        Welcome To The GMEC India. We Value Your Trust And Are Committed To Protecting Your Privacy. This Privacy
        Policy Outlines How We Collect, Use, And Safeguard Your Information When You Visit Our Website Or Engage
        With Our Services.
      </p>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">1. Information We Collect</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal Information: Name, Email, Phone, City Of Residence, Preferences</li>
                  <li>Technical Information: IP Address, Browser Type, Pages Visited, Time Spent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Facilitate Property-Related Inquiries And Services</li>
                  <li>Respond To Questions And Provide Support</li>
                  <li>Send Relevant Updates And Promotional Content</li>
                  <li>Improve Our Services And User Experience</li>
                  <li>Inform You About Upcoming Property Events And Offers</li>
                  <li>Analyze Website Traffic And Improve Services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">3. Sharing Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>We Do Not Sell Your Personal Information. However, We May Share It With:</li>
                  <li>Trusted Third-Party Developers Or Partners</li>
                  <li>Service Providers Assisting In Website Operations</li>
                  <li>Legal Authorities If Required By Law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">4. Cookies And Tracking Technologies</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Remembering User Preferences</li>
                  <li>Providing Personalized Recommendations</li>
                  <li>Analyzing Website Performance</li>
                </ul>
                <p className="mt-2">You Can Manage Or Disable Cookies In Your Browser Settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">5. Data Security</h2>
                <p>
                  We Employ Security Measures To Protect Your Data, But No Method Is 100% Secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">6. Your Rights</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access Your Personal Data</li>
                  <li>Request Corrections Or Updates</li>
                  <li>Opt-Out Of Marketing Communications</li>
                  <li>Request Data Deletion (Subject To Legal Requirements)</li>
                  <li>To Exercise These Rights, Contact Us At info@gmecevents.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">7. Third-Party Links</h2>
                <p>
                  We Are Not Responsible For Third-Party Privacy Practices. Please Review Their Policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">8. Changes To This Policy</h2>
                <p>
                  We May Update This Policy From Time To Time. Changes Will Be Posted Here.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">9. Contact Us</h2>
                <div>
                  <p>For Questions, Contact Us At:</p>
                  <p>Email: info@gmecevents.com</p>
                  <p>Address: 5th Floor, DHCC Plaza, Tower 1, Near Bangalore, Karnataka India 560001</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
