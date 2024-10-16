import { useState } from "react";
const PostContent = ({post}) => {
    const [isReadMore, setIsReadMore] = useState(true);
  
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  function countWords(str) {
    const wordsArray = str.trim().split(/\s+/);
    return wordsArray.length;
  }
  
  return (
    <div>
      <div className="mt-[20px] min-h-[100px] max-h-[250px] overflow-hidden mb-3">
        {post.imageURL && (
           <img
           src={post.imageURL}
           alt=""
           className="h-auto w-auto object-cover"
         />
        )}
       
      </div>
      <p className={` ml-2 text-gray-700 ${isReadMore ? 'line-clamp-2' : ''}` }>
        {post.caption}
      </p>
      {post.caption  && countWords(post.caption) > 20 && <button 
        onClick={toggleReadMore} 
        className="mt-2 ml-2 text-blue-500 hover:underline focus:outline-none"
      >
        { isReadMore ? 'Read More' : 'Read Less'}
      </button>}
      

      <hr className="mx-3 mt-2"/>
    </div>
  );
};
export default PostContent;
