import React from "react";
import logo from './yellow_user.png'

const Profile = ()=>{
return (
    <div>
        <div style={{
            display:"flex",
           
            margin:"20px 0px",
            borderBottom:"1px solid grey"
            }}>
            <div >
                    <img src= {logo} alt="" style={{height:"240px",width : "240px", borderRadius:"50%",padding:"15px"}} />
            </div>
            <div>
                    <div style={{
                        display:"flex",
                        flexDirection:"column"
                    }}>
                        <h1>Irshad Ahmed Khan</h1>
                        <h6>40 posts  40 followers  40 following  </h6>
                    </div>
            </div>
        </div>
                <div className="gallery">
                    <img className="item" src="https://images.unsplash.com/photo-1628233345409-349459e6f79a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODQwNDU5Ng&ixlib=rb-1.2.1&q=80&w=200" alt="Image" />
                    <img className="item" src="https://images.unsplash.com/photo-1628233345409-349459e6f79a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODQwNDU5Ng&ixlib=rb-1.2.1&q=80&w=200" alt="Image" />
                    <img className="item" src="https://images.unsplash.com/photo-1628233345409-349459e6f79a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODQwNDU5Ng&ixlib=rb-1.2.1&q=80&w=200" alt="Image" />
                    <img className="item" src="https://images.unsplash.com/photo-1628233345409-349459e6f79a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODQwNDU5Ng&ixlib=rb-1.2.1&q=80&w=200" alt="Image" />
                </div>
    </div>

)
}


export default Profile