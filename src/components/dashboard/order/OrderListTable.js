import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  InputAdornment
} from '@material-ui/core';
import ArrowRightIcon from '../../../icons/ArrowRight';
import PencilAltIcon from '../../../icons/PencilAlt';
import Label from '../../Label';
import MoreMenu from '../../MoreMenu';
import Scrollbar from '../../Scrollbar';
import SearchIcon from '../../../icons/Search';
import OrderListBulkActions from './OrderListBulkActions';
import {fetchStates} from '../../helpers/ibge';

const getStatusLabel = (paymentStatus) => {
  const map = {
    canceled: {
      color: 'error',
      text: 'Canceled'
    },
    completed: {
      color: 'success',
      text: 'Completed'
    },
    pending: {
      color: 'warning',
      text: 'Pending'
    },
    rejected: {
      color: 'error',
      text: 'Rejected'
    }
  };

  const { text, color } = map[paymentStatus];

  return (
    <Label color={color}>
      {text}
    </Label>
  );
};

const applyPagination = (orders, page, limit) => orders
  .slice(page * limit, page * limit + limit);

const OrderListTable = (props) => {
  const { orders, ...other } = props;
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);

  const handleSelectAllOrders = (event) => {
    setSelectedOrders(event.target.checked
      ? orders.map((order) => order.id)
      : []);
  };

  const handleSelectOneOrder = (event, orderId) => {
    if (!selectedOrders.includes(orderId)) {
      setSelectedOrders((prevSelected) => [...prevSelected, orderId]);
    } else {
      setSelectedOrders((prevSelected) => prevSelected.filter((id) => id !== orderId));
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
  };

  const paginatedOrders = applyPagination(orders, page, limit);
  const enableBulkActions = selectedOrders.length > 0;
  const selectedSomeOrders = selectedOrders.length > 0 && selectedOrders.length < orders.length;
  const selectedAllOrders = selectedOrders.length === orders.length;
  
  const States = () => {
  }
  const [states, setStates] = useState();
  useEffect(() => {
    fetchStates().then((states) => {
      setStates(states); 
    });
  }, []);

  return (
    <>
      <Card {...other}>
        <CardHeader
          action={<MoreMenu />}
          title="Filtros"
        />
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 700,
            float: 'left',
          }}
        >
          <TextField
          fullWidth
          label="Estado"
          name="estado"
          select
          SelectProps={{ native: true }}
          variant="outlined"
        >
          {/*{states.map((state) => {
            const {sigla, nome} = state;
            
                <option 
                key={sigla}
                value={sigla}
                >
                  {nome}
                </option>
          })}*/}
        </TextField>
        </Box>
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 750,
            float: 'right',
          }}
        >
            <TextField
          fullWidth
          label="Cidade"
          name="category"
          select
          SelectProps={{ native: true }}
          variant="outlined"
        >
        
        </TextField>
        </Box>
      </Card>

  

      {/* TABELA CART??RIOSC  */}

      
      <Card sx={{ mt: 2 }}>
        <CardHeader
          action={<MoreMenu />}
          title="Cart??rios"
        />
        <Divider />
        <Scrollbar>
          <Box sx={{ minWidth: 1150 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAllOrders}
                      color="primary"
                      indeterminate={selectedSomeOrders}
                      onChange={handleSelectAllOrders}
                    />
                  </TableCell>
                  <TableCell>
                    CNPJ
                  </TableCell>
                  <TableCell>
                    Nome Oficial
                  </TableCell>
                  <TableCell>
                    Endere??o
                  </TableCell>
                  <TableCell>
                    CEP
                  </TableCell>
                  <TableCell>
                    Status
                  </TableCell>
                  <TableCell align="right">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedOrders.map((order) => {
                  const isOrderSelected = selectedOrders.includes(order.id);

                  return (
                    <TableRow
                      hover
                      key={order.id}
                      selected={selectedOrders.indexOf(order.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isOrderSelected}
                          color="primary"
                          onChange={(event) => handleSelectOneOrder(event, order.id)}
                          value={isOrderSelected}
                        />
                      </TableCell>
                      <TableCell>
                        <Link
                          color="textPrimary"
                          component={RouterLink}
                          to="/dashboard/orders/1"
                          underline="none"
                          variant="subtitle2"
                        >
                          {order.number}
                        </Link>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {format(order.createdAt, 'dd MMM yyyy | HH:mm')}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          color="textPrimary"
                          variant="subtitle2"
                        >
                          {order.customer.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {order.customer.email}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {order.paymentMethod}
                      </TableCell>
                      <TableCell>
                        {order.totalAmount}
                      </TableCell>
                      <TableCell>
                        {getStatusLabel(order.status)}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <PencilAltIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          component={RouterLink}
                          to="/dashboard/orders/1"
                        >
                          <ArrowRightIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          count={orders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
      <OrderListBulkActions
        open={enableBulkActions}
        selected={selectedOrders}
      />
    </>
  );
};

OrderListTable.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderListTable;
