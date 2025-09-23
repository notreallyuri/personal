import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="py-16">{children}</div>
      <Footer />
    </div>
  );
}
