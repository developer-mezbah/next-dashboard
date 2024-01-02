"use client"
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const Search = ({placeholder}) => {
  const searchParmas = useSearchParams()
  const {replace} = useRouter()
  const pathname = usePathname()


  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParmas)
    params.set("page", 1)
    if(e.target.value){
      e.target.value.length > 2 && params.set("q", e.target.value)
    }else{
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }, 300)
  // use-debounce hocce 300ms er por handleSearch fuction ti call hobe
  // type ses hole fuction ti call hobe
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
    </div>
  )
}

export default Search