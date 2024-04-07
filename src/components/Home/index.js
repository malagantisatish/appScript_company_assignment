import {useState,useEffect} from "react"
import Navbar  from "../Navbar"
import ProductTamplate from "../ProductTamplate"
import "./index.css"

const status={
    initial:"INITIAL",
    inProcess:"PROCESS",
    success:"SUCCESS",
    failure:"FAILED"
}

const Home =()=>{
    const [response,setResponse]=useState({error:false,errorMsg:"",fetchedData:[],apiStatus:status.initial})

    useEffect(()=>{
        const fetchData=async()=>{
            setResponse({...response,apiStatus:status.inProcess})
            const responseOfApi = await fetch("https://fakestoreapi.com/products")

            if (responseOfApi.ok){
                const data = await responseOfApi.json()
                console.log(data)
                setResponse({...response,fetchedData:data,apiStatus:status.success})
            }
            else{
                setResponse({...response,error:true,errorMsg:response.errorMsg,apiStatus:status.failure})
            }
        
        }

        fetchData()
    },[])


    const renderTheProductsList=()=>(
        <ul className="products-list">
            {response.fetchedData.map(each=>(
                <ProductTamplate key={each.id} productDetails={each}/>
            ))}
        </ul>
    )


    return(
    <>
    <Navbar/>
    <div className="home-heading-description">
    <h1 className="home-heading">Discover our products</h1>
    <p className="home-description">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
    </div>
    {renderTheProductsList()}
   
    </>
)
}


export default Home