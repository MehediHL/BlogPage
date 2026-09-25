import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className='border border-gray-200 rounded-md mb-4 mx-3 '>
      <div className="card flex lg:flex-row items-center flex-col py-2 lg:py-0 card-side bg-base-100 shadow-sm">
  
    <img className='rounded-md w-62 h-62 content-center'
      src={blog.image}
      alt="Movie" />
  
  <div className="px-4 my-6 flex flex-col justify-between lg:gap-4">
    <h2 className="card-title text-xl">{blog.title}</h2>
    <div className='flex gap-6 text-gray-500'>
        <p>{blog.author}</p>
        <p>{blog.date}</p>
    </div>
    <p>{blog.description}</p>
    <div className=" flex items-center gap-4 card-actions justify-between">
      <p className='text-gray-500'>{blog.readTime} min read</p>
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn bg-[#FB5875] text-white justify-center py-1 rounded-md px-3 cursor-pointer font-normal" onClick={()=>document.getElementById(`modal_${blog.id}`).showModal()}>Read Blog</button>
        <dialog id={`modal_${blog.id}`} className="modal">
        <div className="modal-box max-w-6xl">
        <form method="dialog">
         {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        
        <div>
            



 <div className='border border-gray-200 rounded-md my-4 mx-3'>
      <div className="card flex lg:flex-row items-center flex-col py-2 lg:py-0 card-side bg-base-100 shadow-sm">
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
    </div>
  )
}

export default BlogCard
