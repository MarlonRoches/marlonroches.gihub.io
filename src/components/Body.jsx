import "../styles/Body.css"
import LinkedIn from "../images/Redes/LinkedIn.png"
import gmail from "../images/Redes/gmail.png"
import giihuib from "../images/Redes/giihuib.png"
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
function Body(params) {
    return(<div>
        <div className='body_image_container'>
            <div className="body_image_meta">
                <b>Current Date : </b>    {getDate()}
            </div>
            <div className="body_image_info">
                <ProfilePhoto/>
                <ProfileName/>
            </div>
            <div className="body_image_links">
                <ReferencesLogos/>
            </div>
            <div className="body_image_container_transparent">
            </div>
        </div>
        Body
    </div>)

    function getDate() {
        let date=new Date();
        return `${monthNames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} `
    }
}

function ProfilePhoto() {
    return <section>
        <div className="profile_photo">
    </div>

    </section>
}
function ProfileName(){
return     <div className="profile_name" >
</div>
}
function ReferencesLogos() {
    return <div>
        <img className="red_logo"  src={LinkedIn} alt="Linkedin"></img>
        <img className="red_logo" src={gmail} alt="Linkedin"></img>
        <img className="red_logo" src={giihuib} alt="Linkedin"></img>
    </div>
}
export default Body