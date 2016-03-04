if (Meteor.isClient) {
  Template.AddSubject.helpers({
    floors: function(){
      return [1,2,3,4,5,6,7,8,9];
    }
  });
  Template.AddSubject.events({
    'change #floor' : function(event, template){
      var floornum = parseInt(template.find('#floor').value);
      $("#classroom").removeClass("hide");
      switch (floornum) {
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
          //addClassrooms(floornum, "a", "b", "c", "d");
        default:
      }
    }
  });
  Meteor.methods({
  });
}
