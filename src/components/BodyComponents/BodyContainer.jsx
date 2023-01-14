import "../../styles/BodyStyles/BodyContainer.css"
import info from "./BodyText"
function Skills(params) {
    return <div className="BodyContainer_Center">
        <div className="BodyContainer_Main">
            <IAm/>
            <SkillsArea/>
        </div>
    </div>
}
function IAm(params) {
    return <div>
        <TitleArea title = "Who I am?"/>
        <DescArea subTitle="Name:" desc= {info.Me.Name}/>
        <DescArea subTitle="Location:" desc= {info.Me.Location}/>
        <DescArea subTitle="Role:" desc= {info.Me.Position}/>
        <hr/>
    </div>
}
function SkillsBars(params) {
    return (

        <div className="BodyContainer_Center"    >
            <div className="SkillBars_Container">
                <p>HTML</p>
                <img className="ImageLogo" src={info.Images.Python} alt="Python Images"/>
                <div className="container">
                <div className="skills html">90%</div>
                </div>

                <p>CSS</p>
                <div className="container">
                <div className="skills css">80%</div>
                </div>

                <p>JavaScript</p>
                <div className="container">
                <div className="skills js">65%</div>
                </div>

                <p>SQL (Server, MySql, Oracle)</p>
                <div className="container">
                <div className="skills php">60%</div>
                </div>
                <p>React</p>
                <div className="container">
                <div className="skills php">60%</div>
                </div>
                <p>Node.Js</p>
                <div className="container">
                <div className="skills php">60%</div>
                </div>
                <p>MongoDB</p>
                <div className="container">
                <div className="skills php">60%</div>
                </div>
                <p>.Net</p>
                <div className="container">
                <div className="skills php">60%</div>
                </div>
            </div>
        </div>
    )
}

function SkillsArea(params) {
    return <div>
        <TitleArea title = {info.Title}/>
            <DescArea desc= {info.Desc}/>
            <SkillsBars/>
    </div>
}
function TitleArea(props) {
    return<h1 className="AreaTittle">{props.title}</h1>
}

function DescArea(props) {
    return<div>
        <h3 className="AreaMainText">{props.subTitle}</h3>
        <p className="AreaMainText">{props.desc}</p>
    </div>
}


export default Skills