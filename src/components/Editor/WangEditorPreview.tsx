import { useState, useEffect } from 'react';
import { IDomEditor, SlateNode } from '@wangeditor/editor';
import { Editor } from '@wangeditor/editor-for-react';
import parse from 'html-react-parser';

interface Props {
  html: string;
}

function WangEditorPreview({ html }: Props) {
  // editor instance
  const [editor, setEditor] = useState<IDomEditor | null>(null);
  const [toc, setToc] = useState('');

  // Timely destroy editor, important!
  useEffect(() => {
    if (editor) {
      editor.disable();
      const headers = editor.getElemsByTypePrefix('header');
      const headerContainer = headers
        .map((header) => {
          const text = SlateNode.string(header);
          const { id } = header;

          return `<li><a href='#${id}'>${text}</a></li>`;
        })
        .join('');

      setToc(headerContainer);
    }

    return () => {
      if (editor === null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ zIndex: 99999 }}>
        {toc && (
          <>
            <h3>Mục lục</h3>
            <ul className='text-av-primary'>{parse(toc)}</ul>
          </>
        )}
        <Editor value={html} onCreated={setEditor} />
      </div>
    </>
  );
}

export default WangEditorPreview;
