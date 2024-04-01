import { Close } from '@mui/icons-material';
import { ListItem, ListItemText, Typography } from '@mui/material';

import { Action } from '../../models/actions';
import { useAppDispatchContext } from '../../state/context';

const Tab = ({text, id, active}: {text: string, id: string, active: boolean}) => {
  const dispatch = useAppDispatchContext();

  const closeHandler = (event: React.FormEvent, nodeId: string) => {
    event.stopPropagation();
    dispatch(Action.closeFile(nodeId));
  };

  const activateTabHandler = async (id: string) => {
    dispatch(Action.activateTab(id));
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