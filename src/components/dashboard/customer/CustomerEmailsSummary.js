import { useState, useCallback, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from '@material-ui/core';
import { customerApi } from '../../../__fakeApi__/customerApi';
import useMounted from '../../../hooks/useMounted';
import MailIcon from '../../../icons/Mail';

const emailOptions = [
  'Reenviar último Pedido',
  'Enviar recuperação de senha',
  'Enviar Verificação'
];

const CustomerEmailsSummary = (props) => {
  const mounted = useMounted();
  const [emailOption, setEmailOption] = useState(emailOptions[0]);
  const [setEmails] = useState([]);

  const getEmails = useCallback(async () => {
    try {
      const data = await customerApi.getCustomerEmails();

      if (mounted.current) {
        setEmails(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <Card {...props}>
      <CardHeader title="Emails" />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          name="option"
          onChange={(event) => setEmailOption(event.target.value)}
          select
          SelectProps={{ native: true }}
          value={emailOption}
          variant="outlined"
        >
          {emailOptions.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </TextField>
        <Box sx={{ mt: 1 }}>
          <Button
            color="primary"
            startIcon={<MailIcon fontSize="small" />}
            variant="contained"
          >
            Enviar Email
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomerEmailsSummary;
