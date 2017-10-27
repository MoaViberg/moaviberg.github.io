// Our labels along the x-axis
var years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
// For drawing the lines
var sweden = [10.5,10.3,10.4,10.5,10.6,10.6,10.6,10.6,10.7,10.7,10.7,10.7];
var unitedstates = [11.5,11.5,11.4,11.8,12.1,12.2,12.4,12.6,12.7,12.9,13.1,13.2];
var unitedkingdom = [10.5,10.6,10.6,10.7,10.9,11,11.2,11.3,11.4,11.5,11.6,11.8];
var india = [0.02,0.02,0.03,0.03,0.03,0.04,0.04,0.04,0.04,0.05,0.05,0.05];
var brazil = [2.4,2.5,2.8,3.0,3.0,3.0,3.1,3.3,3.4,3.5,3.7,3.8];
var germany = [11.3,11.4,11.5,11.4,11.6,11.7,11.9,12,12.1,12.2,12.3,12.4];
var china = [2.5,2.7,2.9,3.2,3.4,3.7,3.9,4.1,4.4,4.6,4.9,5.1];
var canada = [10.2,9.9,9.9,10.2,10.4,10.7,10.8,11,11.1,11.2,11.3,11.5];
var japan = [7.3,7.3,7.4,7.5,7.8,7.8,8,8.1,8.2,8.3,8.4,8.5];
var greece = [7.9,7.7,7.6,7.5,7.8,8,8,8.1,8.1,8.1,8.2,8.2];
var norway = [10.2,10,10.1,10.3,10.3,10.3,10.4,10.4,10.5,10.5,10.6,10.6];
var australia = [6.2,6.4,6.7,7,7.2,7.2,7.4,7.7,7.9,8.1,8.3,8.5];
var finland = [7.9,8,8.2,8.3,8.5,8.6,9,9.1,9.3,9.4,9.6,9.8];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: sweden,
        label: "Sweden",
        borderColor: "grey",
        pointBorderColor: "#00ffbf",
        backgroundColor: "#00ffbf",
		fill: false
      },
      { 
        data: unitedstates,
        label: "US",
        borderColor: "grey",
        pointBorderColor: "blue",
        backgroundColor: "blue",
		fill: false
      },
      { 
        data: unitedkingdom,
        label: "UK",
        borderColor: "grey",
        pointBorderColor: "green",
        backgroundColor: "green",
		fill: false
      },
      { 
        data: india,
        label: "India",
        borderColor: "grey",
        pointBorderColor: "red",
        backgroundColor: "red",
		fill: false
      },
      { 
        data: brazil,
        label: "Brazil",
        borderColor: "grey",
        pointBorderColor: "pink",
        backgroundColor: "pink",
		fill: false
      },
      { 
        data: germany,
        label: "Germany",
        borderColor: "grey",
        pointBorderColor: "#ADFF2F",
        backgroundColor: "#ADFF2F",
		fill: false

      },
      { 
        data: china,
        label: "China",
        borderColor: "grey",
        pointBorderColor: "#FF00FF",
        backgroundColor: "#FF00FF",        
		fill: false
      },
      { 
        data: canada,
        label: "Canada",
        borderColor: "grey",
        pointBorderColor: "#7B68EE",
        backgroundColor: "#7B68EE",          
		fill: false
      }
      ,
      { 
        data: japan,
        label: "Japan",
        borderColor: "grey",
        pointBorderColor: "#FFD700",
        backgroundColor: "#FFD700",           
		fill: false
      }
       ,
      { 
        data: greece,
        label: "Greece",
        borderColor: "grey",
        pointBorderColor: "#00CED1",
        backgroundColor: "#00CED1",             
		fill: false
      },
      { 
        data: norway,
        label: "Norway",
        borderColor: "grey",
        pointBorderColor: "#FF6347",
        backgroundColor: "#FF6347",           
		fill: false
      },
      { 
        data: australia,
        label: "Australia",
        borderColor: "grey",
        pointBorderColor: "#191970",
                backgroundColor: "#191970",
		fill: false
      },
      { 
        data: finland,
        label: "Finland",
        borderColor: "grey",
        pointBorderColor: "#2F4F4F",
        backgroundColor: "#2F4F4F",        
		fill: false
      }
    ]
  },


}
);






//type: bar
// data: asia
// backgroundColor: "red"


//ctx kan du ändra