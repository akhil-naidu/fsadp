const page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-slate-50  antialiased py-10 px-6 md:px-16">
      <div className="">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-50">
            Privacy Policy
          </h1>
          {/* <p className="text-sm text-slate-500">
            Effective Date: <strong>[Insert Date]</strong> &nbsp;•&nbsp; Last
            Updated: <strong>[Insert Date]</strong>
          </p> */}
        </header>

        <section className="space-y-6 text-slate-50 leading-relaxed">
          <p>
            At <strong>FSADP</strong> (“we”, “our”, or “us”), we respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website or participate in our Full
            Stack Development programs.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Personal Information:</strong> such as name, email
                address, phone number, and payment details.
              </li>
              <li>
                <strong>Technical Data:</strong> such as IP address, browser
                type, and device information.
              </li>
              <li>
                <strong>Usage Data:</strong> including pages visited, course
                progress, and interaction with our content.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To deliver and improve our courses and services.</li>
              <li>To process payments and manage enrollments.</li>
              <li>
                To send important updates, course notifications, and promotional
                materials.
              </li>
              <li>
                To comply with legal obligations and prevent fraudulent
                activity.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell your personal data. We may share your data with
              trusted third parties who assist in operating our Platform—such as
              payment processors, email service providers, or analytics
              tools—under strict confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar technologies to enhance user
              experience, analyze traffic, and personalize content. You can
              manage cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to fulfill
              the purposes outlined in this Privacy Policy, unless a longer
              retention period is required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              data. However, no online platform can guarantee absolute security,
              and you share information at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, correct, or delete your personal data.</li>
              <li>Withdraw consent to marketing communications at any time.</li>
              <li>Request a copy of the data we hold about you.</li>
            </ul>
            <p>
              To exercise your rights, contact us at{' '}
              <a
                href="mailto:[Your Contact Email]"
                className="text-teal-600 underline"
              >
                akhil@fsadp.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              8. Third-Party Services
            </h2>
            <p>
              Our Platform may link to third-party websites or services (e.g.,
              Razorpay, Google Analytics). We are not responsible for their
              privacy practices and encourage you to review their respective
              policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              9. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Any significant
              changes will be communicated through email or a notice on our
              website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us at:
              <br />
              📧 <strong>akhil@fsadp.com</strong>
              <br />
              🌐 <strong>fsadp.com</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
