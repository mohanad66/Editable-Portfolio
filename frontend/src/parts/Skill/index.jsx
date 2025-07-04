import "./css/styles.css"


export default function Skill({ skill }) {
    const percentage = skill.percentage || 0;

    return (
        <div className="skill">
            <p>{skill.title}</p>
            <div className="background" style={{ width: "100%", height: "20px", background: "#eee", borderRadius: "10px", overflow: "hidden" }}>
                <div
                    className={percentage <= 25 ? 'skill-beginner percentage' :
                        percentage <= 50 ? 'skill-novice percentage' :
                            percentage <= 75 ? 'skill-intermediate percentage' :
                                'skill-advanced percentage'}
                    style={{
                        width: `${percentage}%`,
                        height: "100%",
                        transition: "width 0.5s",
                    }}
                >{percentage} %</div>
            </div>
        </div>
    )
}