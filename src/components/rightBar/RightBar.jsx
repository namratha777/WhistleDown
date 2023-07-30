import "./rightbar.scss"

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
            <img src={"public\images\profilepicture.png"} />
            <span>Daphne Bridgerton</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src={"public\images\profilepicture.png"} />
            <span>Daphne Bridgerton</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
            <img src={"public\images\profilepicture.png"} />
            <p>
              <span>Daphne Bridgerton</span> changed their cover picture
              </p>
            </div>
              <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
          
            <img src={"public\images\profilepicture.png"} />
            <p>
              <span>Daphne Bridgerton</span> changed their cover picture
              </p>
            </div>
              <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src={"public\images\profilepicture.png"} />
            <p>
              <span>Daphne Bridgerton</span> changed their cover picture
              </p>
            </div>
              <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src={"public\images\profilepicture.png"} />
            <p>
              <span>Daphne Bridgerton</span> changed their cover picture
              </p>
            </div>
              <span> 1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
            <img src={"public\images\profilepicture.png"} />
            <div className="online"/>
            <span>Daphne Bridgerton</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
