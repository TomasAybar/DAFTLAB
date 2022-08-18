import '../../src/styles/style.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import adminActions from "../redux/actions/adminActions";
import shoesActions from "../redux/actions/shoesActions";

export default function AdminForm() {
    const [shoes, setShoes] = useState([]);
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shoesActions.getShoes())
            .then(res => setShoes(res.data.response))

        // eslint-disable-next-line
    }, [reload])

    // AGREGAR SHOE
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: e.target[0].value,
            brand: e.target[1].value,
            colorway: e.target[2].value,
            price: e.target[3].value,
            image: [
                e.target[4].value,
                e.target[5].value,
                e.target[6].value,
                e.target[7].value,
            ],
            description: e.target[8].value,
            stock: e.target[9].value,
            type: e.target[10].value,
        };

        const token = localStorage.getItem('token');
        const res = await dispatch(adminActions.addShoe(data, token));
        toast.success(`${res.data.message}`);

        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        e.target[4].value = "";
        e.target[5].value = "";
        e.target[6].value = "";
        e.target[7].value = "";
        e.target[8].value = "";
        e.target[9].value = "";
        e.target[10].value = "";

        setReload(!reload);
    };

    // REMOVE SHOE
    const handleSubmitDelete = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        const res = await dispatch(adminActions.removeShoe(e.target[0].value, token));
        toast.success(`${res.data.message}`);
        e.target[0].value = "";

        setReload(!reload);
    };

    const colors = ["Select Colorway", "black", "grey", "brown", "white", "green", "orange", "cream", "blue", "red", "purple", "multi"]
    return (
        <div className="adminFormCtn">
            <div className="backColor">
                <div className="formAdd">
                    <form className="form-add" onSubmit={handleSubmit}>
                        <div className="h2cont">
                            <h1 className="add-title">Add Shoes</h1>
                        </div>
                        <div className="input-boxes">
                            <div className="input-box-add">
                                <input
                                    className="input-admin"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="input-box-add">
                                <select className="input-admin">
                                    <option value="">Select Branch</option>
                                    <option value="62d836532f6e1f16ca3df337">Nike</option>
                                    <option value="62d838004fca1cb3de1808cb">Adidas</option>
                                    <option value="62d8392a4fca1cb3de1808cd">Jordan</option>
                                    <option value="62d839d04fca1cb3de1808ce">New Balance</option>
                                    <option value="62d83a704fca1cb3de1808cf">Asics</option>
                                    <option value="62d83b334fca1cb3de1808d1">Balenciaga</option>
                                    <option value="62d83c814fca1cb3de1808d6">Dior</option>
                                    <option value="62d83e2d4fca1cb3de1808da">
                                        Louis Vuittom
                                    </option>
                                </select>
                            </div>
                            <div className="input-box-add">
                                <select className="input-admin">
                                    {colors?.map((col, index) => (
                                        <option key={index}>{col}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-box-add">
                                <input
                                    className="input-admin"
                                    type="number"
                                    placeholder="Price"
                                    required
                                />
                            </div>
                            <div className="input-box-add">
                                <input
                                    className="input-admin"
                                    type="text"
                                    placeholder="url img"
                                    required
                                />
                            </div>
                            <div className="input-box-add">
                                <input
                                    className="input-admin"
                                    type="text"
                                    placeholder="url img"
                                    required
                                />
                            </div>
                            <div className="input-box-add">
                                <input
                                    className="input-admin"
                                    type="text"
                                    placeholder="url img"
                                    required
                                />
                            </div>
                            <div className="input-box-add">
                                <input
                                    className="input-admin"
                                    type="text"
                                    placeholder="url img"
                                />
                            </div>
                            <div className="input-box-add">
                                <input
                                    className="input-admin"
                                    type="text"
                                    placeholder="Description"
                                    required
                                />
                            </div>
                            <div className="input-box-add">
                                <input
                                    className="input-admin"
                                    type="number"
                                    placeholder="Stock"
                                    required
                                />
                            </div>
                            <div className="input-box-add">
                                <select name="type" id="" required className="input-admin">
                                    <option value="">Select Type</option>
                                    <option value="62d81e84db36588e63203de7">urban</option>
                                    <option value="62d827534fca1cb3de1808b1">sport</option>
                                    <option value="62d828964fca1cb3de1808bd">fancy</option>
                                </select>
                            </div>
                        </div>
                        <div className="button-ctn">
                            <input className="accountbtn" type="submit" value="add product" />
                        </div>
                    </form>
                </div>

                <div className="formDelete">
                    <form className="form-delete" onSubmit={handleSubmitDelete}>
                        <div className="h2cont">
                            <h1 className="add-title">Remove Shoes</h1>
                        </div>
                        <div className="input-boxes">
                            <div className="input-box-add">
                                <select name="type" id="" required className="input-admin-delete">
                                    <option>Select</option>
                                    {shoes?.map((shoe) => (
                                        <option key={shoe._id} value={shoe._id}>
                                            {shoe.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="button-ctn">
                                <input
                                    className="accountbtn"
                                    type="submit"
                                    value="delete product"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}