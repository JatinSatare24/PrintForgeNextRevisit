'use client'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

export default function PaginationButton({page, isActive, label}:{
  page:number,
  isActive:boolean,
  label?:string
}){

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  function handlePageChange(){
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    urlSearchParams.set('page', page.toString())
    const url = `${pathname}?${urlSearchParams.toString()}`
    router.push(url)
  }

 
}