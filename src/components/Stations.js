export default function Stations( {stations, setCurrStation, currStation} ) {

    function clicked(station) {
        if (station === "Lakewood/Ft. McPherson") {
            station = "Lakewood"
        } else if (station === "GWCC/CNN Center") {
            station = "Omni Dome"
        }
        setCurrStation(station);
    }

    return (
        <div className="text-white bg-slate-800 flex flex-col text-lg">
            <button className={currStation === null ? "text-lg w-100 px-10 py-3 bg-slate-700" : "text-lg px-10 py-3"} onClick={() => setCurrStation(null)}> All Stations </button>
            {stations.map((station) => {
                let checkStation = station
                if (station === "Lakewood/Ft. McPherson") {
                    checkStation = "Lakewood"
                } else if (station === "GWCC/CNN Center") {
                    checkStation = "Omni Dome"
                }
                return (
                    <button className={currStation === checkStation ? "text-lg w-100 px-10 py-3 bg-slate-700" : "text-lg px-10 py-3"} onClick={() => clicked(station)}> {station} </button>
                )
            })}
        </div>
    )
}