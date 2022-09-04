/**
 * Created with JetBrains PhpStorm.
 * User: eagle23
 * Date: 30.06.12
 * Time: 16:54
 * To change this template use File | Settings | File Templates.
 */
Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },			  


		plotBorderColor: '#606063',
		
      plotBackgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
	    plotBorderWidth: 0				 
        plotShadow: false,
        borderWidth: 0,	
		borderRadius: 0,		 
    },
    title: {
        style: {
            color: '#E0E0E3',
            fontFamily: '"Trebuchet MS", Verdana, sans-serif',
            fontWeight: 'bold',
            fontSize: '16px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            fontFamily: '"Trebuchet MS", Verdana, sans-serif',
            fontWeight: 'bold',
            fontSize: '12px'
        }   
    },
    xAxis: {
        gridLineColor: '#707073',
		gridLineWidth: 0,
        lineWidth: 0,
        lineColor: '#707073',
        tickWidth: 1,
        tickLength: 4,
        tickColor: '#707073',
		minorGridLineColor: '#505053',
        labels: {
            y: 15,
            autoRotation: false,
            style: {
                color: '#E0E0E3',
                fontFamily: '"Trebuchet MS", Verdana, sans-serif',
                fontSize: '11px'
            }
        },
        title: {
            style: {
                color: '#A0A0A3',
                fontFamily: '"Trebuchet MS", Verdana, sans-serif',
                fontWeight: 'bold',
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
		gridLineWidth: 1,
        minorGridLineColor: '#505053',
		minorGridLineWidth: 0,
        minorTickInterval: 'auto',
        lineWidth: 0,
        lineColor: '#707073',
        tickWidth: 1,
        tickColor: '#707073',
        labels: {
            x: 2,
            align: 'left',
            style: {
				color: '#E0E0E3',
                fontFamily: '"Trebuchet MS", Verdana, sans-serif',
                fontSize: '11px'
         }					
        },
        title: {
           style: {
                color: '#A0A0A3',
                fontFamily: '"Trebuchet MS", Verdana, sans-serif',
                fontWeight: 'bold',
                fontSize: '12px'
            }
        }
    },
    plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
    tooltip: {
		backgroundColor: 'rgba(0, 0, 0, 0.85)',
		style: {
         color: '#F0F0F0'
        borderWidth: 1,
        borderRadius: 3,
        shadow: false
		}  
},
    legend: {
        borderWidth: 1,
        borderRadius: 3,
        itemStyle: {
            color: '#E0E0E3',
            fontFamily: '"Trebuchet MS", Verdana, sans-serif',
            fontWeight: 'normal',
            fontSize: '12px'
        },
        itemHoverStyle: {
            color: 'FFF'
        }
		itemHiddenStyle: {
         color: '#606063'
      }
	},
	credits: {
      style: {
         color: '#666'
      }
	},			   
	drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },
   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },
   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   
    navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
					
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },
   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
