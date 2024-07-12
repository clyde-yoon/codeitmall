import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

export default function Home() {
  const [products, setProducts] = useState();

  async function getProduct() {
    const res = await axios.get('/products');
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </div>
  );
}
