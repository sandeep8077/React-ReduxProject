import { connect } from 'react-redux'
import Home from '../components/Home'
import {addTocart,removeToCart} from '../services/actions/action'

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addTocart(data)),
    addToRemoveHandler:data=>dispatch(removeToCart(data))
})
const mapStateToProps = state=>({
    data:state.cartItems
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);