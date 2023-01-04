import Link from 'next/link';

function TopCategories() {
  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-x-2 gap-y-5">
      {categories.map((category, index) => {
        return (
          <Link
            href={`/library/${category.toLowerCase().replace(/ /g, '-')}`}
            key={index}
            className="flex justify-start items-center gap-3first-letter:
            hover:bg-accent hover:text-primary transition-all duration-300 ease-in-out
            "
          >
            <h1 className="text-base font-[300] outline-dashed outline-1 outline-accent p-2">{category}</h1>
          </Link>
        );
      })}
    </div>
  );
}
export default TopCategories;

const categories = [
  'Well Control',
  'Drill Bits',
  'Drill String',
  'Directional Drilling',
  'Drilling Mud',
  'Casing',
  'Cementing',
  'Procedures',
  'Calculations',
  'Rig Acceptance',
  'Hydraulics',
  'Mud Logging',
  'Downloads',
  'Rig Components',
  'Fishing',
  'Coiled TBG',
  'Completion',
  'Drilling Problems',
  'General',
];
