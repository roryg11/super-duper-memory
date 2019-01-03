import date20181231 from "./images/20181231.jpg"; 
import date20190101 from "./images/20190101.jpg"; 
import date20190102 from "./images/20190102.jpg"; 



const posts = [
    {
        answer: "SORT OF...",
        description: `Took a jaunt around Cusco today, but the altitude is about 11,000 ft,
        so basically we walk a block and have to stop to rest. We were feeling pretty pleased with
        ourselves until we saw a guy running at least an 8 min mile through the hills near our apartment.
        sidebar: Mike kindly posing for portrait mode before we devoured udon noodle soup at Bojosan.`,
        date: new Date("01/02/2019"),
        formattedDate: "01.02.2018",
        backgroundImg: date20190102,
        latitude: -13.5226402,
        longitude: -71.9673386,
    },
    {
        answer: "YES",
        description: `Spent New Year's drinking one Pisco and going to bed... 
        So far we've discovered that Cusco has seemingly more hills than San Francisco
        and their own brand of hairless dog.`,
        date: new Date("01/01/2019"),
        formattedDate: "01.01.2018",
        backgroundImg: date20190101,
        latitude: -13.5226402,
        longitude: -71.9673386,
    },
    {
        answer: "YES",
        description: "Started our first day with a layover in Miami and some coffee followed by a pleasant flight to Lima, celebrated the new year with a Pisco Sour at the airport hotel and wearing yellow undies for luck!",
        date: new Date("12/31/2018"),
        formattedDate: "12.31.2018",
        backgroundImg: date20181231,
        latitude: -12.046374,
        longitude: -77.042793
    }
];

export default posts;

