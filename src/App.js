import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./card.js";
import Cart from "./cart.js"
import { useState } from "react";

function App() {
  const [products,setProducts] = useState([ 
    {
    id:1,
    name:"Samsung S22",
    price:55000,
    image:"https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s22/buy/S22_KV_1_MO.jpg"
  },
  {
    id:2,
    name:"Samsung S22 Ultra",
    price:91000,
    image:"https://images.samsung.com/in/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_kv_img.jpg"
  },
  {
    id:3,
    name:"iPhone 13pro",
    price:99000,
    image:"https://static.toiimg.com/thumb/resizemode-4,msid-79729978,imgsize-200,width-1200/79729978.jpg"
  },
  {
    id:4,
    name:"iPhone 13",
    price:67000,
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1645036275538"
  },
  {
    id:5,
    name:"Motorola 30 edge",
    price:30000,
    image:"https://www.91-cdn.com/hub/wp-content/uploads/2022/04/Edge-30-1.jpg?tr=q-100"
  },
  {
    id:6,
    name:"Redmi K50i",
    price:25000,
    image:"https://fdn.gsmarena.com/imgroot/news/22/07/redmi-k50i-5g-ofic/inline/-1200/gsmarena_001.jpg"
  },
  {
    id:7,
    name:"OPPO Reno 8",
    price:25000,
    image:"https://img.poorvika.com/cdn-cgi/image/width=1600,height=1600,quality=75/1600_JPG/Mobiles/oppo/Oppo-Reno-8-5G/Oppo-Reno-8-03.jpg"
  },
  {
    id:8,
    name:"Nokia 1100",
    price:1600,
    image:"https://img.hi.91mobiles.com/uploads/2021/05/Nokia-1100-design.png"
  },
  {
    id:9,
    name:"Nexus 4",
    price:25000,
    image:"https://www.lg.com/uk/images/lg-mobile-phones/e960/gallery/medium01.jpg"
  },
  {
    id:10,
    name:"Sony Xperia 1 IV",
    price:75000,
    image:"https://fdn.gsmarena.com/imgroot/news/22/02/sony-xperia-1-iv-renders/inline/-1200/gsmarena_001.jpg"
  }
])

  const [cartItems,setCartItems]=useState([])

  let addToCart = (product) =>
  {
    setCartItems([...cartItems,product])
  }
 let removeFromCart = (product)=>{
    const indexVal = cartItems.findIndex(obj => obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems])
 }
  return (

    <div className="container">
      <div className="bg-secondary bg-gradient text-warning text-center py-5 ">
        <h1>The Mobile Store</h1>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((product)=> {
                return <Card product={product} addToCart={addToCart} cartItems={cartItems}/>
              })
            }
          </div>
        </div>
        <div className="col-lg-4 mt-0.5 p-2">
          <h3>Cart</h3>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
