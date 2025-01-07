import { useState } from "react";

interface Settings{
    text:string,
    maxLength:number
}

const TruncatedText = ({ text, maxLength }:Settings) => {
    const [isTruncated, setIsTruncated] = useState(true);
  if (text.length > maxLength) {
    
    return <>

        {isTruncated ?  <p className={"text-gray-400 mb-2"}>{text.substring(0, maxLength)}...</p> : <p className={"text-gray-400 mb-2"}>{text}</p>  }
       
        
        
        {<button className="text-white" onClick={() => setIsTruncated(!isTruncated)}>
          {isTruncated ? "Read more" : "Read less"}
        </button>}
        <br/>
    
    </>
  



}
  

  
  return <p className={"text-gray-400 mb-2"}>{text}</p>;
};

export default TruncatedText;