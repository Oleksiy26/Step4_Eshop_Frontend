import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSize, setstartPage } from '../../store/filter/filterSlice'
import Checkbox from '../Checkbox'
import './Sizes.scss'

const Sizes = () => {
  const sizesArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const dispatch = useDispatch()
  const size = useSelector(state => state.filter.sizeName)

  const handleSizeCheckbox = label => {
    const currentIndex = size.indexOf(label)
    const newChecked = [...size]
    if (currentIndex === -1) {
      newChecked.push(label)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    dispatch(setstartPage(1))
    dispatch(setSize(newChecked))
    console.log(newChecked)
  }
  return (
    <ul className='page-sizes_list'>
      {sizesArray &&
        sizesArray.map((item, index) => {
          return (
            <li className='page-sizes_item' key={index}>
              <Checkbox
                label={item}
                id='flexCheckDefault'
                onChangeCheckbox={() => handleSizeCheckbox(item)}
              />
            </li>
          )
        })}
    </ul>
  )
}
export default Sizes
