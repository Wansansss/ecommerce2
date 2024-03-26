import { getKategoriDetail } from '@/libs/api'
import React from 'react'

const Page = async ({params}:any) => {
    const data = await getKategoriDetail(params.id)
    console.log(params)
    console.log(data)
  return (
    <div className='mt-44'>
        {data.data.categoryName}
    </div>
  )
}

export default Page