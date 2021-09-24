import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Link, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReceiptIcon from '@material-ui/icons/Receipt';
import useAuth from '../../hooks/useAuth';
import CalendarIcon from '../../icons/Calendar';
import ChartPieIcon from '../../icons/ChartPie';
import ChartSquareBarIcon from '../../icons/ChartSquareBar';
import ClipboardListIcon from '../../icons/ClipboardList';
import FolderOpenIcon from '../../icons/FolderOpen';
import ShoppingBagIcon from '../../icons/ShoppingBag';
import ShoppingCartIcon from '../../icons/ShoppingCart';
import UserIcon from '../../icons/User';
import UsersIcon from '../../icons/Users';
import Logo from '../Logo';
import NavSection from '../NavSection';
import Scrollbar from '../Scrollbar';

const sections = [
  {
    title: 'General',
    items: [
      {
        title: 'Tela Inicial',
        path: '/dashboard',
        icon: <ChartSquareBarIcon fontSize="small" />
      },
      {
        title: 'Analytics',
        path: '/dashboard/analytics',
        icon: <ChartPieIcon fontSize="small" />
      },
      {
        title: 'Financeiro',
        path: '/dashboard/finance',
        icon: <ShoppingBagIcon fontSize="small" />
      },
      {
        title: 'Sua Conta',
        path: '/dashboard/account',
        icon: <UserIcon fontSize="small" />
      }
    ]
  },
  {
    title: 'Controle AdminCerti',
    items: [
      {
        title: 'Clientes',
        path: '/dashboard/customers',
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: 'Lista',
            path: '/dashboard/customers'
          },
          {
            title: 'Detalhes',
            path: '/dashboard/customers/1'
          },
          {
            title: 'Editar',
            path: '/dashboard/customers/1/edit'
          }
        ]
      },
      {
        title: 'Certidões',
        path: '/dashboard/products',
        icon: <ShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: 'Lista',
            path: '/dashboard/products'
          },
          {
            title: 'Cadastrar',
            path: '/dashboard/products/new'
          },
          {
            title: 'Variações',
            path: '/dashboard/products/variations'
          }
        ]
      },
      {
        title: 'Cartórios',
        icon: <FolderOpenIcon fontSize="small" />,
        path: '/dashboard/orders',
        children: [
          {
            title: 'Listar',
            path: '/dashboard/orders'
          },
          {
            title: 'Detalhes',
            path: '/dashboard/orders/1'
          }
        ]
      },
      {
        title: 'Pedidos',
        path: '/dashboard/invoices',
        icon: <ReceiptIcon fontSize="small" />,
        children: [
          {
            title: 'Listar',
            path: '/dashboard/invoices'
          },
          {
            title: 'Detalhes',
            path: '/dashboard/invoices/1'
          }
        ]
      }
    ]
  },
  {
    title: 'Aplicativos',
    items: [
      {
        title: 'Kanban',
        path: '/dashboard/kanban',
        icon: <ClipboardListIcon fontSize="small" />
      },
      {
        title: 'Calendário',
        path: '/dashboard/calendar',
        icon: <CalendarIcon fontSize="small" />
      }
    ]
  }
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const { user } = useAuth();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: 'none',
              xs: 'flex'
            },
            justifyContent: 'center',
            p: 2
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40
              }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'background.default',
              borderRadius: 1,
              display: 'flex',
              overflow: 'hidden',
              p: 2
            }}
          >
            <RouterLink to="/dashboard/account">
              <Avatar
                src={user.avatar}
                sx={{
                  cursor: 'pointer',
                  height: 48,
                  width: 48
                }}
              />
            </RouterLink>
            <Box sx={{ ml: 2 }}>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                {user.name}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/pricing"
                >
                  {user.plan}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          width: 280
        }
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DashboardSidebar;
