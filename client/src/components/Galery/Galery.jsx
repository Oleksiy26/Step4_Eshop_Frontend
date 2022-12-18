import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/products/productSlice';

import './Galery.scss';

// const Galery = ({ numOfElem }) => {
//   const products = useSelector(state => state.products);
//   const slice = products.products.slice(0, numOfElem);

//   return (
//     <ul className="content-list">
//       {products.products.length ? (
//         <>
//           {slice.map(item => (
//             <li key={item._id}>
//               <ProductCard
//                 currentPrice={item.currentPrice}
//                 photoUrl={item.imageUrls[0]}
//                 key={item._id}
//                 id={item._id}
//               />
//             </li>
//           ))}
//         </>
//       ) : null}
//     </ul>
//   );
// };
// export default Galery;
const Galery = ({ numOfElem }) => {
  const sort = useSelector(state => state.filter.sort);
  // const products = useSelector(state => state.products);
  // const slice = products.products.slice(0, numOfElem);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const slice = products.slice(0, numOfElem);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/filter?sort=${sort.sortProperty}`)
      .then(data => {
        setProducts(data.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  }, [sort]);

  // useEffect(() => {
  //   dispatch(fetchProducts(url));
  // }, [dispatch, url]);

  return (
    <ul className="content-list">
      {slice.length ? (
        <>
          {slice.map(item => (
            <li key={item._id}>
              <ProductCard
                currentPrice={item.currentPrice}
                photoUrl={item.imageUrls[0]}
                key={item._id}
                id={item._id}
              />
            </li>
          ))}
        </>
      ) : null}
    </ul>
  );
};
export default Galery;
