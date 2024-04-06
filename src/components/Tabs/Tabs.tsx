import Tab from '../Tab/Tab';
import { Box, List, ListItem } from '@mui/material';

import './Tabs.css';
import { Tab as TTab } from '../../models/main';
import { memo } from 'react';

const Tabs = ({data}: {data: TTab[]}) => {
  console.log('TABS RENDERED');

  return data.length > 0 && <Box className="tabs-container">
    <List disablePadding>
      {data.map((element) => <Tab key={element.id} active={element.active} text={element.text} id={element.id} />)}
      <ListItem className="empty" />
    </List>
  </Box>
};

export default memo(Tabs);