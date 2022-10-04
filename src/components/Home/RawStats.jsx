import React from 'react'
import { Container, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const stats = ["ine", "two"];

const RawStats = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1" color="initial">Raw stats for 2022</Typography>
      <List>
              {stats.map(x =>
                <ListItem>
                  <ListItemText
                    primary={x}
                  />
                </ListItem>
              )}
            </List>
    </Container>
  )
}

export default RawStats