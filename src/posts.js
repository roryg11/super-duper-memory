import date20181231 from "./images/20181231.JPG"; 
import date20190101 from "./images/20190101.jpg"; 


const posts = [
    {
        answer: "YES",
        description: `Spent New Year's drinking one Pisco and going to bed... 
        So far we've discovered that Cusco has seemingly more hills than San Francisco
        and their own brand of hairless dog. Mostly we're just exhausted and trying to get some zzz's
        at our airbnb`,
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

