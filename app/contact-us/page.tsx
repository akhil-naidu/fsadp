import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className='container mx-auto py-10'>
      <Card className='max-w-3xl mx-auto'>
        <CardContent className='p-6'>
          <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
          <p className='text-gray-600'>
            Have questions? Get in touch with us using the form below.
          </p>
          <form className='space-y-4'>
            <div>
              <label className='block text-gray-600'>Name</label>
              <Input type='text' placeholder='Your Name' />
            </div>
            <div>
              <label className='block text-gray-600'>Email</label>
              <Input type='email' placeholder='Your Email' />
            </div>
            <div>
              <label className='block text-gray-600'>Message</label>
              <Textarea placeholder='Your Message' />
            </div>
            <Button type='submit' className='w-full'>
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
