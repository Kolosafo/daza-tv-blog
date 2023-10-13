import React from 'react'
import EditBlog from '../components/EditBlog/editBlog'

const Page = () => {
    if (typeof window !== "undefined") {
        return <EditBlog/>
      }else{
        <span>Loading...</span>
      }
 
}

export default Page