import "./21ExternalCss.css"
import ModuleStyle from './22CSSModules.module.css' // Module CSS 



export default function ExternalCss(){
    return(
        <>
        <h3 className="heading">I am external Css</h3>
        
        <div className={ModuleStyle.cardStyle}>

                    <img className="Img-style" src="https://tse3.mm.bing.net/th/id/OIP.JAAd31mxF33HqZEgYq9zgAHaHv?pid=Api&P=0&h=180" alt="" />
                    <div className="Text-style" >
                        <h4>Anil Kumar</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
        </>
    )
}