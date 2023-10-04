
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useState,  useEffect} from 'react'
import axios from 'axios'
function App() {

  const [items, setItems] = useState([]);

   const handleClick = async()=> {
      
    const response = await axios.get('https://api.adviceslip.com/advice');
    const data = response.data.slip;
    setItems(data);

  }

   
    useEffect(() => {
            handleClick();
    }, [])
    
    
  
  

  return (
    
       
        
     
      
     <div className = "divone">
     
      <div className="divtwo">
         
           <div className="advice">
                ADVICE # {items.id}
           </div>
           
           <div className="quote">
                "{items.advice}."
           </div>

           <div className="divider">
             <img src='./src/assets/images/pd.png' />
              
           </div>

           <button className="dice" onClick={handleClick}>
              <img className='inter' src="./src/assets/images/icon-dice.png" />
           </button>

            

      </div>

     </div>
     

    
     
  
    
  )
}

export default App
