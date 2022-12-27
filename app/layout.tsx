import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col justify-start items-start bg-slate-50">
        <Navbar />
        <div className="flex-1 w-full h-full max-w-[1280px] mx-auto flex px-5">{children}</div>
      </body>
    </html>
  );
}
