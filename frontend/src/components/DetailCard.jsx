import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import shopActions from '../redux/actions/shopActions';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import toast from 'react-hot-toast';
import { Link as LinkRouter } from 'react-router-dom';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const DetailCard = ({ shoes }) => {
  // const dispatch = useDispatch();

  const dispatch = useDispatch();

  // console.log("👠 ~ file: DetailCard.jsx ~ line 4 ~ DetailCard ~ shoes", shoes)


  const addCarrito = ({ shoes }) => {
    const product = {
      image: shoes.image[0],
      name: shoes.name,
      price: shoes.price,
      id: shoes._id,
      cant: 1
    }

    dispatch(shopActions.addToShop(product))

    // localStorage.setItem('carrito', JSON.stringify() )
    // console.log('alerta agregaste un producto')
    toast.success('Product successfully added')
  }

  const logoShoes = () => {
    if (shoes.brand === "62d836532f6e1f16ca3df337") {
      return (<div className='logoDetail'>

        <img className="logosDetailImg" src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-700x394.png" alt="adidas" />
      </div>)
    }
    else if (shoes.brand === "62d838004fca1cb3de1808cb") {
      return (
        <div className='logoDetail'>
          <img className="logosDetailImg" src="https://logodownload.org/wp-content/uploads/2014/07/adidas-logo.png" alt="adidas" />
        </div>)
    }
    else if (shoes.brand === "62d8392a4fca1cb3de1808cd") {
      return (
        <div className='logoDetail'>

          <img className="logosDetailImg" src="https://logodownload.org/wp-content/uploads/2019/05/jordan-logo.png" alt="" />

        </div>)
    }
    else if (shoes.brand === "62d839d04fca1cb3de1808ce") {
      return (
        <div className='logoDetail'>

          <img className="logosDetailImg" src="https://www.nicepng.com/png/detail/251-2510586_new-balance-png-logo-ideas-new-balance-logo.png" alt="adidas" />
        </div>)
    }
    else if (shoes.brand === "62d83a704fca1cb3de1808cf") {
      return (
        <div className='logoDetail'>

          <img className="logosDetailImg" src="https://logodownload.org/wp-content/uploads/2017/06/asics-logo.png" alt="adidas" />
        </div>)
    }
    else if (shoes.brand === "62d83b334fca1cb3de1808d1") {
      return (
        <div className='logoDetail'>

          <img className="logosDetailImg" src="https://1000marcas.net/wp-content/uploads/2020/10/Balenciaga-Logo-500x283.png" alt="adidas" />
        </div>)
    }
    else if (shoes.brand === "62d83c814fca1cb3de1808d6") {
      return (
        <div className='logoDetail'>

          <img className="logosDetailImg" src="https://www.seekpng.com/png/full/194-1944190_your-account-dior-new-logo.png" alt="dior" />
        </div>)
    }
    else if (shoes.brand === "62d83e2d4fca1cb3de1808da") {
      return (
        <div className='logoDetail'>

          <img className="logosDetailImg" src="https://download.logo.wine/logo/Louis_Vuitton/Louis_Vuitton-Logo.wine.png" alt="btn" />
        </div>)
    }

    //console.log("holaaaas")
  }


  return (
    <>
      {
        shoes &&
        <div className='sm:container sm:mx-auto grid grid-cols-5 p-2 sm:p-10 gap-5 border bg-white rounded-md'

        >

          {/* card productos y descripcion */}
          <div className='col-span-5 md:col-span-3 flex justify-center items-center flex-col p-1'>


            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item> <img
                    src={shoes.image[0]}
                    alt='producto'
                  /></Item>
                </Grid>

                <Grid item xs={6}>
                  <Item><img
                    src={shoes.image[1]}
                    alt='producto'
                  /></Item>
                </Grid>

                <Grid item xs={6}>
                  <Item sx={{
                    "backgroundImage": `url(${shoes.image[2]})`,
                    "height": "100%",
                    "backgroundSize": "cover",
                    "backgroundPosition": "center",
                    "objectFit": "cover"
                  }}></Item>
                </Grid>

                <Grid item xs={12}>
                  <Item><img
                    src={shoes.image[0]}
                    alt='producto'
                  /></Item>
                </Grid>

              </Grid>
            </Box>
            {/* Descripcion */}


          </div>

          {/* Nombre precio talle y botones */}
          <div className='col-span-5 md:col-span-2 p-2 sm:p-5 flex justify-around flex-col border boxDetailsFixed'>

            {/* Nombre precio y talle */}
            <div className='boxFixed'>
              <div className=' text-base lg:text-lg text-center'>
              <div className='hidden md:block'>
                {logoShoes()}
              </div>
                

                <h3 className='mb-2 text-2xl font-bold text-center h2Name'>{shoes.name}</h3>
                <Stack className='mb-2' spacing={1}>
                  <Rating name="size-large" defaultValue={2} size="large" />
                </Stack>
                <p className='mb-4 text-2xl font-bold'>u$s {shoes.price}</p>
                <div className='metodosPago text-left '>
                  <p> <LocalShippingIcon />  FREE SHIPPING OVER $18,999</p>
                  <p><CreditCardIcon /> UP TO 6 INSTALLMENTS WITHOUT INTEREST!</p>
                  <p><KeyboardReturnIcon />FREE RETURNS NOT YOUR SIZE? YOU CAN RETURN IT WITHIN 60 DAYS</p>
                </div>
                <p className='text-left txtDescription'>{shoes.description}</p>

                <select name="" id="" className='p-2 rounded-md w-2/5 sm:w-2/3 hover:cursor-pointer text-center'>
                  <option value="">10.5 US</option>
                  <option value="">11.5 US</option>
                  <option value="">9.5 US</option>
                  <option value="">12.5 US</option>
                </select>


                {/* Botones */}
                <div className=' flex items-center justify-center flex-col gap-5 py-4 md:py-8 md:text-sm'>

                  <button
                    className='bg-green-600 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/5 sm:w-2/3'
                    onClick={() => addCarrito({ shoes })}
                  >Add to cart</button>

                  <LinkRouter
                    className='bg-green-600 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/5 sm:w-2/3'
                    to='/shop'>Continue shopping
                  </LinkRouter>
                  {/* <button className='bg-green-600 text-white font-bold px-1 lg:px-5 py-2 lg:py-2 text-sm lg:text-base rounded-md hover:bg-indigo-700 shadow-md w-2/5 sm:w-2/3'>Continue shopping</button> */}


                </div>


              </div>
            </div>

          </div>

        </div>


      }

    </>
  )

}

export default DetailCard;