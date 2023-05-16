import React, { useState } from 'react'
import InputPhoto from '../../common/InputPhoto'
import { WomenHTTP } from '../../../services/boards/WomenHTTP';
import { Link } from 'react-router-dom';
import Form from '../../common/Form';


function AddWoman() {
    const [name, setName] = useState('');console.log(name);
    const [description, setDescription] = useState('');
    const [imrCartoo, setImgCartoon] = useState('');
    const [imgReal, setImgReal] = useState('');
    const [eyes, setEyes] = useState('');
    const [hair, setHair] = useState('');

    const createWoman = (event) => {
        const womanValues = {
            name: name,
            description: description,
            imgCartoon: imrCartoo,
            imgReal: imgReal,
            ojos: eyes,
            pelo: hair
        };
console.log(womanValues);
        WomenHTTP().createWoman(womanValues)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Form
                onChangeName={(e) => setName(e.target.value)}
                onChangeDescription={(e) => setDescription(e.target.value)}
                ImgReal={setImgReal}
                ImgCartoon={setImgCartoon}
                onChangeEyes={(e) => setEyes(e.target.value)}
                onChangeHair={(e) => setHair(e.target.value)}
            />
            
            <Link to="/">
                <button onClick={() => createWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>
        </div>
    )
}

export default AddWoman