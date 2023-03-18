

function Home(props){
  console.log("home",props)
    return(<>


<div className="cart">
  <div className="title-img">
   
    <img id="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqojzlYQS5yCsdbuX9vB_NkdsRMTLWdBVxEWWzzEl42eBDusPX77ILpRf4zG9aK1Y57xk&usqp=CAU" alt="" />
  
  </div>
  <div className="details">
  <h4>iphone</h4>
  <h5>Price:100000</h5>
  <button id="btn" onClick={()=>props.addToCartHandler({name:'iphone',price:100000})}>Add to cart</button>
  <button onClick={()=>props.addToRemoveHandler()}>remove to cart</button>

  </div>
</div>

</>
        
    )
}
export default Home;