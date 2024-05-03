import CartProductCard from '../components/CartProductCard'

function Cart({ products, rmProductFromCart }) {
  return (
    <div id='cart'>
      <h2 className='text-center'>Cart</h2>
      {products
        .map((product) => (
          <CartProductCard key={product.id} product={product} rmProductFromCart={rmProductFromCart} />
        ))}
    </div>
  )
}

export default Cart
