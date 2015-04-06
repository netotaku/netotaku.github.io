function color(segments, pallette){

  var pallette = colors[pallette];

  for(var i = 0; i < segments.length; i++){
    segments[i].color = '#'+pallette[i];
  }

  console.log(segments);

  return segments;

}

//////////

function flatten(segments){

  var data = [];

  for(segment in segments){
    if(segments[segment].value){
      data.push(segments[segment]);
    }
  }

  return data;

}

//////////

function chart(chart, pallette){

  var segments = charts[chart];

  for(project in projects){

    var rows = projects[project][chart]; // get rows from project

    for(var i = 0; i < rows.length; i++){

      var row = rows[i];

      if(typeof(segments[row].value) === 'undefined'){
        segments[row].value = 1;
      } else {
        segments[row].value++;
      }

    }

  }

  return color(flatten(segments), pallette);

}

function make(el,type,pallette){

  var data = chart(el,pallette), $list = $('.'+el+' ul');

  new Chart(document.getElementById(el).getContext("2d"))[type](data);

  for(segment in data.sort(function(a,b){
    return a.value < b.value ? 1 : -1;
  })){
    $('<li>').appendTo($list).text(data[segment].label + ' ( '+ data[segment].value +' )');
  }

}

$(function(){

  Chart.defaults.global.responsive = true;
  Chart.defaults.global.maintainAspectRatio = true;
  // Chart.defaults.Doughnut.segmentShowStroke = false;

  make('roles','PolarArea','bluetoblue');
  make('lang','Pie','greyscale');
  make('frameworks','Pie','greyscale');

  var $projects = $('.projects ul');

  for(project in projects.sort(function(a,b){
    return a.label < b.label ? -1 : 1;
  })){
    $('<li>').appendTo($projects).html('<a href="'+projects[project].url+'" target="_blank"'+(projects[project].status ? '' : ' class="disabled"')+'>'+projects[project].label+'</a>');
  }

});
