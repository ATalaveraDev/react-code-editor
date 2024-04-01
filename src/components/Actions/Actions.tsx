import { DriveFolderUpload } from '@mui/icons-material';
import { useRef } from 'react';
import { useAppDispatchContext } from '../../state/context';
import { Action } from '../../models/actions';
import { Box, IconButton, Typography } from '@mui/material';
import './Actions.css';

declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

const Actions = () => {
  console.log('RENDER ACTIONS')
  const uploaderRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatchContext();

  const clickHandler = () => {
    uploaderRef.current!.click();
  };

  const uploadFilesHandler = async (event: React.FormEvent<HTMLInputElement>) => {
    const files = Array.from((event.target as HTMLInputElement).files || []);

    const result = await Promise.all(files);

    dispatch(Action.uploadFiles(result));
  };

  return <Box className="actions-container">
    <Typography variant="h6">Files</Typography>
    <IconButton onClick={clickHandler} color="primary">
      <DriveFolderUpload />
    </IconButton>
    <input ref={uploaderRef} type="file" name="uploader" id="uploader" directory=""
          webkitdirectory="" onChange={(e: React.FormEvent<HTMLInputElement>) => uploadFilesHandler(e)} multiple hidden />
  </Box>
};

export default Actions;