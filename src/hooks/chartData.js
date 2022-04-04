import { useEffect, useState } from "react"

const ChartDataDasboard = () => {
    const [dataForChart, setDataForChart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDataForChart(data))
    }, []);

    return [dataForChart, setDataForChart];
}

export default ChartDataDasboard;