import Navbar from '../components/navigation/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col justify-start items-start bg-slate-50">
        <Navbar />
        <div className="flex-1 w-full min-h-full overflow-hidden flex">
          <div className="flex-1 w-full min-h-full max-w-[1280px] mx-auto my-10 flex px-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
