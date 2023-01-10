import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Title from '../../components/Title/Title'
import Category from '../../components/Category'
import Colors from '../../components/Colors'
import Sizes from '../../components/Sizes'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Button from '../../components/Button'
import Galery from '../../components/Galery'
import SortList from '../../components/SortList'
import { setstartPage } from '../../store/filter/filterSlice'
import Pagination from '../../components/Pagination'
import './PageCatalog.scss'

const PageCatalog = () => {
  const products = useSelector(state => state.filter.products)
  const startPage = useSelector(state => state.filter.startPage)
  const perPage = useSelector(state => state.filter.perPage)
  const totalCount = products.productsQuantity
  const pagesCount = Math.ceil(totalCount / perPage)

  const dispatch = useDispatch()

  const LoadMore = () => {
    dispatch(setstartPage(startPage + 1))
  }

  return (
    <div className='container page'>
      <BreadCrumbs startFrom='Home' />
      <Title subtitle='Catalogue' />
      <div className='page-wrapper'>
        <aside className='page-sidebar'>
          <Title title='Category' />
          <Category />
          <Title title='Colors' />
          <Colors />
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
