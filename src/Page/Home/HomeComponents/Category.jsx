import React from 'react'

const Category = ({categories, handleCategory}) => {

  return (
    <div className='flex flex-wrap gap-2 '>
      {
        categories.map(category => (
            <div key={category.id} className='border border-gray-200 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200'> 
                <p onClick={()=>handleCategory(category.name)} >{category.name}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Category
