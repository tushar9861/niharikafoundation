import { Metadata } from 'next';
import { ImpactPageContent } from '@/components/ImpactPageContent';

export const metadata: Metadata = {
  title: 'Our Impact - Niharika Foundation | Education & Scholarship Programs',
  description: 'Discover the impact of Niharika Foundation. 700+ students supported, 50+ villages served, 12+ districts covered with scholarships, mentorship, and community development programs in Odisha.',
  keywords: 'education impact, scholarship programs, student support, community development, Odisha NGO, impact metrics, student success stories',
  openGraph: {
    title: 'Our Impact - Niharika Foundation',
    description: 'Transforming lives through education. 700+ scholars, 50+ villages, 12+ districts served.',
    type: 'website',
    url: 'https://niharikafoundation.org/impact',
  },
};

export default function ImpactPage() {
  return <ImpactPageContent />;
}
