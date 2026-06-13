import { Metadata } from 'next';
import { GetInvolvedPageContent } from '@/components/GetInvolvedPageContent';

export const metadata: Metadata = {
  title: 'Get Involved - Niharika Foundation | Volunteer, Membership & Internships',
  description: 'Join Niharika Foundation as a member, volunteer, intern, or CSR partner. Multiple ways to contribute to education and community development in Odisha.',
  keywords: 'volunteer opportunities, membership program, internship, CSR partnership, NGO volunteering, education programs, community service',
  openGraph: {
    title: 'Get Involved - Niharika Foundation',
    description: 'Multiple ways to make a difference. Volunteer, become a member, intern, or partner with us.',
    type: 'website',
    url: 'https://niharikafoundation.org/get-involved',
  },
};

export default function GetInvolvedPage() {
  return <GetInvolvedPageContent />;
}
