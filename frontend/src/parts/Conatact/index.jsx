import "./css/styles.css"

export function ContactWay({contact}){

    return(
        <div className="contactway">
            <a href={contact.link} target="_blank"><img src={`http://127.0.0.1:8000${contact.logo}`} alt="" /></a>
        </div>
    )
}