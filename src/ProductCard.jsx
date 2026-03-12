import './App.css'
import Badge from './Badge'


function ProductCard({name,price,emoji,description="Non disponible"}){

    return (
        <div>
            <h3>Name  : {name}</h3>
            <h3>Price : {price} €</h3>
            <h3>Description : {description} </h3>
            <h3>Emoji : {emoji} </h3>
            <Badge>PROMO</Badge>
            <hr />
        </div>
    )
}

export default ProductCard