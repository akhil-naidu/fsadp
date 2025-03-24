import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className='container mx-auto py-10'>
      <Card className='max-w-3xl mx-auto'>
        <CardContent className='p-6'>
          <h1 className='text-3xl font-bold mb-4'>Privacy Policy</h1>
          <p className='text-gray-600'>
            We are committed to protecting your privacy. This Privacy Policy
            outlines how we collect, use, and safeguard your personal
            information when you visit our website.
          </p>
          <h2 className='text-xl font-semibold mt-4'>Information We Collect</h2>
          <p className='text-gray-600'>
            We may collect personal information such as your name, email
            address, and browsing data when you interact with our website.
          </p>
          <h2 className='text-xl font-semibold mt-4'>
            How We Use Your Information
          </h2>
          <p className='text-gray-600'>
            Your information is used to improve our services, provide customer
            support, and send updates about our offerings.
          </p>
          <h2 className='text-xl font-semibold mt-4'>Contact Us</h2>
          <p className='text-gray-600'>
            If you have any questions, you can contact us at support@fsadp.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
