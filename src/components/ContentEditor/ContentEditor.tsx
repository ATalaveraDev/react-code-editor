import { Editor } from '@monaco-editor/react';
import { useAppStateContext } from '../../state/context';

const ContentEditor = () => {
  const state = useAppStateContext();
  console.log('RENDER EDITOR')

  const content = state.content;

  return content && <Editor height="90vh" defaultLanguage="javascript" value={content}  />;
};

export default ContentEditor;