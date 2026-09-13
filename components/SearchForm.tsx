import Form from 'next/form'
import type {TransitionStartFunction} from 'react'
import {useRouter, usePathname} from 'next/navigation'

export default function SearchForm({search, startTransition}:{
  search?:string,
  startTransition:TransitionStartFunction
}){

  const pathname = usePathname()
  const router = useRouter()

  function handleSearch(formData:FormData){
    const search = formData.get("search")?.toString().trim() || ""
    const url = search ? `${pathname}?search=${encodeURIComponent(search)}` : pathname 
    startTransition(()=>{
      router.push(url)
    })
    
  }
 
}