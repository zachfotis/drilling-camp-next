import Navbar from '../components/navigation/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="max-w-full min-h-screen flex flex-col justify-start items-start bg-slate-50">
        <Navbar />
        <div className="w-full mt-[80px]">{children}</div>
      </body>
    </html>
  );
}
