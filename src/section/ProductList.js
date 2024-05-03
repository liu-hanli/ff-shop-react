import ShopProductCard from '../components/ShopProductCard'

function ProductList({ products, categoryFilter, addProductToCart }) {
  return (
    <div id='product-list'>
      {products.map((product) => (
        <ShopProductCard displayed={categoryFilter[product.category]} key={product.id} product={product} addProductToCart={addProductToCart} />
      ))}
    </div>
  )
}

export default ProductList
