import React, { useState, useLayoutEffect } from 'react'
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

  const [sizesActive, setsizesActive] = useState(true)
  const [colorActive, setcolorActive] = useState(true)
  const [categoryActive, setcategoryActive] = useState(true)

  function useWindowSize() {
    const [displayWidth, setdisplayWidth] = useState(0)
    useLayoutEffect(() => {
      function updateSize() {
        setdisplayWidth(window.innerWidth)
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, [])
    return displayWidth
  }

  const showColor = () => setcolorActive(!colorActive)
  const showSizes = () => setsizesActive(!sizesActive)
  const showCategory = () => setcategoryActive(!categoryActive)

  const dispatch = useDispatch()

  const LoadMore = () => {
    dispatch(setperPage(perPage + 3))
  }

  return (
    <div className='container page'>
      <BreadCrumbs startFrom='Home' />
      <Title subtitle='Catalogue' />
      <div className='page-wrapper'>
        <aside className='page-sidebar'>
          <Title
            title='Category'
            showContent={showCategory}
            className={'active'}
          />
          <Category
            categoryActive={
              useWindowSize() < 768 ? !categoryActive : categoryActive
            }
          />
          <Title title='Colors' showContent={showColor} className={'active'} />
          <Colors
            contentActive={useWindowSize() < 768 ? !colorActive : colorActive}
          />
          <Title title='Sizes' showContent={showSizes} className={'active'} />
          <Sizes
            sizesActive={useWindowSize() < 768 ? !sizesActive : sizesActive}
          />
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
