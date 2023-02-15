import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList(props) {
    const { blogs } = props;

    return (
        <div className="container">
            {blogs.map((blog, index) => {
                return <Link to={`/blog/${blog.id}`} className="blogs-card" key={index}>
                        <h3 className="blogs-card__title">{blog.title}</h3>
                        <p className="blogs-card__summary">{blog.summary}</p>
                    </Link>
            })}   
        </div>
    )
}