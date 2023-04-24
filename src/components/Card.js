import { Avatar } from "./Avatar"
import { Details } from "./Details"


export const Card = (props) => {
    return (
        <div className="row text-center">
            
            <div className="col-sm-6 col-md-6 col-lg-3 mb-5 mx-auto mb-md-0">
                
                <div className="card mb-4 testimonial-card">
                    <div className="card-up" style={{ backgroundColor: "#07A4B5" }}><p style={{textAlign:"left"}}>{props.thekey}</p></div>
                    <div className=" avatar mx-auto bg-white">
                    
                        <Avatar img={props.img}/>
                    </div>
                    <div className="card-body">
                        <h4 className="mb-4">{props.name}</h4>
                        <Details phone={props.phone} email={props.email}/>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}