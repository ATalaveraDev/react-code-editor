import { Editor } from '@monaco-editor/react';
import { useAppDispatchContext, useAppStateContext } from '../../state/context';
import { Action } from '../../models/actions';

const ContentEditor = () => {
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();
  console.log('RENDER EDITOR')

  const content = state.content;

  const changeHandler = (newContent: string | undefined) => {
    const id = state.tabs.filter(tab => tab.active)[0].id;
    dispatch(Action.modifyFileContent(id, newContent as string));
  };

  return content && <Editor height="90vh" defaultLanguage="javascript" value={content} onChange={changeHandler} />;
};

export default ContentEditor;