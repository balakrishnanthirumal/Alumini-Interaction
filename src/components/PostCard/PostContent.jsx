import { useState } from "react";
const PostContent = () => {
    const [isReadMore, setIsReadMore] = useState(true);
  
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <div className="mt-[20px] min-h-[100px] max-h-[250px] overflow-hidden mb-3">
        <img
          src="/post-1.png"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <p className={` ml-2 text-gray-700 ${isReadMore ? 'line-clamp-2' : ''}` }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button 
        onClick={toggleReadMore} 
        className="mt-2 ml-2 text-blue-500 hover:underline focus:outline-none"
      >
        {isReadMore ? 'Read More' : 'Read Less'}
      </button>

      <hr className="mx-3 mt-2"/>
    </div>
  );
};
export default PostContent;
