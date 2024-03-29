import { Delete, KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import { Collapse, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { TreeNode } from '../../helpers/tree';
import { Action } from '../../models/actions';
import { useAppDispatchContext, useAppStateContext } from '../../state/context';
import TreeItem from '../TreeItem/TreeItem';
import { memo, useState } from 'react';

const FilesTree = () => {
  console.log('FILES TREE RENDERED');
  const [hoveredItem, setHoveredItem] = useState(null);

  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();

  const clickHandler = (node: TreeNode) => dispatch(Action.toggleFolder(node.data.id));

  const deleteHandler = (event: any, nodeId: string) => {
    event.stopPropagation();
    dispatch(Action.deleteTreeNode(nodeId));
  };

  const render = (node: TreeNode) => {
    return <>
      <ListItem 
        sx={{ pl: 1 }}
        onClick={() => clickHandler(node)}
        onMouseEnter={() => setHoveredItem(node.data.id)}
        onMouseLeave={() => setHoveredItem(null)}
        secondaryAction={
          hoveredItem === node.data.id && <IconButton edge="end" aria-label="delete" onClick={(event) => deleteHandler(event, node.data.id)}>
            <Delete />
          </IconButton>
        }
        draggable
      >
        <TreeItem opened={node.data.opened} name={node.data.name} type={node.data.type} />
      </ListItem>
      {Array.isArray(node.children) ? node.children.map(element => {
        return (<Collapse component="li" in={node.data.opened} key={element.data.id} style={{ paddingLeft: '16px' }}>
          <List disablePadding dense={true}>{render(element)}</List>
        </Collapse>)
      }) : null}
    </>;
  };

  return state.filesTree && <List dense={true}>
    {render(state.filesTree.root as TreeNode)}
  </List>
};

export default memo(FilesTree);