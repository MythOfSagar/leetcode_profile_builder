
type LevelProps = { level: string, solved: number, target: number, onClick: () => void }

const Level = (props: LevelProps) => {

    const { level, onClick, solved, target } = props

    return <div
        onClick={onClick}
        className="Level"
        style={{
            backgroundColor: solved < target ? "red" : "black",
            width: '250px',
            height: '250px',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"50%"
        }}
    >
        <div style={{
            textAlign: "center", 
          
        }}>
            <h1>{level}</h1>
            <h1><span style={{ color: "blue", fontSize: "75px" }}>{solved}</span>{"/"}{target}</h1>
        </div>

    </div>
}

export default Level