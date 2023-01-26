import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChangePassword from '../../components/Forms/ChangePassword'
import PersonalInfo from '../../components/Forms/PersonalInfo/PersonalInfo'
import Title from '../../components/Title'
import { fetchDeleteOrder, getOrdersUser } from '../../store/order/order'
import styles from './PageCabinet.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard'
import BreadCrumbs from '../../components/BreadCrumbs'

const PageCabinet = () => {
  const userInfo = useSelector(state => state.user.info)
  const { order } = useSelector(state => state.order)
  const [info, setInfo] = useState(true)
  const [orderVis, setOrderVis] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrdersUser())
  }, [dispatch])

  const visible = value => {
    if (!value) {
      setInfo(!info)
      setOrderVis(!orderVis)
    }
  }

  const deleteOrder = id => {
    dispatch(fetchDeleteOrder(id))
  }

  return (
    <div className='container py-5 page'>
      <BreadCrumbs startFrom='Home' />
      <div className={styles.block}>
        <div className={styles.menu}>
          <p
            onClick={() => visible(info)}
            className={`${info ? styles.active : null}`}
          >
            Personal info
          </p>
          <p
            onClick={() => visible(orderVis)}
            className={`${orderVis ? styles.active : null}`}
          >
            My orders
          </p>
        </div>
        <div className={styles.info}>
          {info && (
            <>
              <Title subtitle={`Hello, ${userInfo.firstName}!`} />
              <PersonalInfo />
              <ChangePassword />
            </>
          )}
          {orderVis && (
            <>
              <Title subtitle={order ? 'My orders' : 'No orders'} />
              {console.log(order)}
              {order &&
                order.map(item => (
                  <div key={item._id}>
                    <Title title={`${'Order number ' + item._id}`} />
                    <div className={styles.container}>
                      <div className={styles.information}>
                        <div className={styles.information_all}>
                          <p>Totalsum:</p>
                          <span>{item.totalSum}$</span>
                        </div>
                        <div className={styles.information_all}>
                          <p>Status:</p>
                          <span>{item.status}</span>
                        </div>
                        <div>
                          {/* <span onClick={() => deleteOrder(item._id)}>
                            delete
                          </span> */}
                        </div>
                      </div>
                      <div className={styles.cards}>
                        {item.products.map(prod => (
                          <ProductCard
                            key={prod._id}
                            photoUrl={prod.product.imageUrls[0]}
                            nameCard={prod.product.name}
                            size={prod.product.size}
                            ident={prod.product.itemNo}
                            subClass={' img-fluid overflow-auto flex-grow-1'}
                            vievForOrders
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageCabinet
