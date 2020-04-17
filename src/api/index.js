import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        // i deconstructed the data api obj to get only the keys i wanted and then assigned those to the modified data object that i created
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        const modifiedData = {confirmed, recovered , deaths, lastUpdate}
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}