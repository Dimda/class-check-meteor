if (Meteor.isClient) {
	var template  = Template.search_form;
	template.onCreated(function () {
		var chosenFloor = new ReactiveVar();
		this.chosenFloor = chosenFloor;
		this.autorun(function () {
			chosenFloor.set(null)
		})
	})
  	template.helpers({
  		floors: function(){
  			return [2,3,4,5,6,7,8,9];
  		},
  		weeks: function(){
  			return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  		},
  		isChosenFloor: function (floor) {
  			return Template.instance().chosenFloor.get() === floor;
  		},
  		chosenFloor: function () {
  			return Template.instance().chosenFloor.get();
  		},
  		rooms: function () {
  			var chosenFloor = Template.instance().chosenFloor.get();
  			if (chosenFloor == 2) {
  				return ['A-1', 'A-2']
  			}
  			return []
  		},
  		periods: function(){
  			return [1,2,3,4,5];
  		},
  		lesson_names: function(){
  			return ["lesson1","lesson2","lesson3","lesson4","lesson5"];
  		},
  		teachers: function(){
  			return ["teacher1","teacher2","teacher3","teacher4","teacher5"];
  		}
  	});


  	template.events({
	    'change #floor': function(event, template) {
	      	var floornum = parseInt(template.find('#floor').value);
	      	Template.instance().chosenFloor.set(floornum)
	    }
  	});
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
