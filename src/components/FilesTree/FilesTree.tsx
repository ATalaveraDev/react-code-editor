import { memo, useRef, useState } from 'react';

import { Check, Close, Delete, Edit } from '@mui/icons-material';
import { Collapse, IconButton, List, ListItem } from '@mui/material';

import TreeItem from '../TreeItem/TreeItem';
import { TreeNode } from '../../helpers/tree';
import { Action } from '../../models/actions';
import { useAppDispatchContext, useAppStateContext } from '../../state/context';

const FilesTree = () => {
  console.log('FILES TREE RENDERED');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [editItem, setEditItem] = useState('');
  const nameInput = useRef<HTMLInputElement>(null);

  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();

  const clickHandler = (node: TreeNode) => {
    if (editItem !== node.data.id) {
      if (node.data.type === 'folder') {
        dispatch(Action.toggleFolder(node.data.id));
      } else {
        dispatch(Action.openFile({id: node.data.id, active: true, text: node.data.name }));
      }
    }
  };

  const deleteHandler = (event: any, nodeId: string) => {
    event.stopPropagation();
    dispatch(Action.deleteTreeNode(nodeId));
  };

  const editHandler = (event: any, nodeId: string) => {
    event.stopPropagation();
    setEditItem(nodeId);
  };

  const confirmEditHandler = (event: React.FormEvent, nodeId: string) => {
    event.stopPropagation();
    dispatch(Action.editNode(nodeId, nameInput.current!.value));
    setEditItem('');
    setHoveredItem(null);
  };

  const cancelEditHandler = (event: React.FormEvent) => {
    event.stopPropagation();
    setEditItem('');
    setHoveredItem(null);
  };

  const dragStartHandler = (event: React.DragEvent, node: TreeNode) => {
    event.dataTransfer.setData('text/plain', node.data.id);
    event.dataTransfer.effectAllowed = 'move';
  };

  const dragOverHandler = (event: React.DragEvent) => event.preventDefault();

  const dropHandler= (event: React.DragEvent, node: TreeNode) => {
    const parentId = node.data.type === 'folder' ? node.data.id : node.parent!.data.id;

    dispatch(Action.moveNode(event.dataTransfer.getData('text/plain'), parentId));
  };

  const render = (node: TreeNode) => {
    return <>
      <ListItem 
        sx={{ pl: 1 }}
        secondaryAction={hoveredItem === node.data.id && editItem !== node.data.id &&
          <>
            <IconButton edge="end" aria-label="edit" onClick={(event) => editHandler(event, node.data.id)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={(event) => deleteHandler(event, node.data.id)}>
              <Delete />
            </IconButton>
          </>
        }
        onClick={() => clickHandler(node)}
        onMouseEnter={() => setHoveredItem(node.data.id)}
        onMouseLeave={() => setHoveredItem(null)}
        onDragStart={(event) => dragStartHandler(event, node)}
        onDragOver={(event) => dragOverHandler(event)}
        onDrop={(event) => dropHandler(event, node)}
        draggable
      >
        {editItem !== node.data.id ? 
          <TreeItem opened={node.data.opened} name={node.data.name} type={node.data.type} /> : 
          <>
            <input type="text" ref={nameInput} defaultValue={node.data.name} />
            <IconButton  edge="end" aria-label="edit" onClick={(event) => confirmEditHandler(event, node.data.id)}>
              <Check />
            </IconButton>
            <IconButton  edge="end" aria-label="edit" onClick={(event) => cancelEditHandler(event)}>
              <Close />
            </IconButton>
          </>
        }
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