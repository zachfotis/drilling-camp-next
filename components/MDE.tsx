'use client';

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import 'easymde/dist/easymde.min.css';

const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });

function MDE() {
  const [value, setValue] = useState('type your text here');

  const options = useMemo(() => {
    return {
      autofocus: false,
      spellChecker: true,
    };
  }, []);

  return <SimpleMdeReact value={value} onChange={setValue} options={options} />;
}
export default MDE;
