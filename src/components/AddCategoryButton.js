import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function AddCategoryButton({ funcAddCategory }) {
  const [visible, setVisible] = useState(false)
  const [category, setCategory] = useState('')
  const [errMsg, setErrMsg] = useState(undefined)

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      funcAddCategory(category)
      setVisible(false)
      setCategory('')
      setErrMsg(undefined)
    } catch (error) {
      setErrMsg(error.message)
    }
  }

  return (
    <>
      <Button variant='info' onClick={() => setVisible(true)}>
        New Category
      </Button>
      <Modal show={visible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Category</Modal.Title>
        </Modal.Header>
        <form id='form-category' onSubmit={handleSubmit}>
          <Modal.Body>
            <div className='form-group'>
              <label htmlFor='form-category-name'>Category Name</label>
              <input
                required
                type='text'
                className='form-control'
                id='form-category-name'
                placeholder='Enter category name'
                value={category}
                onChange={handleChange}
              />
            </div>
            {errMsg !== undefined && (
              <p className='text-danger' style={{ fontSize: '0.8em' }}>
                {errMsg}
              </p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setVisible(false)}>
              Close
            </Button>
            <Button type='submit' variant='primary'>
              Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default AddCategoryButton
