import "./css/styles.css"

export default function Card({card}){
    return(
        <div className="card" key={card.id}>
            <img src={`http://127.0.0.1:8000${card.img}`} alt="" />
            <h1>{card.title}</h1>
            <p>
                {card.desc}
            </p>
            <a href={card.link} target="_blank">See The Website</a>
        </div>
    )
}