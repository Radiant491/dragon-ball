import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" color="secondary" startIcons>Text</Button>
      <Button variant="contained" color="success">Contained</Button>
      <Button variant="outlined" color="error">Outlined</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
    </Stack>
  );
}
