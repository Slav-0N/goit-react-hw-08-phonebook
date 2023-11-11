import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Avatar,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  List,
  Grid,
} from '@mui/material';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
// import ChildCareIcon from '@mui/icons-material/ChildCare';
const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Grid container justifyContent="flex-end" alignItems="center">
      <Grid item>
        <List>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h5" component="div">
                  {user.name}
                </Typography>
              }
              secondary={user.email}
            />
            <Button
              variant="contained"
              color="info"
              onClick={() => dispatch(logOut())}
              sx={{ ml: '100px', backgroundColor: 'red' }}
            >
              <LogoutIcon sx={{ m: '10px', backgroundColor: 'red' }} />
            </Button>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default UserMenu;
