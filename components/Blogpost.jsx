import React from 'react'
import styles from "../styles/Resources.module.css"
// import { Link} from 'react-router-dom'
import Link from 'next/link'

function Blogpost({img, title, author, date, id, slug }) {
  const clearId = () => {
    sessionStorage.clear('tcl-blog-id')
  }
  return (
    <div className={styles.blogpost}>
        <img src={img} alt="" />
        <div className={`${styles.blogpost_text} py-7 px-4 text-gray-700 relative`}>
            <Link href={`/blog/${slug}`} state={{id: `${id}`}}>
              <h3 onClick={() => clearId()} className="font-semibold text-base cursor-pointer">{title}</h3> 
            </Link>
            {/* <h3 className="font-semibold text-base cursor-pointer">{title}</h3> */}
            <div className={`${styles.metadata} flex text-gray-500 text-sm mt-5`}>
                By {author} &nbsp; | &nbsp; {date}
            </div>
        </div>
    </div>
  )
}

export default Blogpost