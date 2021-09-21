import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import Logo from '../../Logo';
import Scrollbar from '../../Scrollbar';

const InvoicePreview = (props) => {
  const { invoice, ...other } = props;

  return (
    <Paper {...other}>
      <Scrollbar>
        <Box
          sx={{
            minWidth: 800,
            p: 6
          }}
        >
          <Grid
            container
            justifyContent="space-between"
          >
            <Grid item>
              <Logo />
              <Typography
                color="textPrimary"
                variant="h6"
              >
                www.admincert.com.br
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="right"
                color="textPrimary"
                variant="h4"
              >
                AdminCerti
              </Typography>
              <Typography
                align="right"
                color="textPrimary"
                variant="subtitle2"
              >
                Pedido Teste #000001
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ my: 4 }}>
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  Rua Teste
                  <br />
                  Number Teste
                  <br />
                  Brasil
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  BRWORKS
                  <br />
                  CNPJ TESTE
                  <br />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="right"
                  color="textPrimary"
                  variant="body2"
                >
                  teste@teste.com.br
                  <br />
                  11 1111-1111
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ my: 4 }}>
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="subtitle2"
                >
                  Data do Pedido
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  {format(invoice.dueDate, 'dd MMM yyyy')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="subtitle2"
                >
                  Data de Saída
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  {format(invoice.issueDate, 'dd MMM yyyy')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="subtitle2"
                >
                  Id do Pedido
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="body2"
                >
                  #000001
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ my: 4 }}>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="subtitle2"
            >
              Cobrança em nome de
            </Typography>
            <Typography
              color="textPrimary"
              variant="body2"
            >
              Matheus Bavaresco
              <br />
              Teste
              <br />
              Teste
              <br />
              Teste
            </Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Produtos do Pedido
                </TableCell>
                <TableCell />
                <TableCell align="right">
                  Valor Unitário
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoice.items.map((items) => (
                <TableRow key={items.id}>
                  <TableCell>
                    Certidão de Teste
                  </TableCell>
                  <TableCell />
                  <TableCell align="right">
                    {numeral(items.unitAmount)
                      .format(`${items.currency}0,0.00`)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Subtotal
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.subtotalAmount)
                    .format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Taxas
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.taxAmount)
                    .format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Total
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.totalAmount)
                    .format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box sx={{ mt: 2 }}>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Notas
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Ao receber seu pedido apresentar esse documento para validação
            </Typography>
          </Box>
        </Box>
      </Scrollbar>
    </Paper>
  );
};

InvoicePreview.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default InvoicePreview;
