import "./Calendar.css";

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const Calendar = () => {
    const d = new Date();
    const day = d.getDate();
    const rank = dayNames[d.getDay()];
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();

    return (
        <div className="container">
            <div className="calendar">
                <div className="calendar-left">
                    <div className="day">{day}</div>
                    <div className="rank">{rank}</div>
                </div>

                <div className="calendar-right">
                    <div className="month">{month}</div>
                    <div className="year">{year}</div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
