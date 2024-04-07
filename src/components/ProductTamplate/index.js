import {useState} from "react"
import { MdOutlineFavoriteBorder,MdOutlineFavorite } from "react-icons/md";
import "./index.css"

const ProductTamplate=props=>{
    const {productDetails} = props
    const {id,title,category,description,image,price} = productDetails 
    const [isLiked,setLike] = useState(false)

    const updateTheLike=()=>{
        setLike((prev)=>({isLiked:!prev.isLiked}))
    }

    return (
        <li className="product-tamplate">
            <img src={image} alt={title} className="template"/>
            <p>{title}</p>
            <div className="sign-like-block">
            <p>Sign in or Create an account to see pricing</p>
            {isLiked?(<MdOutlineFavorite className="liked" size={25} onClick={updateTheLike}/>):(<MdOutlineFavoriteBorder size={25} onClick={updateTheLike}/>)}
            </div>
            
        </li>
    )
}


export default ProductTamplate