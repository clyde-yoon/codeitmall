import Link from 'next/link';
import styles from './ProductList.module.css';

export default function ProductList({ products = [] }) {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <Link className={styles.product} href={`/items/${product.id}`}>
            <img
              src={product.imgUrl}
              width="300"
              height="300"
              alt={product.name}
            />
            <span className={styles.productName}>{product.name}</span>
            <br />
            {product.price}원
          </Link>
        </li>
      ))}
    </ul>
  );
}
