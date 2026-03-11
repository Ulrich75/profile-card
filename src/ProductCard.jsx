import profileImage from './assets/user-profile.svg'
import './App.css'


function ProductCard(){

    const nom = "Ali";
    const prenom = "Mohamed";

    return (
        <div>
            <h2>Nom  : {nom}</h2>
            <h3>Prenom : {prenom} </h3>
            <a href="https://react.dev" target="_blank">
            <img src={profileImage} class="profile" alt="logo" />
            </a>
        </div>
    )
       
    

}

export default ProductCard