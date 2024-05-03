import { Collapse } from 'react-bootstrap'

function CartProductCard({ product, rmProductFromCart }) {
  return (
    <Collapse in={product.quantity > 0}>
      <div className='card mt-4' id={`cart-${product.id}`}>
        <div className='card-body'>
          <div className='row w-100'>
            <div className='col-sm-4'>
              <img className='card-img-top' src={`${product.image}`} alt={product.name} />
            </div>
            <div className='col-sm-8' style={{ textAlign: 'left' }}>
              <h5>{product.name}</h5>
              <p className='card-text'>
                <strong>ID:</strong> {product.id}
              </p>
              <p className='card-text'>
                <strong>Category:</strong> {product.category}
              </p>
              <p className='card-text'>
                <strong>Price:</strong> {product.price}€
              </p>
              <p className='card-text'>
                <strong>Quantity:</strong> <span id={`quantity-${product.id}`}>{product.quantity}</span>
              </p>
              <button type='button' className='btn btn-danger rm-from-cart' id={`rm-${product.id}`} onClick={() => rmProductFromCart(product.id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </Collapse>
  )
}

export default CartProductCard
