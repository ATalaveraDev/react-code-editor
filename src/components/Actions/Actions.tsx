import { DriveFolderUpload } from '@mui/icons-material';
import { useRef } from 'react';
import { useAppDispatchContext } from '../../state/context';
import { Action } from '../../models/actions';

declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

const Actions = () => {
  const uploaderRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatchContext();

  const clickHandler = () => {
    uploaderRef.current!.click();
  };

  const uploadFilesHandler = async (event: React.FormEvent<HTMLInputElement>) => {
    const files = Array.from((event.target as HTMLInputElement).files || []).map((element: any) => {
      const reader = new FileReader();
      return new Promise(resolve => {
        reader.onload = () => resolve({path: element.webkitRelativePath, contents: reader.result });
        reader.readAsText(element);
      });
    });

    const result = await Promise.all(files);

    dispatch(Action.openFiles(result));
  };

  return <>
    <DriveFolderUpload onClick={clickHandler} />
    <input ref={uploaderRef} type="file" name="uploader" id="uploader" directory=""
          webkitdirectory="" onChange={(e: React.FormEvent<HTMLInputElement>) => uploadFilesHandler(e)} multiple hidden />
  </>
};

export default Actions;