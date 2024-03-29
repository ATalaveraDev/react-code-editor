import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useAppDispatchContext, useAppStateContext } from '../../state/context';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import { TreeNode } from '../../helpers/tree';
import { Action } from '../../models/actions';

const FilesTree = () => {
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();

  const clickHandler = (e: any) => {
    console.log('node', e)
    dispatch(Action.toggleFolder(e.data.id));
  };

  const render = (node: TreeNode) => {
    return <>
      <ListItem sx={{pl: 1}} onClick={() => clickHandler(node)} draggable>
        <ListItemIcon sx={{minWidth: '30px'}}>
          {node.data.type === 'folder' ? (node.data.opened ? <KeyboardArrowDown /> : <KeyboardArrowRight/>) : null}
        </ListItemIcon>
        <ListItemText primary={node.data.name}></ListItemText>
      </ListItem>
      {Array.isArray(node.children) ? node.children.map(element => {
        return (<Collapse component="li" in={node.data.opened} key={element.data.id} style={{paddingLeft: '16px'}}>
          <List disablePadding dense={true}>{render(element)}</List>
        </Collapse>)
      }) : null }
    </>;
  };

  return state.filesTree && <List dense={true}>
    {render(state.filesTree.root as TreeNode)}
  </List>
};

export default FilesTree;