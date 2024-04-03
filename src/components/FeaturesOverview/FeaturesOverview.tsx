import { Check, Close } from '@mui/icons-material';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import './FeaturesOverview.css';

const FeaturesOverview = () => {
  const features = [
    { title: 'Upload folders', description: 'You are able to upload folders with all its content including subfolders', done: true },
    { title: 'Edit files', description: 'The changes will remain during the session', done: true },
    { title: 'Edit files name', description: 'Upon hovering on a element name you\'ll see the option to edit the name of the folder or item', done: true },
    { title: 'Remove nodes', description: 'Hovering on a file name will also provide the option to remove and element from the node, If it is a folder all the children will be removed as well', done: true },
    { title: 'Reorder nodes', description: 'You can drag and drop any file or folder and change where it is located', done: true },
    { title: 'Search files', description: 'Since a large amount of files can be uploaded a search by name functionality will be provided', done: false },
    { title: 'Sidebar resizing and responsive', description: '', done: false },
  ];

  return (
    <>
      <Typography variant="h3" padding={4}>Web base IDE</Typography>
      <Box className="features-overview-container">
        <Box className="pad-side-large">
          <Typography variant="h5">Overview</Typography>
          <Typography variant="body1">
            The purpose of this project was to develop an application that would allow me to practice concepts that I did not feel comfortable with or that were even unknown to me. The idea was to face the situations and problems that other developers experience in other projects.<br />
            After several days looking for inspiration I realized that I could find this in one of the tools that I use daily: an IDE...
          </Typography>
        </Box>
        <Box className="mar-top-large pad-side-large">
          <Typography variant="h5">Features</Typography>
          <List sx={{ width: '95%', margin: '0 auto' }}>
            {features.map(feature => <ListItem key={feature.title} color="warning">
              <ListItemAvatar>
                <Avatar sx={{backgroundColor: 'var(--secondary)'}}>
                  {feature.done ? <Check color="info" /> : <Close color="error" />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="body1">{feature.title}</Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </ListItemText>
            </ListItem>)}
          </List>
        </Box>
      </Box>
    </>
  )
};

export default FeaturesOverview;