export default function Train( {train} ) {
    const color = train.LINE
    let border = "";
    let background = "";
    if (color === "GOLD") {
        border = "border-y-yellow-500"
        background = "bg-yellow-500"
    } else if (color === "BLUE") {
        border = "border-y-blue-500"
        background = "bg-blue-500"
    } else if (color === "GREEN") {
        border = "border-y-green-500"
        background = "bg-green-500"
    } else if (color === "RED") {
        border = "border-y-red-500"
        background = "bg-red-500"
    }

    return (
        <div className={`flex justify-start py-8 ${border} border-b-4`}>
            <p className="ml-6 w-10 text-5xl font-extrabold"> {train.STATION[0]}</p>
            <div className="flex flex-col w-auto ml-16 items-start font-semibold">
                <p> {train.STATION}  &nbsp; --&gt; &nbsp; {train.DESTINATION.toUpperCase()} </p>
                <div className="flex flex-row font-semibold">
                    <div className={`w-16 mr-10 rounded-md ${background} text-center`}> <p className={`text-white`}> {train.LINE} </p> </div>
                    {train.IS_END_OF_SERVICE === false ? <p className="text-green-500"> In Service </p> : <p className="text-red-500 italic"> Ended Service </p>}
                </div>
            </div>
            {train.IS_END_OF_SERVICE ? (<p className="flex items-center ml-auto mr-20 text-xl"> -- </p>) : 
                (<p className={train.WAITING_TIME === "Arriving" ? "flex items-center ml-auto mr-20 text-2xl text-green-500 font-bold" : "flex items-center ml-auto mr-20 text-xl"}> {train.WAITING_TIME} </p>)}
        </div>
    )
}