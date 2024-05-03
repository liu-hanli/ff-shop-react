import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function AddProductButton({ categories, funcNextProductID, funcAddProduct }) {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('Empty.png')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')

  const submitImage = (e) => {
    e.preventDefault()
    const image = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result)
    }
    reader.readAsDataURL(image)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      funcAddProduct({
        id: funcNextProductID(),
        name,
        description,
        category,
        image,
        price: parseFloat(price),
        stock: parseInt(stock),
        quantity: 0,
      })
      setVisible(false)

      // Reset form
      setName('')
      setDescription('')
      setCategory('')
      setImage('Empty.png')
      setPrice('')
      setStock('')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <Button variant='info' onClick={() => setVisible(true)}>
        New Product
      </Button>
      <Modal show={visible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header>
        <form id='form-product' onSubmit={handleSubmit}>
          <Modal.Body>
            <div className='form-group'>
              <label htmlFor='form-product-name'>Product Name</label>
              <input
                required
                type='text'
                className='form-control'
                id='form-product-name'
                placeholder='Enter product name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='form-product-description'>Description</label>
              <textarea
                required
                className='form-control'
                id='form-product-description'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='form-product-category'>Category</label>
              <select required className='form-control' id='form-product-category' value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='form-product-image'>Image</label>
              <input required type='file' className='form-control' id='form-product-image' accept='image/*' onChange={submitImage} />
            </div>
            <div className='form-group'>
              <label htmlFor='form-product-price'>Price</label>
              <input
                required
                type='number'
                className='form-control'
                id='form-product-price'
                min={0.01}
                step={0.01}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='form-product-stock'>Stock</label>
              <input
                required
                type='number'
                className='form-control'
                id='form-product-stock'
                min={1}
                step={1}
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setVisible(false)}>
              Close
            </Button>
            <Button type='submit' variant='primary'>
              Add
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default AddProductButton
