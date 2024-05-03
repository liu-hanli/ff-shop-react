function CategoryCheckbox({ category, checked, setChecked }) {
  const handleCheckboxChange = (e) => {
    setChecked(category, e.target.checked)
  }
  
  return (
    <div className='form-check m-2'>
      <label className='form-check-label'>
        <input
          type='checkbox'
          className='form-check-input checkbox-category'
          value={category}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {category}
      </label>
    </div>
  )
}

export default CategoryCheckbox
