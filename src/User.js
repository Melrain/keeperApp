export const User = (props) => {
    return (
        <div>
            <div className="container card mb-4 rounded-3 shadow-sm" style={{ width: "26rem" }}>

                <div>
                    <h2>{props.name}</h2>
                </div >
                <div>
                    <img className="App-img" src={props.url} alt=""></img>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>

    )
}