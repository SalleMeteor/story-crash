if (Meteor.isClient) {
  Meteor.startup(function () {
     
        storyCrashDB = new Meteor.Collection("contacts");
        
        storyCrashDB.allow({
          insert: function() {
            return true;
          }
        });
   });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
     
        storyCrashDB = new Meteor.Collection("contacts");
        
        storyCrashDB.allow({
          insert: function() {
            return true;
          },
          update: function() {
            return true;
          },	
          remove: function() {
            return true;
          }
        });
   });
}