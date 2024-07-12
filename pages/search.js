import { useRouter } from 'next/router';
import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProduct(query) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProduct(q);
  }, [q]);

  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList />
    </div>
  );
}

export default Search;
