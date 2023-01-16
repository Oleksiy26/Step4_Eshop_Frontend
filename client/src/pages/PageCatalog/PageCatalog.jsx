import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Title from '../../components/Title/Title'
import Category from '../../components/Category'
import Colors from '../../components/Colors'
import Sizes from '../../components/Sizes'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Button from '../../components/Button'
import Galery from '../../components/Galery'
import SortList from '../../components/SortList'
import { setstartPage, setperPage } from '../../store/filter/filterSlice'
import Pagination from '../../components/Pagination'
import './PageCatalog.scss'

const PageCatalog = () => {
  const { products, startPage, perPage } = useSelector(state => state.filter)
  const pagesCount = Math.ceil(products.productsQuantity / perPage)
  const resolution = window.innerWidth

  const [contentActive, setcontentActive] = useState(true)

  // if (resolution < 768) {
  //   setcontentActive(false)
  // }

  const showFilters = () => setcontentActive(!contentActive)

  const dispatch = useDispatch()

  const LoadMore = () => {
    dispatch(setperPage(perPage + perPage))
  }

  return (
    <div className='container page'>
      <BreadCrumbs startFrom='Home' />
      <Title subtitle='Catalogue' />
      <div className='page-wrapper'>
        <aside className='page-sidebar'>
          <Title title='Category' />
          <Category />
          <Title title='Colors' showContent={showFilters} />
          <Colors contentActive={contentActive} />
          <Title title='Sizes' />
          <Sizes />
        </aside>
        <section className='content cards'>
          <SortList />
          <Galery />
        </section>
        <section className='page-controls'>
          {startPage < pagesCount && (
            <Button
              text='Load more beauty'
              className='page__button content-button'
              onClick={LoadMore}
            />
          )}
          <Pagination />
        </section>
      </div>
    </div>
  )
}

export default PageCatalog
