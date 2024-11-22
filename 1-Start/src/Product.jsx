import React from 'react'

function Product(props) {
    console.log(props);

    return (
        <div>

            <div>İsim : {props.ürünad}</div>
            <div> Fiyat : {props.fiyat}</div>

        </div>
    )
}

export default Product
