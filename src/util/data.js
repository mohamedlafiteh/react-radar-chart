const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ],
  datasets: [
    {
      label: "First dataset",
      backgroundColor: "rgb(220, 20, 60,0.2)",
      pointBackgroundColor: "rgba(220,220,220,1)",
      data: [
        80,
        23,
        90,
        12,
        67,
       37,
       90
      ]
    }, {
      label: "Second dataset",
      backgroundColor: "rgb(0, 191, 255,0.2)",
      pointBackgroundColor: "rgba(151,187,205,1)",
      hoverPointBackgroundColor: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [
        42,
        10,
        42,
        37,
        92,
        40,
        78
      ]
    }
  ]

 
}

const  options = {
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Chart.js Radar Chart'
  },
  scale: {
    reverse: false,
    gridLines: {
      color: [
        'black',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
      ]
    },
    ticks: {
      beginAtZero: true
    }
  }
}

module.exports={
  data,options
}