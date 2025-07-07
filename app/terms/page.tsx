export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Heading Section */}
      <div
        className="py-12 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/commonback.png')",
          minHeight: "200px",
        }}
      >
        <div className="container mx-auto text-start">
          <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-white">
            {`Welcome To The Official Website Of GMEC India ("Company," "We," "Us," Or "Our"). These Terms And Conditions ("Terms") Govern Your Use Of Our Website, Services, Platforms, And Event Registrations Through GMEC Or Any Of Our Event-Specific Domains ("The Website").`}
          </p>
          <p className="text-white mt-4">
            {`By Accessing, Browsing, Or Using This Website Or Registering For An Event, You Agree To Be Legally Bound By These Terms. If You Do Not Agree With Any Part Of These Terms, Please Do Not Use Our Website Or Services.`}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <div className="space-y-8">
              {/* SECTION 1 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">1. Use Of The Website</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>You Must Be At Least 18 Years Of Age To Use This Website Or Register For Events.</li>
                  <li>Use This Website Only For Lawful Purposes.</li>
                  <li>Do Not Misuse Or Restrict Access To The Website.</li>
                </ul>
              </section>

              {/* SECTION 2 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">2. Event Registration And Participation</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>All Event Registrations Are Subject To Availability And Approval By GMEC India.</li>
                  <li>Information Must Be Accurate And Complete.</li>
                  <li>You Agree To Receive Communications Related To The Event.</li>
                </ul>
              </section>

              {/* SECTION 3 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">3. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>All Payments Must Be Made Within Business Days Unless Otherwise Specified.</li>
                  <li>Payment Methods Include Cheque, Card, Bank Transfer.</li>
                  <li>Fees Are Exclusive Of Taxes Unless Otherwise Mentioned.</li>
                </ul>
              </section>

              {/* SECTION 4 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">4. Cancellation And Substitution Policy</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Written Cancellations Must Be Made At Least 30 Days Before Event.</li>
                  <li>Refunds Are Subject To A Processing Fee.</li>
                  <li>Less Than 30 Days May Lead To Cancellation Charges.</li>
                  <li>Substitutions Are Allowed With Prior Notice.</li>
                </ul>
              </section>

              {/* SECTION 5 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">5. Event Changes And Force Majeure</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>GMEC May Change Event Details Due To Unforeseen Circumstances.</li>
                  <li>Force Majeure Includes Pandemic, Disasters, Restrictions, etc.</li>
                </ul>
              </section>

              {/* SECTION 6 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">6. Intellectual Property</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>All Website Content Is Owned By GMEC Or Licensed.</li>
                  <li>You May Not Copy Or Distribute Without Permission.</li>
                </ul>
              </section>

              {/* SECTION 7 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">7. Photography And Media Release</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>By Attending, You Consent To Photography Or Video Recording.</li>
                  <li>GMEC May Use It For Promotional Purposes.</li>
                </ul>
              </section>

              {/* SECTION 8 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">8. Privacy And Data Protection</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Data Is Collected In Line With Privacy Policy And Laws.</li>
                </ul>
              </section>

              {/* SECTION 9 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">9. Limitation Of Liability</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>GMEC Is Not Liable For Any Indirect Or Consequential Damages.</li>
                  <li>Liability Is Limited To Registration Fees Paid.</li>
                </ul>
              </section>

              {/* SECTION 10 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">10. Indemnification</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>You Agree To Hold GMEC Harmless From Claims Arising From Your Use.</li>
                </ul>
              </section>

              {/* SECTION 11 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">11. Governing Law And Jurisdiction</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>These Terms Are Governed By Indian Law.</li>
                  <li>Disputes Will Be Handled In Bangalore Courts.</li>
                </ul>
              </section>

              {/* SECTION 12 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-cyan-600">12. Modifications To Terms</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>GMEC May Modify Terms Anytime. Revisions Take Effect Once Posted.</li>
                  <li>Continued Use Constitutes Acceptance.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
