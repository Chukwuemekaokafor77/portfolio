import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Michael Okafor — Full-Stack & ML Engineer',
  description:
    'Portfolio of Michael Okafor — Full-Stack Software Engineer & ML Engineer building scalable SaaS platforms and data-intensive applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
