const page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-slate-50  antialiased py-10 px-6 md:px-16">
      <div className="">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-50">
            Terms &amp; Conditions
          </h1>
          {/* <p className="text-sm text-slate-500">
            Effective Date: <strong>[Insert Date]</strong> &nbsp;•&nbsp; Last
            Updated: <strong>[Insert Date]</strong>
          </p> */}
        </header>

        <section className="space-y-6 text-slate-50 leading-relaxed">
          <p>
            Welcome to{' '}
            <strong>FSADP (FullStack Application Development Program)</strong>{' '}
            (“we”, “our”, or “us”). These Terms and Conditions (“Terms”) govern
            your use of our educational platform and services related to Full
            Stack Development. By accessing or using our Platform, you agree to
            comply with and be bound by these Terms.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Use of the Platform
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                You must be at least 16 years old or have parental consent to
                access our services.
              </li>
              <li>You agree to use the Platform only for lawful purposes.</li>
              <li>
                You are responsible for maintaining your account
                confidentiality.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Enrollment and Access
            </h2>
            <p>
              Enrollment grants you a limited, non-transferable license to
              access course materials for personal learning. You may not share
              or redistribute course content without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Payments and Refunds
            </h2>
            <p>
              All payments are processed securely. Fees and pricing are
              displayed before purchase. Refunds are available only as per our
              Refund Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All course materials, including videos, code, and design assets,
              are owned or licensed by [Your Website Name] and protected by
              intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. User Conduct</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Do not engage in plagiarism, cheating, or any dishonest
                activity.
              </li>
              <li>Do not hack, disable, or disrupt the Platform.</li>
              <li>Do not share or post offensive or illegal content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Certification</h2>
            <p>
              Certificates of completion (if provided) are awarded when all
              course requirements are met. Certificates do not represent formal
              accreditation unless explicitly stated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              We make every effort to provide accurate and high-quality content
              but do not guarantee error-free operation. [fsadp.com] shall not
              be liable for any indirect or consequential damages arising from
              Platform use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
            <p>
              We may suspend or terminate your account for violating these
              Terms. You may deactivate your account by contacting us at
              [akhil@fsadp.com].
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
            <p>
              We may update these Terms periodically. Continued use of the
              Platform after changes implies acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India, and any disputes
              shall be subject to the exclusive jurisdiction of the courts in
              [Visakhapatnam, India].
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at:
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
