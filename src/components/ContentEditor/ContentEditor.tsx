import { Editor } from '@monaco-editor/react';
import { useAppDispatchContext, useAppStateContext } from '../../state/context';
import { Action } from '../../models/actions';
import { Box } from '@mui/material';

const ContentEditor = () => {
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();
  console.log('RENDER EDITOR')

  const content = state.content;

  const changeHandler = (newContent: string | undefined) => {
    const id = state.tabs.filter(tab => tab.active)[0].id;
    dispatch(Action.modifyFileContent(id, newContent as string));
  };

  return content && <Box paddingTop={3}>
      <Editor height="90vh" theme="vs-dark" defaultLanguage="javascript" value={content} onChange={changeHandler} />
    </Box>;
};

export default ContentEditor;