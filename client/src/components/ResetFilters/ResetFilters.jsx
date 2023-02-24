import React from 'react'
import { useDispatch } from 'react-redux'
import { setInitialState, setstartPage } from '../../store/filter/filterSlice'
import Button from '../Button'
import './ResetFilters.scss'

const ResetFilters = () => {
  const dispatch = useDispatch()

  const handlerResetFilters = () => {
    // dispatch(setstartPage(1))
    dispatch(setInitialState())
  }

  return (
    <div className='reset-wrapper'>
      <h3 className='reset-title'>No items were found for your request</h3>
      <Button
        text='Reset Filters'
        className='page__button content-button'
        onClick={handlerResetFilters}
      />
    </div>
  )
}
export default ResetFilters
