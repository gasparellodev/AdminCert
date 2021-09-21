import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import Scrollbar from '../../Scrollbar';

const OrderItems = (props) => {
  const { orderItems, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader title="Pedidos Cartório" />
      <Divider />
      <Scrollbar>
        <Box sx={{ minWidth: 700 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Id Pedido
                </TableCell>
                <TableCell>
                  Cliente
                </TableCell>
                <TableCell>
                  Data
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={orderItems.length}
        onPageChange={() => { }}
        onRowsPerPageChange={() => { }}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

OrderItems.propTypes = {
  orderItems: PropTypes.array.isRequired
};

export default OrderItems;
