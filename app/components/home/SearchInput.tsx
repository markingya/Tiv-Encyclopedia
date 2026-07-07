"use client"
import { Input } from '@/components/ui/input'
import { useState } from 'react'


const SearchInput = () => {
  const [query,setQuery] = useState("");
    return (
        <Input placeholder="Search Tiv Encylopedia..." value={query} onChange={(e)=> setQuery(e.target.value)} />
  )
}

export default SearchInput