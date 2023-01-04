export default function Head({ params: { category } }: { params: { category: string } }) {
  return (
    <>
      <title>{`${category?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())} | Drilling Camp`}</title>
    </>
  );
}
