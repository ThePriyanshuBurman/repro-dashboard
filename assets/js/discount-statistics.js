/**
 * Statistics Cards
 */

'use strict';

(function () {
    let cardColor, shadeColor, labelColor, headingColor, barBgColor, borderColor;

    if (isDarkStyle) {
        cardColor = config.colors_dark.cardColor;
        labelColor = config.colors_dark.textMuted;
        headingColor = config.colors_dark.headingColor;
        shadeColor = 'dark';
        barBgColor = '#3d4157';
        borderColor = config.colors_dark.borderColor;
    } else {
        cardColor = config.colors.cardColor;
        labelColor = config.colors.textMuted;
        headingColor = config.colors.headingColor;
        shadeColor = '';
        barBgColor = '#efeef0';
        borderColor = config.colors.borderColor;
    }

    // KCRE Radial Bar Chart

    const kcreChartEI = document.querySelector('#kcreChart'),
        kcreChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [50],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-$50'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof kcreChartEI !== undefined && kcreChartEI !== null) {
        const expensesRadialChart = new ApexCharts(kcreChartEI, kcreChartConfig);
        expensesRadialChart.render();
    }

    //100OFF
    const hundredoffChartEI = document.querySelector('#hundredoffChart'),
        hundredoffChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [100],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-$100'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof hundredoffChartEI !== undefined && hundredoffChartEI !== null) {
        const hundredOffRadialChart = new ApexCharts(hundredoffChartEI, hundredoffChartConfig);
        hundredOffRadialChart.render();
    }

    //40OFF
    const fortyOffChartEI = document.querySelector('#fortyOffChart'),
        fortyOffChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [40],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-$40'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof fortyOffChartEI !== undefined && fortyOffChartEI !== null) {
        const fortyOffRadialChart = new ApexCharts(fortyOffChartEI, fortyOffChartConfig);
        fortyOffRadialChart.render();
    }

    //MAXXUM
    const maxxumChartEI = document.querySelector('#maxxumChart'),
        maxxumChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [100],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-100%'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof maxxumChartEI !== undefined && maxxumChartEI !== null) {
        const maxxumRadialChart = new ApexCharts(maxxumChartEI, maxxumChartConfig);
        maxxumRadialChart.render();
    }

    //75OFF
    const seventyFiveOffChartEI = document.querySelector('#seventyFiveOffChart'),
        seventyFiveOffChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [75],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-$75'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof seventyFiveOffChartEI !== undefined && seventyFiveOffChartEI !== null) {
        const seventyFiveOffRadialChart = new ApexCharts(seventyFiveOffChartEI, seventyFiveOffChartConfig);
        seventyFiveOffRadialChart.render();
    }

    //50OFF
    const fiftyOffChartEI = document.querySelector('#fiftyOffChart'),
        fiftyOffChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [50],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-$50'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof fiftyOffChartEI !== undefined && fiftyOffChartEI !== null) {
        const fiftyOffRadialChart = new ApexCharts(fiftyOffChartEI, fiftyOffChartConfig);
        fiftyOffRadialChart.render();
    }

    //VIP10OFF
    const vip1ChartEI = document.querySelector('#vip1Chart'),
        vip1ChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [10],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-10%'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof vip1ChartEI !== undefined && vip1ChartEI !== null) {
        const vip1RadialChart = new ApexCharts(vip1ChartEI, vip1ChartConfig);
        vip1RadialChart.render();
    }

    //VIP5OFF
    const vip5ChartEI = document.querySelector('#vip5Chart'),
        vip5ChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [5],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-5%'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof vip5ChartEI !== undefined && vip5ChartEI !== null) {
        const vip5RadialChart = new ApexCharts(vip5ChartEI, vip5ChartConfig);
        vip5RadialChart.render();
    }

    //LIV10
    const livChartEI = document.querySelector('#livChart'),
        livChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [10],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-10%'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof livChartEI !== undefined && livChartEI !== null) {
        const livRadialChart = new ApexCharts(livChartEI, livChartConfig);
        livRadialChart.render();
    }

    //25OFF
    const twentyFiveOffChartEI = document.querySelector('#twentyFiveOffChart'),
        twentyFiveOffChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [25],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-$25'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof twentyFiveOffChartEI !== undefined && twentyFiveOffChartEI !== null) {
        const twentyFiveOffRadialChart = new ApexCharts(twentyFiveOffChartEI, twentyFiveOffChartConfig);
        twentyFiveOffRadialChart.render();
    }

    //5OFF
    const fiveOffChartEI = document.querySelector('#fiveOffChart'),
        fiveOffChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [5],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-5%'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof fiveOffChartEI !== undefined && fiveOffChartEI !== null) {
        const fiveOffRadialChart = new ApexCharts(fiveOffChartEI, fiveOffChartConfig);
        fiveOffRadialChart.render();
    }

    //WEICHERT149
    const weiChartEI = document.querySelector('#weiChart'),
        weiChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [149],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-$149'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof weiChartEI !== undefined && weiChartEI !== null) {
        const weiRadialChart = new ApexCharts(weiChartEI, weiChartConfig);
        weiRadialChart.render();
    }

    //VIP20OFF
    const vip2ChartEI = document.querySelector('#vip2Chart'),
        vip2ChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [20],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-20%'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof vip2ChartEI !== undefined && vip2ChartEI !== null) {
        const vip2RadialChart = new ApexCharts(vip2ChartEI, vip2ChartConfig);
        vip2RadialChart.render();
    }

    //VIP15OFF
    const vip15ChartEI = document.querySelector('#vip15Chart'),
        vip15ChartConfig = {
            chart: {
                height: 145,
                sparkline: {
                    enabled: true
                },
                parentHeightOffset: 0,
                type: 'radialBar'
            },
            colors: [config.colors.warning],
            series: [15],
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        strokeWidth: '45%',
                        background: borderColor
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            fontSize: '24px',
                            color: headingColor,
                            fontWeight: 500,
                            offsetY: -5,
                            formatter: function () {
                                return '-15%'; // Format the value to show '$50'
                            }
                        }
                    }
                }
            },
            grid: {
                show: false,
                padding: {
                    bottom: 5
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Progress'],
            responsive: [
                {
                    breakpoint: 1442,
                    options: {
                        chart: {
                            height: 100
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '55%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '16px',
                                        offsetY: -1
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 228
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '75%'
                                },
                                track: {
                                    strokeWidth: '50%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '26px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 890,
                    options: {
                        chart: {
                            height: 180
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 426,
                    options: {
                        chart: {
                            height: 142
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '70%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '22px'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    breakpoint: 376,
                    options: {
                        chart: {
                            height: 105
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '60%'
                                },
                                dataLabels: {
                                    value: {
                                        fontSize: '18px'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    if (typeof vip15ChartEI !== undefined && vip15ChartEI !== null) {
        const vip15RadialChart = new ApexCharts(vip15ChartEI, vip15ChartConfig);
        vip15RadialChart.render();
    }
})();
