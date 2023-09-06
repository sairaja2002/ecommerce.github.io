import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
function Mainpage() {
    const [value, setValue] = useState()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/categories')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    const [maindata, setMainData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/products')
        .then(res => setMainData(res.data))
        .catch(err => console.log(err))
    }, [])
    const handleCheck=async(e) => {
        e.preventDefault();
        return await axios.get(`http://localhost:5000/products?type=${value}`)
        .then(res =>setMainData(res.data))
        .catch(err => console.log(err))

    }
  return (
    <div>
      <div className='container-flex box'>
            <div className='box1 '>
                <h3>ECOMM</h3>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text'  placeholder=' Search Items' className='form-control' value = {value} onChange={(e) => setValue(e.target.value)}/>
                <button className='btn btn-primary' onClick={handleCheck} >Search</button>
            </div>
            <div className='box12'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <button className='btn btn-primary login'>Login</button>
            </div>
      </div>
      <div className='container main'>
        {
            data.map((mydata) => {
               return <ul>
                    <li>
                       <div className='mainbox' >
                            <img className="mainpic" src={mydata.img}/>
                            <h5 className='typedata'>{mydata.type}</h5>
                        </div> 
                    </li>
                </ul>
            })
        }
      </div>
      <div className='container desc'>
        <h3>Made For Your needs</h3>
      </div>
      <div className='container content'>
            <div className='filters'>
                <h3>Filters</h3>
                <hr></hr>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Brands
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body filter-body">
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            Levis
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            Adidas
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            Gucci
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            H&M
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            Ralph Lauren
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            Allen Solly
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            Nike
                        </label>

                    </div>
                    
                    </div>
                </div>
                
                
                </div>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Sizes
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body filter-body">
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            XS
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            S
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            M
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                           L
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                            XL
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                           2XL
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" className='check' /> 
                           3XL
                        </label>

                    </div>
                    
                    </div>
                </div>
                
                
                </div>
            </div>
            <div className='maindata'>
                
                {
                    maindata.map((mdata) => {
                        return <ul>
                                <li>
                                    <div className='display'>
                                    <div className='bbtn'>
                                            <button className='btn buynow'>Buy now</button>
                                        </div>
                                        <div className='weardata'>
                                            <div>
                                                <img className='pic' src={mdata.img}/>
                                                <div className='price'>
                                                    <i class="fa-solid fa-indian-rupee-sign"></i>
                                                    <h5>{mdata.price}</h5>
                                                </div>
                                            </div>
                                            
                                            <div className='weardatainfo'>
                                                <h5>{mdata.name}</h5>
                                                <h6>{mdata.type}</h6>
                                                <p>{mdata.brand}</p>
                                                <div className='alert alert-primary'>{mdata.size}</div>
                                                <div>
                                                <i class="fa-solid fa-cart-shopping"></i>
                                                    <button className='btn buynow cart'>Add to cart</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </li>
                        </ul>
                    })
                }
            </div>
      </div>
    </div>
  )
}

export default Mainpage
