import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import { ListItemIcon, ListItemText, Typography } from '@mui/material';
import { memo } from 'react';

const TreeItem = ({type, opened, name}: {type: string, opened: boolean, name: string}) => {
  console.log('TREE ITEM RENDERED');
  return <>
    <ListItemIcon sx={{minWidth: '30px'}}>
      {type === 'folder' ? (opened ? <KeyboardArrowDown color="primary"/> : <KeyboardArrowRight color="primary"/>) : null}
    </ListItemIcon>
    <ListItemText>
      <Typography whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{name}</Typography>
    </ListItemText>
  </>;
};

export default memo(TreeItem);