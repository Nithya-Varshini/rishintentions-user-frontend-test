import React, { useEffect } from 'react'
import "./CategoryNav.css"

const CategoryNav = ({ category, activeCategory, setActiveCategory }) => {

    useEffect(() => {
        setActiveCategory(Object.keys(category)[0])
    }, [])

    return (
        <div className='categories'>
            {Object.keys(category).map((val, ind) =>
                <div
                    className={`category ${val === activeCategory && 'category-active'}`}
                    key={ind}
                    onClick={() => setActiveCategory(val)}
                >
                    {val}
                </div>
            )}
        </div>
    )
}

export default CategoryNav