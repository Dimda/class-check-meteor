if (Meteor.isClient) {
	var template  = Template.registration_form;
	template.onCreated(function () {
		var chosenFloor = new ReactiveVar();
		this.chosenFloor = chosenFloor;
		this.autorun(function () {
			chosenFloor.set(null);
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
        switch(chosenFloor){
          case 2:
            return ['A-1', 'A-2'];
            break;
          case 3:
            return ['A', 'B','C'];
            break;
          case 4:
            return ['A', 'B','C','D'];
            break;
          case 5:
            return ['A', 'B','C','D'];
            break;
          case 6:
            return ['A', 'B','C','D'];
            break;
          case 7:
            return ['A', 'B','C','D'];
            break;
          case 8:
            return ['A', 'B','C','D'];
            break;
          case 9:
            return ['D-1','D-2'];
            break;
          default:
        }
  			return [];
  		},
  		periods: function(){
  			return [1,2,3,4,5];
  		},
  		lesson_names: function(){
  			return ["lesson1","lesson2","lesson3","lesson4","lesson5","seminar"];
  		},
  		teachers: function(){
  			return ["teacher1","teacher2","teacher3","teacher4","teacher5"];
  		},
      students:function(){
        return ["class1","class2","class3","class4"];
      },
      departments:function(){
        return ["SI","KS"];
      }
  	});


  	template.events({
	    'change #floor': function(event, template) {
	      	var floornum = parseInt(template.find('#floor').value);
	      	Template.instance().chosenFloor.set(floornum);
	    }
  	});
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
