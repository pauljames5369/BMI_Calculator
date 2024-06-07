
import './App.css'
import { useState } from 'react'


function App() {
 
  const [Weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [result, setResult] = useState()
  

  
  const [isWeight ,setIsWeight] = useState(true)
  const [isHeight ,setIsHeight] = useState(true)



  const validate = (e)=>{
    /*console.log(e.target.value);
    console.log(e.target.name);*/

    let name = e.target.name
    let value = e.target.value


    console.log(value.match(/^[0-9]*$/));

    if(value.match(/^[0-9]*$/)){
     
      if(name == 'weight'){
        setWeight(value)
        setIsWeight(true)
      }
      else{
        setHeight(value)
        setIsHeight(true)
      }
    }
    else{
      
      if(name == 'weight'){
        setWeight(value)
        setIsWeight(false)
      }
      else{
        setHeight(value)
        setIsHeight(false)
      }
    }
  }



  const reload = ()=>{
    window.location.reload()
  }



  function calculate(){
    let result = (Weight / (height * height / 10000)).toFixed(2);
    setResult(result);

    console.log(result);
    
    
    
  }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center rounded' style={{width:'100%' , height:'100%'}}>
      <div className='bg-primary p-5 rounded' style={{width:'550px'}}>
        <h1 className='text-center'>BMI Calculator</h1>
        <p className='text-center text-light'>Body Mass Index</p>
        

        <div className='img1 me-md-10'>
         <h2 className=' fw-bolder'>BMI: {result}</h2>
         </div>

       

        <div className='input'>
        <input type="text" className='form-control w-50 mt-3' placeholder='Weight:' value={Weight || ""} name='weight'  onChange={(e)=>validate(e)} />
         </div>
         {!isWeight &&
          <p className='text-center text-danger'>invalid</p>}

        <div className='input mb-3'>
        <input type="text" className='form-control w-50 mt-3' placeholder='Height:' value={height || ""} name='height'  onChange={(e)=>validate(e)}/>
        </div>
        {!isHeight &&
          <p className='text-center text-danger mb-4'>invalid</p>}

        <div className='d-flex justify-content-center align-items-center'>
         <button className='btn btn-success mt-4'onClick={calculate}>Calculate</button>
         <button className='btn btn-dark mt-4 ms-3 'onClick={reload}>Reset</button>
        </div>

       
         
         </div> 
      
      
    </div> 

      
    </>
  )
}

export default App
