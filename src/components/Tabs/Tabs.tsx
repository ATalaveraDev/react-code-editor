import { useAppStateContext } from '../../state/context';
import Tab from '../Tab/Tab';
import { List } from '@mui/material';

const Tabs = () => {
  const state = useAppStateContext();

  return <List>
    {state.tabs.map((element) => <Tab key={element.id} active={element.active} text={element.text} id={element.id} />)}
  </List>
};

export default Tabs;