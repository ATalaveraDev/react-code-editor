import { useAppStateContext } from '../../state/context';
import Tab from '../Tab/Tab';
import { Box, List, ListItem } from '@mui/material';

import './Tabs.css';

const Tabs = () => {
  const state = useAppStateContext();

  return <Box className="tabs-container">
    <List disablePadding>
      {state.tabs.map((element) => <Tab key={element.id} active={element.active} text={element.text} id={element.id} />)}
      <ListItem className="empty" />
    </List>
  </Box>
};

export default Tabs;