if (Meteor.isClient) {

  	Template.serch_form.helpers({
  		floors: function(){
  			return [2,3,4,5,6,7,8,9];
  		}
  	});

  	Template.serch_form.helpers({
  		weeks: function(){
  			return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  		}
  	});

  	Template.serch_form.helpers({
  		periods: function(){
  			return [1,2,3,4,5];
  		}
  	});

  	Template.serch_form.helpers({
  		lesson_names: function(){
  			return ["lesson1","lesson2","lesson3","lesson4","lesson5"];
  		}
  	});

  	Template.serch_form.helpers({
  		teachers: function(){
  			return ["teacher1","teacher2","teacher3","teacher4","teacher5"];
  		}
  	});

  	Template.addsubject.events({
    'change #floor' : function(event, template){
      var floornum = parseInt(template.find('#floor').value);
      template.find('#period').value = 4;
      switch (floornum) {
        case 4:
          console.log("it works!!");
        default:
      }
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
