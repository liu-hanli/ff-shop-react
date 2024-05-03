import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddCategoryButton from './components/AddCategoryButton'
import AddProductButton from './components/AddProductButton'
import CategoryControl from './section/CategoryControl'
import ConfirmOrderButton from './components/ConfirmOrderButton'
import ProductList from './section/ProductList'
import Cart from './section/Cart'
import { nextProductID, INITIAL_CATEGORIES, INITIAL_PRODUCTS, INITIAL_FILTER } from './memory'

function App() {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES)
  const [products, setProducts] = useState(INITIAL_PRODUCTS)
  const [categoryFilter, setCategoryFilter] = useState(INITIAL_FILTER)
  const [total, setTotal] = useState(0)

  const addCategory = (category) => {
    if (categories.includes(category)) {
      throw Error('Category already exists')
    }
    setCategories([...categories, category])
    setCategoryFilter({ ...categoryFilter, [category]: true })
  }

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  const recalculateTotal = () => {
    const newTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0)
    setTotal(newTotal)
  }

  const addProductToCart = (productID) => {
    const product = products.find((product) => product.id === productID)
    if (product) {
      product.quantity++
      recalculateTotal()
    }
  }
  const rmProductFromCart = (productID) => {
    const product = products.find((product) => product.id === productID)
    if (product && product.quantity > 0) {
      product.quantity--
      recalculateTotal()
    }
  }

  const changeCategoryFilter = (category, checked) => {
    categoryFilter[category] = checked
    setCategoryFilter({ ...categoryFilter })
  }

  const onConfirmOrder = () => {
    products.forEach((product) => {
      product.stock -= product.quantity
      product.quantity = 0
    })
    setTotal(0)
    setProducts([...products])
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='fixed-left h-100'>
              <h2 className='text-center'>Products</h2>
              <div className='d-flex justify-content-center'>
                <AddCategoryButton funcAddCategory={addCategory} />
                <span className='mx-2'></span>
                <AddProductButton categories={categories} funcNextProductID={nextProductID} funcAddProduct={addProduct} />
              </div>
              <CategoryControl categories={categories} categoryFilter={categoryFilter} changeCategoryFilter={changeCategoryFilter} />
              <ProductList products={products} categoryFilter={categoryFilter} addProductToCart={addProductToCart} />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='position-fixed fixed-right overflow-auto w-50 h-100 px-5'>
              <Cart products={products} rmProductFromCart={rmProductFromCart} />
              <div className='col-sm-12 mt-4'>
                <h5 className='text-center'>
                  Total: <span id='total'>{total.toFixed(2)}</span>€
                </h5>
                <ConfirmOrderButton total={total} onConfirm={onConfirmOrder} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
