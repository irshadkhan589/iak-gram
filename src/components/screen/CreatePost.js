import React from 'react'

const CreatePost = ()=>{
    return (
        <div className="card input-field"
        style={{
            maxWidth:"500px",
            margin:"10px auto",
            padding:"20px",
            textAlign:"center"
        }}>

            <input type="text" placeholder="title" />
            <input type="text" placeholder="body" />
        
        <div class="file-field input-field">
        <div class="btn yellow">
          <span>Upload Image</span>
          <input type="file"/>
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text"/>
        </div>
      </div>
      <button className="btn waves-effect yellow" >
          Submit
        </button>
      </div>
    )
}

export default CreatePost