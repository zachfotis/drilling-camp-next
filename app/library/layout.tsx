interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="max-w-[1280px] mx-auto flex justify-start items-start gap-24 px-5 my-5 tablet:mt-0">{children}</div>
  );
}
