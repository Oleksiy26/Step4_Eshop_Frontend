import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../../store/filter/filterSlice'
import Checkbox from '../Checkbox'
import './Category.scss'

const Category = () => {
  const products = useSelector(state => state.products)
  const [categoryArr, setCategoryArr] = useState([])

  const dispatch = useDispatch()
  const category = useSelector(state => state.filter.categoryName)

  const handleCategoryCheckbox = label => {
    const currentIndex = category.indexOf(label)
    const newChecked = [...category]
    if (currentIndex === -1) {
      newChecked.push(label)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    dispatch(setCategory(newChecked))
    console.log(newChecked)
  }

  useEffect(() => {
    const categoryArr = products.products.map(item => item.categories)
    const existingCategory = new Set(categoryArr)
    setCategoryArr(Array.from(existingCategory))
  }, [products])

  return (
    <ul className='page-filter_list'>
      {categoryArr &&
        categoryArr.map((item, index) => {
          return (
            <li className='page-filter_item' key={index}>
              <Checkbox
                label={item}
                id='flexCheckDefault'
                onChangeCheckbox={() => handleCategoryCheckbox(item)}
              />
            </li>
          )
        })}
    </ul>
  )
}
export default Category
