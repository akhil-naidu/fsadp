import { Card, CardContent } from '@/components/ui/card';

export default function Terms() {
  return (
    <div className='container mx-auto py-10'>
      <Card className='max-w-3xl mx-auto'>
        <CardContent className='p-6'>
          <h1 className='text-3xl font-bold mb-4'>Terms & Conditions</h1>
          <p className='text-gray-600'>
            By using this website, you agree to the following terms and
            conditions.
          </p>
          <h2 className='text-xl font-semibold mt-4'>Use of the Website</h2>
          <p className='text-gray-600'>
            You must use this website for lawful purposes and agree not to
            engage in any fraudulent activities.
          </p>
          <h2 className='text-xl font-semibold mt-4'>Intellectual Property</h2>
          <p className='text-gray-600'>
            All content on this website, including text and images, is the
            property of our company and may not be used without permission.
          </p>
          <h2 className='text-xl font-semibold mt-4'>Changes to Terms</h2>
          <p className='text-gray-600'>
            We reserve the right to modify these terms at any time. Continued
            use of the website constitutes acceptance of the new terms.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
