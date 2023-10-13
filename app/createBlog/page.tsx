import React from 'react'
import CreateBlog from '../components/CreateBlog/createBlog'

const Page = () => {
    if (typeof window !== "undefined") {
        return <CreateBlog/>
      }else{
        <span>Loading...</span>
      }
}

export default Page