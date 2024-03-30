import { Close } from '@mui/icons-material';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { useAppDispatchContext, useAppStateContext } from '../../state/context';
import { Action } from '../../models/actions';

const Tab = ({text, id, active}: {text: string, id: string, active: boolean}) => {
  const dispatch = useAppDispatchContext();
  const state = useAppStateContext();

  const closeHandler = (event: React.FormEvent, nodeId: string) => {
    event.stopPropagation();
    dispatch(Action.closeFile(nodeId));
  };

  const activateTabHandler = async (id: string) => {
    const readFile = async () => {
      const reader = new FileReader();
      const newResult = await new Promise(resolve => {
        const node = state.filesTree?.findById(id);
        reader.onload = () => resolve(reader.result);
        reader.readAsText(node!.data.contents);
      });

      return newResult;
    }

    const content = await readFile();

    dispatch(Action.activateTab(id, content));
  };

  return (
    <ListItem 
      secondaryAction={active ? <Close onClick={(event) => closeHandler(event, id)} /> : null}
      onClick={() => activateTabHandler(id)}
      sx={{maxWidth: 150, display: 'inline-block', borderBottom: active ? '1px solid red' : ''}}
    >
      <ListItemText>
        <Typography whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{text}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default Tab;