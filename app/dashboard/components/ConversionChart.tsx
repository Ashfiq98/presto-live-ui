'use client';
import React from "react";
import LineChart from "./LineChart";
import '../../styles/dashboard.css';  // We'll create this CSS file next

const ConversionChart: React.FC = () => {
        // Array of labels shown on X-axis
    const data = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
            {
                label: "Conversion Rate", // Name of the dataset
                data: [2.6, 3.1, 3.3, 2.9, 3.1, 4.5, 5.0, 4.2, 4.1, 4.5, 3.8, 2.5], // Actual values
                borderColor: "#2AD8A7",
                backgroundColor: "transparent",
                tension: 0.4,// Makes the line curved (0 = straight, 1 = very curved)
                pointRadius: 4,  // Size of the dots
                pointBackgroundColor: "#2AD8A7",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,  // Chart resizes with container
        maintainAspectRatio: false, // Allows custom height/width ratio
        plugins: {
            legend: {
                display: false, // Hides the legend box
            },
            title: {
                display: false, // Hides the chart title

            },
            tooltip: {
                callbacks: {
                    label: (context: any) => `${context.parsed.y}%`,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: '#f0f0f0',
                    drawBorder: false,
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                },
                border: {
                    display: false,
                },
            },
            y: {
                min: 0,
                max: 8,
                ticks: {
                    stepSize: 2,
                    callback: (value: number) => `${value}%`,  // Adds % sign to tooltip values
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    display: true,
                    color: '#f0f0f0',
                    drawBorder: false,
                },
                border: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="container">
            <div className="chart-container">
                <div className="chart-header">
                    <h2 className="chart-title">Conversion rate</h2>
                    <button className="toggle-button"><img src="conversion-icon.svg" /></button>
                </div>
                <div className="chart-wrapper">
                    <LineChart data={data} options={options} />
                </div>
            </div>
        </div>

    );
};

export default ConversionChart;