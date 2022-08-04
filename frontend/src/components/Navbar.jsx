import * as React from 'react';
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';

import Drawer from 'react-modern-drawer'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import 'react-modern-drawer/dist/index.css'
import '../styles/style.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import toast from 'react-hot-toast';

import PersonIcon from '@mui/icons-material/Person';
import { Link as LinkRouter } from 'react-router-dom';
import userActions from '../redux/actions/userActions';

import shopActions from '../redux/actions/shopActions';
import PayPal from './PayPal';
import GooglePay from './GooglePay';
import DeleteIcon from '@mui/icons-material/Delete';



const pages = [
    { to: '/', name: 'HOME' },
    { to: '/shop', name: 'SHOP' },
    { to: '/about', name: 'ABOUT' }
];

const settings = [
  { to: '/account', name: 'Account ' },
];

const NavBar = () => {

  const dispatch = useDispatch()

  // HOOKS NAVBAR
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen((prevState) => !prevState)

  // CODIGO

  // GUARDO MI USUARIO
  const user = useSelector(store => store.userReducer.user)

  // DESLOGEO
  const logOut = async () => {
    const res = await dispatch(userActions.logOut(user.email))
    toast.success(`${res.data.message}`)
    // console.log(res.data.message)
  }

  // GUARDO MI CARRITO
  const carrito = useSelector(store => store.shopReducer.productsInShop)

  // CALCULA EL PRECIO TOTAL DEL CARRITO
  const priceTotal = carrito.reduce((total, producto) => total + producto.price * producto.cant, 0)

  // ELIMINO PRODUCTOS DEL CARRITO
  const removeToShop = (producto) => {
    dispatch(shopActions.deleteToShop(producto))
    toast.error('Product deleted')
  }

  // ELIMINO TODO EL CARRITO
  const clearAllShop = () => {
    dispatch(shopActions.deleteAllToShop())
    toast.error('No products in cart')
  }

  // AGREGA POR UNIDAD
  const addProductDrawer = (shoe) => dispatch(shopActions.addToShop(shoe))
  
  // ELIMINA POR UNIDAD
  const deleteProductDrawer = (shoe) => dispatch(shopActions.deleteOneProduct(shoe))

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* LOGO */}

          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LinkRouter
              to='/'
              style={{
                backgroundColor: '#fff'
              }}
            >
              <img src={logo} alt="logo" style={{ "height": "5rem", backgroundColor: "whitesmoke" }} />
            </LinkRouter>

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', },
              }}
            >
              {pages.map((page, index) => (
                <LinkRouter to={page.to} key={index} onClick={handleCloseNavMenu} className="linkR">
                  <MenuItem>
                    <Button textalign="center" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>{page.name}</Button>
                  </MenuItem>
                </LinkRouter>
              ))}
            </Menu>

          </Box>

          <Box>
            {/* BOTON CARRITO */}
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              className='drawer-ctn'
            >
              <div>

                {/* TITULO */}
                <div className='h2-ctn'>
                  <AddShoppingCartIcon sx={{ color: 'black' }} />
                  <h1 className='title-cart-shop'>SHOPPING CART</h1>
                </div>

                {/* ARTICULOS */}
                <div className="article-ctn px-3">

                  {
                    carrito.length !== 0 ?
                      (
                        carrito.map(producto => {
                          return (
                            // Cada producto
                            <div className='bg-gray-300 mb-3 rounded-md grid grid-cols-5'>

                              {/* img */}
                              <div className='flex items-center justify-center col-span-2'>

                                <img
                                  className='p-2'
                                  src={producto.image}
                                  alt={producto.name}
                                />
                              </div>

                              {/* info btn */}
                              <div className='flex flex-col items-center justify-center col-span-3'>

                                {/* info del producto */}
                                <div className='flex items-center justify-center flex-col gap-1'>
                                  <p className='name-product' style={{ color: 'black' }}>{producto.name}</p>
                                  <p style={{ color: 'black' }}>$ {producto.price} USD</p>
                                  <p style={{ color: 'black' }}>Unit: {producto.cant}</p>
                                </div>

                                {/* boton eliminar add y del */}
                                <div
                                  className='flex justify-center items-center'

                                >
                                  <button
                                    onClick={() => addProductDrawer(producto)}
                                    className='p-2 px-2 md:px-3 ml-1 bg-green-400 hover:bg-green-500 rounded-md font-black'>+
                                  </button>

                                  <button
                                    onClick={() => deleteProductDrawer(producto)}
                                    className='p-2 px-2 md:px-3 ml-1 bg-blue-400 hover:bg-blue-500 rounded-md font-black'>-
                                  </button>

                                  <button
                                    onClick={() => removeToShop(producto)}
                                    className="btndelet rounded-md p-1 md:p-2 bg-red-400 hover:bg-red-500">
                                    <DeleteIcon
                                      sx={{ cursor: 'pointer', color: 'white' }}
                                    />
                                  </button>

                                </div>

                              </div>

                            </div>

                          )
                        })

                      )
                      :
                      (
                        <p className='text-black'>No added products</p>
                      )
                  }


                </div>

                {/* FOOTER */}
                <div className='total-ctn px-3'>

                  <div className='w-full mt-2 mb-5 font-bold text-center text-black'>
                    <p className='bg-gray-300 py-2 rounded-md'>Total $ {priceTotal} USD</p>
                  </div>


                  <button
                    onClick={clearAllShop}
                    className='text-center rounded-md bg-red-600 hover:bg-red-500 cursor-pointer font-bold py-3 px-8'
                  >
                    Remove all
                  </button>

                  {
                    user
                      ? <div className='ctn-btn-pagos'>
                        <PayPal />
                        <GooglePay />
                      </div>
                      : <p className='text-black mt-5 text-lg'>Pleace{' '}<LinkRouter to='/signIn' className='uppercase font-bold'>signin</LinkRouter>{' '}to realice the purchase</p>
                  }

                </div>

              </div>

            </Drawer>

          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              // backgroundColor: '#fff'
            }}
          >
            <img src={logo} alt="logo" style={{ "height": "5rem", backgroundColor: "whitesmoke" }} />
          </Typography>




          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((op, index) => (
              <LinkRouter to={op.to} key={index} onClick={handleCloseNavMenu} className="linkR">
                <MenuItem  >
                  <Typography className='btnNav' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} textalign="center" sx={{ color: "whitesmoke", fontWeight: "bold", fontSize: 20, textShadow: " 0 1px 0 rgb(255 255 255), 0 -1px 2px rgb(0 0 0 / 30%), 0 -2px 2px rgb(0 0 0 / 20%), 0 0 3px rgb(0 0 0 / 10%)" }}>{op.name}</Typography>
                </MenuItem>
              </LinkRouter>
            ))}
          </Box>
          <div
            onClick={toggleDrawer}
            className='flex items-center justify-center'
          >
            <ShoppingCartIcon className='hidden md:block' sx={{ cursor: 'pointer', margin: '10px' }} />
            {
              carrito.length !== 0
                ?
                <div className='badge hidden'>
                  <span>{carrito.length}</span>
                </div>
                : <></>
            }
          </div>
          <MenuItem>

            {/* BOTON ADMIN */}
            {
              user &&
                user.role === 'admin'
                ? <LinkRouter
                  to='/adminForm'
                >
                  <button className='text-3xl mr-4 hidden md:block'>👮‍♀️</button>
                </LinkRouter>
                : <></>
            }
            <Box sx={{ flexGrow: 0 }}>

              <Tooltip title="Open settings" >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user ?
                    <Box >
                      <Avatar className='hidden md:block' alt='' src={user.photoUrl} />
                    </Box>
                    :
                    <Box>
                      <PersonIcon fontSize='large' sx={{ color: '#fff' }} />
                    </Box>
                  }
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {user ?
                  <MenuItem>
                    <Typography onClick={logOut} textalign="center">LogOut</Typography>
                  </MenuItem>

                  :
                  <Box>
                    {settings.map((setting, index) => (
                      <LinkRouter to={setting.to} key={index} onClick={handleCloseUserMenu} className="linkR">
                        <MenuItem >
                          <Typography textalign="center">{setting.name}</Typography>
                        </MenuItem>
                      </LinkRouter>
                    ))}

                  </Box>
                }
              </Menu>

            </Box>

          </MenuItem>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ?
                <MenuItem>
                  <Typography onClick={logOut} textalign="center">LogOut</Typography>
                </MenuItem>

                :
                <Box>
                  {settings.map((setting, index) => (
                    <LinkRouter to={setting.to} key={index} onClick={handleCloseUserMenu} className="linkR">
                      <MenuItem >
                        <Typography className='p-6' textalign="center">{setting.name}</Typography>
                      </MenuItem>
                    </LinkRouter>
                  ))}

                </Box>
              }
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );

};
export default NavBar