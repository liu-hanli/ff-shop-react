import CategoryCheckbox from '../components/CategoryCheckbox'

function CategoryControl({ categories, categoryFilter, changeCategoryFilter }) {
  return (
    <div className='d-flex justify-content-center flex-wrap' id='categories'>
      {categories.map((category) => (
        <CategoryCheckbox key={category} category={category} checked={categoryFilter[category]} setChecked={changeCategoryFilter} />
      ))}
    </div>
  )
}

export default CategoryControl
