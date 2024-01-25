import React, { useEffect } from 'react'
import "./CategoryNav.css"

const CategoryNav = ({LinkCategory, category, activeCategory, setActiveCategory }) => {

    useEffect(() => {
        if(LinkCategory!==undefined){
            setActiveCategory(LinkCategory)
        }   
        else{
            setActiveCategory(Object.keys(category)[0])
        }
        // eslint-disable-next-line
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