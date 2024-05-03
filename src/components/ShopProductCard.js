import { Collapse } from 'react-bootstrap'

function ShopProductCard({ product, addProductToCart, displayed }) {
  const unavailable = product.stock === product.quantity

  return (
    <Collapse in={displayed} timeout={300}>
      <div className='card mt-4' id={`cart-${product.id}`}>
        <div className='card-body'>
          <div className='row w-100'>
            <div className='col-sm-4'>
              <p className='card-text'>
                <strong>ID:</strong> {product.id}
              </p>
              <img className={'card-img-top' + (unavailable ? ' opacity-50' : '')} src={`${product.image}`} alt={product.name} />
            </div>
            <div className='col-sm-8' style={{ textAlign: 'left' }}>
              <h5>{product.name}</h5>
              <p className='card-text'>
                <strong>Category:</strong> {product.category}
              </p>
              <p className='card-text'>{product.description}</p>
              <p className='card-text'>
                <strong>Price:</strong> {product.price.toFixed(2)}€
              </p>
              <p className='card-text'>
                <strong>Stock:</strong> {product.stock}
              </p>
              <button
                type='button'
                className='btn btn-primary add-to-cart'
                id={`add-${product.id}`}
                disabled={unavailable}
                onClick={() => addProductToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Collapse>
  )
}

export default ShopProductCard
