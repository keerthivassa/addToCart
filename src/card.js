import "./App.css";
function Card({product,addToCart,cartItems}) {
  return (
    <div className="col-lg-4 card">
      <div className="row">
        
        <div className="col-lg-12 card-header card-pic">
          <img className="card-img-top img-fluid " src={product.image}/>
        </div>
        <div >
          <h3 className="card-title">{product.name}</h3>
          <h6 className="card-text" >Rs.{product.price}</h6>
          <div className="card-footer">
          <button disabled= {cartItems.some(obj=> obj.id === product.id)}onClick = { () => {
            addToCart(product)
          }}  className="btn btn-sm btn-primary">{
            cartItems.some(obj=> obj.id === product.id) ? "Added To Cart" : "Add to cart"
          
          }

          </button>
          </div>
        </div>
        </div>
      </div>
    
  );
}

export default Card;
