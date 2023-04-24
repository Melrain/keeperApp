export const Avatar = (props) => {
    return (
        <div>
            <img src={props.img}
                className="circle-img img-fluid" alt="avatar-img" />
        </div>
    )
}