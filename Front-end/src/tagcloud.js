anychart.onDocumentReady(function() {
  var data = [
    {"x": "Tough Grader", "value": 10},
    {"x": "Kind", "value": 98},
    {"x": "Mean", "value": 54},
    {"x": "Boring", "value": 52},
    {"x": "Interesting Lecture", "value": 42},
    {"x": "Many Example", "value": 28},
    {"x": "Too many homework", "value": 26},
    {"x": "Easy A", "value": 26},
    {"x": "Great Feedback", "value": 22},
    {"x": "Helpful", "value": 22},
    {"x": "Would Take Again", "value": 15}
  ];

 // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // display the word cloud chart
  chart.container("container");
  chart.draw();
  });