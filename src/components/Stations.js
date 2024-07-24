export default function Stations( {stations, setCurrStation, currStation} ) {

    return (
        <div className="text-white bg-slate-800 flex flex-col text-lg">
            <button className={currStation === null ? "text-lg w-100 px-10 py-3 bg-slate-700" : "text-lg px-10 py-3"} onClick={() => setCurrStation(null)}> All Stations </button>
            {stations.map((station) => {
                return (
                    <button className={currStation === station ? "text-lg w-100 px-10 py-3 bg-slate-700" : "text-lg px-10 py-3"} onClick={() => setCurrStation(station)}> {station} </button>
                )
            })}
        </div>
    )
}