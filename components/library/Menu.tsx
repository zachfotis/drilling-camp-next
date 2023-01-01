import Link from 'next/link';
import { AiOutlineCaretRight as ListIcon } from 'react-icons/ai';

function Menu() {
  return (
    <div>
      <ul className="py-3 flex flex-col justify-start items-start gap-3">
        <h1 className="ml-1 text-xl font-[500]">Categories</h1>
        <span className="w-full h-[1px] bg-primary rounded-lg"></span>
        {menuItems.map((category) => (
          <li key={category} className="w-full">
            <Link
              href={`/library/${category.toLowerCase().replace(/ /g, '-')}`}
              className="text-base font-[500] flex justify-start items-center w-full p-2 rounded-lg
             hover:bg-accent hover:text-primary transition-all duration-300 ease-in-out"
            >
              <ListIcon className="inline-block mr-2" />
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;

const menuItems = [
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
