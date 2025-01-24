import { cn } from '@/lib/utils';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const FeaturesSectionWithHoverEffects = () => {
  const features = [
    {
      title: 'Live Interactive Sessions',
      description:
        'Engage in real-time with instructors and peers through live coding sessions and discussions',
      icon: <IconTerminal2 />,
    },
    {
      title: 'Hands-on Projects',
      description:
        'Build real-world applications using industry-standard tools and best practices',
      icon: <IconEaseInOut />,
    },
    {
      title: 'Peer Learning',
      description:
        'Collaborate with fellow engineers in group projects and peer review sessions',
      icon: <IconCurrencyDollar />,
    },
    {
      title: '100% Uptime guarantee',
      description: 'We just cannot be taken down by anyone.',
      icon: <IconCloud />,
    },
    {
      title: 'Collaborative Sessions',
      description:
        'Work together on complex problems in pair programming sessions',
      icon: <IconRouteAltLeft />,
    },
    {
      title: 'Code Reviews',
      description: `Regular code reviews to ensure you're writing production-quality code`,
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Direct Expert Access',
      description:
        'Get personalized guidance from experienced industry professionals',
      icon: <IconHeart />,
    },
    {
      title: 'Multi Language',
      description:
        'Be it C, C++, java, Python, React, NextJS, VueJS, etc, you have it all',
      icon: <IconHelp />,
    },
  ];
  return (
    <div>
      <h1 className='text-4xl md:text-3xl font-bold text-white font-outfit pb-4'>
        Features
      </h1>

      <div className='relative h-[500px] rounded-lg w-full overflow-hidden border'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto'>
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <FlickeringGrid
          className='z-0 absolute inset-0 size-full'
          squareSize={4}
          gridGap={6}
          color='#6B7280'
          maxOpacity={0.2}
          flickerChance={0.1}
          height={800}
        />
      </div>
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col   py-10 relative group/feature ',
        (index === 1 ||
          index === 2 ||
          index === 3 ||
          index === 5 ||
          index === 6 ||
          index === 7) &&
          'lg:border-l dark:border-gray-800',
        index < 4 && 'lg:border-b dark:border-b-gray-800',
      )}
    >
      {index < 4 && (
        <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-100 dark:from-purple-900 to-transparent pointer-events-none' />
      )}
      {index >= 4 && (
        <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-orange-100 dark:from-purple-900 to-transparent pointer-events-none' />
      )}
      <div className='mb-4 relative z-10 px-10 text-gray-600 dark:text-gray-400'>
        {icon}
      </div>
      <div className='text-lg font-bold mb-2 relative z-10 px-10'>
        <div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 dark:bg-gray-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center' />
        <span className='group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 dark:text-gray-100'>
          {title}
        </span>
      </div>
      <p className='text-sm text-gray-600 dark:text-gray-300 max-w-xs relative z-10 px-10'>
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionWithHoverEffects;
