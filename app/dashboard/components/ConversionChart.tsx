import React from "react";
import LineChart from "./LineChart";

const ConversionChart: React.FC = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Sales 2025",
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: "#2AD8A7",
                backgroundColor: "rgba(75,192,192,0.2)",
                tension: 0.4, // Smooth curve
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Sales Over Time",
            },
        },
        // scales: {
        //     x: {
        //         title: {
        //             display: true,
        //             text: "Months",
        //         },
        //     },
        //     y: {
        //         title: {
        //             display: true,
        //             text: "Sales",
        //         },
        //     },
        // },
    };

    return (
        <div className="container">
            <div className="conversion-chart">
                <h1>Conversion Rate <img src="conversion-icon.svg" alt="" /></h1>
                <LineChart data={data} options={options} />

            </div>
        </div>
    );
};

export default ConversionChart;
