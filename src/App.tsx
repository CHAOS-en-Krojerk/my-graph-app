import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactApexChart from 'react-apexcharts';

export default function App()
{
  const initialSeries: any = [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10],
    }]
  const graphOptions: any = {
    chart: {
      width: 500,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    colors: ['#F44336', '#E91E63', '#9C27B0'],//colors of series
    title: {
      text: 'Radar Chart - Multi Series',
      style: {
        color: '#e7e7e7'
      }
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    tooltip: {
      fillSeriesColor: true,
      theme: 'dark'
    },
    markers: {
      size: 5,
      hover: {
        size: 10
      }
    },

    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
      formatter: function (val:any, opts:any) {
          return val
      },
      textAnchor: 'middle',
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      style: {
          fontSize: '10px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: undefined
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#fff',
        opacity: 0.9,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
        }
      },
      dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
      }
    },

    xaxis: {
      categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
      labels: {
        show: true,
        style: {
          colors: '#a8a8a8',
          fontSize: "11px",
          fontFamily: 'Arial',
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#e7e7e7"
        }
      }
    },
    legend: {
      labels: {
        colors: '#a8a8a8',
        useSeriesColors: false
      },
    }
  };

  const initialData: any = {
    series: initialSeries,
    options: graphOptions,
  };
  const [graphData, setGraphData] = useState<any>(initialData);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button onClick={() =>
          {
            const newSeries = [
              {
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
              },
              {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
              },
              {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
              }];
            const newData: any = {
              series: newSeries,
              options: graphOptions,
            }
            setGraphData(newData);
          }}>Set data A</button>
          &nbsp;
          <button onClick={() =>
          {
            const newSeries = [
              {
                name: 'Series 1',
                data: [90, 10, 75, 20, 55, 36],
              },
              {
                name: 'Series 2',
                data: [100, 90, 10, 63, 4, 40],
              },
              {
                name: 'Series 3',
                data: [86, 20, 64, 0, 95, 100],
              }];
            const newData: any = {
              series: newSeries,
              options: graphOptions,
            }
            setGraphData(newData);
          }}>Set data B</button>
          &nbsp;
          <button onClick={() =>
          {
            const newSeries = [
              {
                name: 'Series 1',
                data: [12, 24, 56, 97, 12, 34],
              },
              {
                name: 'Series 2',
                data: [44, 3, 79, 45, 40, 60],
              },
              {
                name: 'Series 3',
                data: [20, 43, 45, 70, 26, 10],
              }];
            const newData: any = {
              series: newSeries,
              options: graphOptions,
            }
            setGraphData(newData);
          }}>Set data C</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>

        </div>
        <ReactApexChart options={graphData.options} series={graphData.series} type="radar" width={500} height={500} />
      </header>
    </div>
  );
}