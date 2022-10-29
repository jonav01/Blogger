import "./write.css";
import React, { useState, useRef} from 'react';
import JoditEditor from "jodit-react"
import { Card,Label} from "reactstrap"

const Write=()=>{
  const editor = useRef(null);
	const [content, setContent] = useState('');

  return (
      <Card>
      <div className="write">
      <img
        className="writeImg"
        src="https://images.unsplash.com/photo-1666694421187-75957423ee77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
          
        </div>
        
      </form>
    </div>

        
        
      <div className="writeInput writeText">
      <Label for="content">Your Blog Here</Label>
      
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {}}

            
          />

          
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        
    </Card>

  )
}

export default Write













// export default function Write() {
//   return (
    // <div className="write">
    //   <img
    //     className="writeImg"
    //     src="https://images.unsplash.com/photo-1666694421187-75957423ee77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
    //   <form className="writeForm">
    //     <div className="writeFormGroup">
    //       <label htmlFor="fileInput">
    //         {/* <i className="writeIcon fas fa-plus"></i> */}
    //         <i className="writeIcon fa-solid fa-plus"></i>
    //       </label>
    //       <input id="fileInput" type="file" style={{ display: "none" }} />
    //       <input
    //         className="writeInput"
    //         placeholder="Title"
    //         type="text"
    //         autoFocus={true}
    //       />
    //     </div>
    //     <div className="writeFormGroup">
    //       <textarea
    //         className="writeInput writeText"
    //         placeholder="Write your blog here..."
    //         type="text"
    //         autoFocus={true}
    //       />
    //     </div>
    //     <button className="writeSubmit" type="submit">
    //       Publish
    //     </button>
    //   </form>
    // </div>
//   );
// }