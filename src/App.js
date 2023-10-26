import './App.css';
import { useState } from 'react';
import Paths from './elements/path/paths';

function App() {
  const [cart,setcart] = useState([])

  const handleCart = (item) =>{
    let present = false
    cart.forEach(element=>{
      if(element.id === item.id)
        present = true
    })
    if(present){
      alert('already added')
      return
    }
    setcart([...cart,{...item,qty:1}])
  }
  return (
    <div className="App">
      <Paths handleCart={handleCart} setcart={setcart} cart={cart} />
    </div>
  );
}

export default App;
