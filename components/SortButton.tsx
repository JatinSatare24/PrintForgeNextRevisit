'use client'

import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import type {TransitionStartFunction} from 'react'

export default function SortButton({children, sort, startTransition}:{
  children:React.ReactNode,
  sort:string,
  startTransition:TransitionStartFunction
}){

  const pathname = usePathname()
  const router = useRouter() 
  const searchParams = useSearchParams()

  const isActive = searchParams.get("sort") === sort

  function handleSort(){
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    urlSearchParams.set('sort',sort)
    urlSearchParams.delete('page')
    const url = `${pathname}?${urlSearchParams.toString()}`
    startTransition(()=>{ 
      router.push(url)
    })
    
  }

 
}