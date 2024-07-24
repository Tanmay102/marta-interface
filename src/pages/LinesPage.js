import { useState, useEffect } from 'react';
import TrainsList from '../components/TrainsList';
import NavBar from '../components/NavBar';

function LinesPages( {line} ) {

    const [trains, setTrains] = useState(null);
    const [stations, setStations] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const goldStations = ["Doraville", "Chamblee", "Brookhaven", "Lenox", "Lindbergh Center","Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"]
    const redStations = ["North Springs", "Sandy Springs", "Dunwoody", "Medical Center", "Buckhead", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"]
    const blueStations = ["Hamilton E. Holmes", "West Lake", "Ashby", "Vine City", "GWCC/CNN Center", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood", "East Lake", "Decatur", "Avondale", "Kensington", "Indian Creek"]
    const greenStations = ["Bankhead", "Ashby", "Vine City", "GWCC/CNN Center", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood"]

    async function fetchData() {
        try {
            setLoading(true);
            const trainsResponse = await fetch('/api/traindata');
            if (!trainsResponse.ok) {
                throw Error("Problem in fetching data");
            }
            const newTrains = await trainsResponse.json();
            let filteredTrains = newTrains.filter((train) => {
                return train.LINE === line.toUpperCase();
            });
            setTrains(filteredTrains);

            // Dynamic station setting (only provide current stations)
            // let newStations = []
            // filteredTrains.forEach((train) => {
            //     if (!newStations.includes(train.STATION)) {
            //         newStations.push(train.STATION)
            //     }
            // });
            
            if (line === "gold") {
                setStations(goldStations);
            } else if (line === "blue") {
                setStations(blueStations);
            } else if (line === "red") {
                setStations(redStations);
            } else {
                setStations(greenStations);
            }
            setError(null);
            setLoading(false);
        } catch (error) {
            console.log("Error occured: " + error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect( () => {
        fetchData()
    }, [line])

    // useEffect(() => {

    //     setLoading(true);
    //     fetchData(line);

    //     // Fetch data every 10 seconds
    //     const interval = setInterval(() => {
    //         fetchData(line);
    //     }, 20000);

    //     // Cleanup function to clear the interval when component unmounts or when line changes
    //     return () => clearInterval(interval);
    // }, [line]);

    function displayLoading() {
        return (
            <h1 className='text-5xl font-bold flex mt-20 p-10 justify-center'> Loading... </h1>
        )
    }

    return (
        <div className="lines-page">
            <NavBar line={line} loading={loading}/> 
            { error && <p> Error occurred </p>}
            { loading ? displayLoading() : <TrainsList trainsList={trains} stationsList={stations} line={line}/>}
        </div>
    )
}

export default LinesPages;