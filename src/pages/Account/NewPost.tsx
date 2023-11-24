import { useState } from 'react';
import WangEditor from '@/components/Editor/WangEditor';

function NewPost() {
  const [html, setHtml] = useState('');

  return (
    <div>
      <WangEditor html={html} setHtml={setHtml} />
    </div>
  );
}

export default NewPost;
