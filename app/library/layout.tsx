import Menu from '../../components/library/Menu';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1280px] mx-auto flex justify-start items-start gap-24 px-5 my-5 tablet:mt-0">
      <Menu />
      {children}
    </div>
  );
}
