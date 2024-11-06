import { useEffect, useRef } from 'react';
import { EXPERIENCE } from '@/data/Experience_Data';

interface ExperienceItemProps {
  title: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export const Experience: React.FC<ExperienceItemProps> = ({ title, position, url, startDate, endDate, description }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-dot');
        } else {
          entry.target.classList.remove('active-dot');
        }
      });
    }, observerOptions);

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className="relative bg-gradient-to-r from-purple-800  to-blue-400 border-2 border-transparent rounded-lg transition-all duration-600 ease-in-out">
      <div className="absolute w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full left-[-1rem] mt-1"></div>
      <div className="flex flex-col mb-1">
        <h3 className="font-semibold text-white">{title}</h3>
        <h4 className="text-gray-300">{position}</h4>
        <time className="text-sm text-gray-500 mt-1">
          {endDate ? `${startDate} - ${endDate}` : startDate}
        </time>
      </div>
      <p className="text-gray-300 leading-relaxed tracking-wide">{description}</p>
      {url && (
        <a href={url} className="text-pink-400 hover:text-blue-400 underline text-lg">
          Link
        </a>
      )}
    </div>
  );
};

