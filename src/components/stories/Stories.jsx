import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //Temporary
    const stories = [
        {
          id: 1,
          name: "Anthony Bridgerton",
          img: "https://images.pexels.com/photos/17660924/pexels-photo-17660924/free-photo-of-man-people-woman-art.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "Thomas Cole",
          img: "https://images.pexels.com/photos/17688887/pexels-photo-17688887/free-photo-of-picnic-rose-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 3,
          name: "Prudence Featherinton",
          img: "https://images.pexels.com/photos/16883535/pexels-photo-16883535.jpeg?cs=srgb&dl=pexels-eugenia-remark-16883535.jpg&fm=jpg&_gl=1*f37wzf*_ga*MTcxMjE5Nzg0LjE2ODk4NTU0Mjc.*_ga_8JE65Q40S6*MTY5MDc0MTQzMS4zLjEuMTY5MDc0MTQzOC4wLjAuMA..",
        },
        {
          id: 4,
          name: "Jane Doe",
          img: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];


  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
