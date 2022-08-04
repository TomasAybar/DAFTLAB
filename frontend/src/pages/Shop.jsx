import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import shoesActions from '../redux/actions/shoesActions';
import CardsShop from '../components/CardsShop';
import '../styles/style.css'
/*optionsFilter*/
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import { SpinnerCircular } from 'spinners-react';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
function Shoop() {
    const dispatch = useDispatch()
    const [inputSearch, setInputSearch] = useState("")
    const [brand, setBrand] = React.useState('');
    const [shoes, setShoes] = React.useState([]);
    const [ord, setOrd] = React.useState('');
    const [reload, setReload] = React.useState(false);
    const [filterShoes, setfilterShoes] = React.useState([]);



    // HOOKS
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
    }, []);

    useEffect(() => {
        //dispatch(shoesActions.filterShoes(inputSearch))
        getShoes()

        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        if (shoes?.length > 0) {
            const filterRender = shoes?.filter(shoe =>
                shoe.name.toLowerCase().startsWith(inputSearch.trim().toLowerCase())
                || shoe.brand.name.toLowerCase().startsWith(inputSearch.trim().toLowerCase())
                // || shoe.type[0].name.toLowerCase().startsWith(inputSearch.trim().toLowerCase())
            )
            setfilterShoes(filterRender)
        }
        // eslint-disable-next-line
    }, [inputSearch])


    const getShoes = async (event) => {
        const res = await dispatch(shoesActions.getShoes())
        // console.log("🚀 ~ file: Shop.jsx ~ line 53 ~ handleChangeBrand ~ res", res)
        setShoes(res.data.response)
        setfilterShoes(res.data.response)
        setInputSearch("")
        setBrand("")
        setOrd("")
    }

    const order = (event) => {
        console.log(event)
        if (event.target.value === "op1") {
            shoes?.sort((a, b) => a.price - b.price);
            setOrd(event.target.value)
            setReload(!reload)
        }
        else if (event.target.value === "op2") {
            shoes?.sort((a, b) => b.price - a.price)
            setReload(!reload)
            setOrd(event.target.value)
        }

    }

    const handleChangeType = async (id) => {
        console.log(id);
        const res = await dispatch(shoesActions.getShoesByType(id))
        setShoes(res.response.response)
        setfilterShoes(res.response.response)
    }

    const handleChangeBrand = async (event) => {
        const res = await dispatch(shoesActions.getShoesByBrand(event.target.value))
        console.log("🚀 ~ file: Shop.jsx ~ line 53 ~ handleChangeBrand ~ res", res)
        setShoes(res.response.response)
        setfilterShoes(res.response.response)
        setBrand(event.target.value)
    }


    return (
        <>
            <div className='Header bg-gray-300'>

                <div className='filtersShop'>
                    <Box className='hidden md:block'>
                        <button className='btnColors p-2' onClick={() => handleChangeType("62d81e84db36588e63203de7")}>Urban</button>
                    </Box>
                    <Box className='hidden md:block'>
                        <button className='btnColors p-2' onClick={() => handleChangeType("62d827534fca1cb3de1808b1")}>Sport</button>
                    </Box>
                    <Box className='hidden md:block'>
                        <button className='btnColors p-2' onClick={() => handleChangeType("62d828964fca1cb3de1808bd")}>Fancy</button>
                    </Box>

                    <div>
                        <input value={inputSearch} className='input text-center' type="text" placeholder='Search Shoes' onChange={(e) => setInputSearch(e.target.value)} />
                    </div>

                    <Box className='hidden md:block'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={brand}
                                onChange={handleChangeBrand}
                                label="Brand"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"62d836532f6e1f16ca3df337"}>Nike</MenuItem>
                                <MenuItem value={"62d838004fca1cb3de1808cb"}>Adidas</MenuItem>
                                <MenuItem value={"62d8392a4fca1cb3de1808cd"}>Jordan</MenuItem>
                                <MenuItem value={"62d839d04fca1cb3de1808ce"}>New Balance</MenuItem>
                                <MenuItem value={"62d83a704fca1cb3de1808cf"}>Asics</MenuItem>
                                <MenuItem value={"62d83b334fca1cb3de1808d1"}>Balenciaga</MenuItem>
                                <MenuItem value={"62d83c814fca1cb3de1808d6"}>Dior</MenuItem>
                                <MenuItem value={"62d83e2d4fca1cb3de1808da"}>Louis Vuittom</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box className='hidden md:block'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={ord}
                                onChange={order}
                                label="Brand"
                            >
                                <MenuItem value={"op1"}>Lowest to highest price</MenuItem>
                                <MenuItem value={"op2"}>Highest to lowest price</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>

                    <Box className='hidden md:block'>
                        <button className='btnColors' onClick={() => getShoes()} ><DeleteIcon /></button>
                    </Box>

                </div>

            </div>

            {/* CONTENEDOR DE CARDS */}
            <div className='contFilterCards'>

                <div className='bodyShop'>

                    {
                        loading
                            ? <SpinnerCircular />

                            : filterShoes.length > 0
                                ? filterShoes?.map((shoes, index) => <CardsShop key={index} shoes={shoes} />)
                                : shoes.map((shoes, index) => <CardsShop key={index} shoes={shoes} />)
                                    ? <h1 className='text-white uppercase font- text-xl'>No matches found</h1>
                                    : null
                    }

                </div>
            </div>

        </>

    )
}

export default Shoop;