import { memo } from 'react';

import { Box } from '@mui/material';
import { Editor } from '@monaco-editor/react';

import { Action } from '../../models/actions';
import { useAppDispatchContext } from '../../state/context';

const ContentEditor = ({content}: {content: string}) => {
  const dispatch = useAppDispatchContext();
  console.log('RENDER EDITOR')

  const changeHandler = (newContent: string | undefined) => {
    dispatch(Action.modifyFileContent(newContent as string));
  };

  return content && <Box paddingTop={3}>
      <Editor height="90vh" theme="vs-dark" defaultLanguage="javascript" value={content} onChange={changeHandler} />
    </Box>;
};

export default memo(ContentEditor);