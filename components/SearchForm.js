import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchForm({ initialValue = '' }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // trim()을 사용하여 value의 양쪽 끝 공백을 제거
    const trimmedValue = value.trim();
    // trimmedValue가 비어있는지 확인
    if (!trimmedValue) {
      router.push(`/`);
    } else {
      router.push(`/search?q=${trimmedValue}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
