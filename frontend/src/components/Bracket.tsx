
function Bracket (props: any) {
    
    return (
        <div id="BracketRoot">
        <div>
            <div className="bracket">
                <div className="bracketContainerOben">
                    <h2>{props.T1}</h2>
                </div>
                <div className={"gabelungUnten"}/>
            </div>
            <div className="bracket">
                <div className="bracketContainerUnten">
                    <h2>{props.T2}</h2>
                </div>
                <div className={"gabelungOben"}/>
            </div>
        </div>
        <div className="zone-2-verbindung"/>
        </div>
    )
}

export default Bracket