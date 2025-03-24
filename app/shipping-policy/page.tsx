import { Card, CardContent } from '@/components/ui/card';

export default function ShippingPolicy() {
  return (
    <div className='container mx-auto py-10'>
      <Card className='max-w-3xl mx-auto'>
        <CardContent className='p-6'>
          <h1 className='text-3xl font-bold mb-4'>Shipping Policy</h1>
          <p className='text-gray-600'>
            Our shipping policy outlines delivery times, costs, and procedures.
          </p>
          <h2 className='text-xl font-semibold mt-4'>Delivery Time</h2>
          <p className='text-gray-600'>
            Orders are processed within 2-3 business days and shipped via
            standard or express shipping options.
          </p>
          <h2 className='text-xl font-semibold mt-4'>Shipping Costs</h2>
          <p className='text-gray-600'>
            Shipping charges vary based on location and package weight. Free
            shipping may be available for orders above a certain amount.
          </p>
          <h2 className='text-xl font-semibold mt-4'>Returns & Refunds</h2>
          <p className='text-gray-600'>
            If your product is damaged or incorrect, you may request a return
            within 7 days of delivery.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
