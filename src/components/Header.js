function Header(props){
    console.log("Header",props.data.length)
    // cartData.cartItems.cartData.length
    return(
        <>
<div className="navbar">
     <p>project</p>
     <div>
     <img id="backet" src="https://www.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt="" />
     <span id="span">{props.data.length}</span>
     </div>

 </div>
        </>
    )
}
export default Header