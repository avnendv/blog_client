import { useState, useEffect } from 'react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';

import '@wangeditor/editor/dist/css/style.css';

interface Props {
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
}

function WangEditor({ html, setHtml }: Props) {
  // editor instance
  const [editor, setEditor] = useState<IDomEditor | null>(null);

  // editor content

  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS syntax

  const editorConfig: Partial<IEditorConfig> = {
    // TS syntax
    placeholder: 'Type here...',
    MENU_CONF: {
      fontFamily: {
        fontFamilyList: ['Arial', 'Tahoma', 'Verdana', 'Roboto'],
      },
      codeSelectLang: {
        codeLangs: [
          { text: 'CSS', value: 'css' },
          { text: 'HTML', value: 'html' },
          { text: 'Javascript', value: 'javascript' },
          { text: 'Python', value: 'python' },
          { text: 'C', value: 'c' },
          { text: 'Java', value: 'java' },
        ],
      },
      uploadImage: {
        server: 'http://link/api/upload-files',
        fieldName: 'file',
        allowedFileTypes: ['image/*'],
        headers: {
          Authorization: `Bearer token`,
        },
        customInsert() {
          // TS syntax
          // console.log(res);
          // if (res?.data) {
          //   // Get image's url, alt, href in res, and insert to editor
          //   insertFn(``, 'res?.data.files', ``);
          // }
        },
      },
    },
  };

  // Timely destroy editor, important!
  useEffect(() => {
    return () => {
      if (editor === null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 99999 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode='default'
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode='default'
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
    </>
  );
}

export default WangEditor;
