import React from 'react'

const CategoryBlog = ({blogs, selectCategory}) => {
  const filterBlogs = selectCategory ? blogs.filter(blog=> blog.category == selectCategory) : blogs;
  return (
    <div className='mt-4'>
      <div >
        {
            filterBlogs.map(blog => (
                <div key={blog.id} className='flex items-center gap-3 mb-4 border border-gray-200 rounded-md p-3'>
                    <img className='w-20 rounded-md' src={blog.image}/>
                    <div>
                        <p>{blog.title}</p>
                        
                        <div>
                          <p className='text-xs text-gray-500'>{blog.author}</p>
                              <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-xs px-2 py-1 bg-[#8580DF] text-white justify-center rounded-md px-1 cursor-pointer font-normal " onClick={()=>document.getElementById(`modal_${blog.id}`).showModal()}>Read Blog</button>
        <dialog id={`modal_${blog.id}`} className="modal">
        <div className="modal-box max-w-6xl">
        <form method="dialog">
         {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        
        <div>
            



 <div className='border border-gray-200 rounded-md my-4 mx-3'>
      <div className="card card-side shadow-sm">
  <figure>
    <img className='rounded-md w-64 h-64 content-center'
      src={blog.image}
      alt="Movie" />
  </figure>
  <div className="px-4 my-6 flex flex-col justify-between">
    <h2 className="card-title text-xl">{blog.title}</h2>
    <div className='flex gap-6 text-gray-500'>
        <p>{blog.author}</p>
        <p>{blog.date}</p>
    </div>
    <p>{blog.content}</p>
    <div className=" flex items-center gap-4 card-actions justify-between">
      <p className='text-gray-500'>{blog.readTime} min read</p>
    </div>
  </div>
</div>
    </div>







        </div>
        </div>
        </dialog>
    </div>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default CategoryBlog
