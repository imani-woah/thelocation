let count = 0;

// this line initializes our count element to display the count variable
$(".count").html(count);

$(".live-btn").click(function () {
  // this line positively increments our count variable and outputs the value
  $(".count").html(++count);

  // below we have our conditionals that execute when the count variable reaches a certain threshold. here is where we write any functions that we want to execute when the conditions are met!

  if (count == 10) {
    console.log("10 clicks!");
    $(".deny").addClass("show");
  }
});


  $( function() {
    $( "#draggable" ).draggable({ revert: "valid" });
    $( "#draggable1" ).draggable({ revert: "valid" });
    $( "#draggable2" ).draggable({ revert: "valid" });
 
    $( "#droppable" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "No." );
      }
    });
  } );


  $(document).ready(function(){
  $("#wrath").mouseenter(function(){
    alert("FUCK EVERYTHING");
  });
});

  $(document).ready(function(){
  $("#wrath1").mouseenter(function(){
    alert("FUCK EVERYTHING");
  });
});

  $(document).ready(function(){
  $("#wrath2").mouseenter(function(){
    alert("FUCK EVERYTHING");
  });
});

  $(document).ready(function(){
  $("#wrath3").mouseenter(function(){
    alert("FUCK EVERYTHING");
  });
});

  $(document).ready(function(){
  $("#ire").mouseenter(function(){
    alert("FUCK YOU");
  });
});

  $(document).ready(function(){
  $("#ire1").mouseenter(function(){
    alert("FUCK YOU");
  });
});

  $(document).ready(function(){
  $("#ire2").mouseenter(function(){
    alert("FUCK YOU");
  });
});

  $(document).ready(function(){
  $("#ire3").mouseenter(function(){
    alert("FUCK YOU");
  });
});

  $(document).ready(function(){
  $("#fury").mouseenter(function(){
    alert("FUCK THIS");
  });
});

  $(document).ready(function(){
  $("#fury1").mouseenter(function(){
    alert("FUCK THIS");
  });
});

  $(document).ready(function(){
  $("#fury2").mouseenter(function(){
    alert("FUCK THIS");
  });
});

  $(document).ready(function(){
  $("#fury3").mouseenter(function(){
    alert("FUCK THIS");
  });
});