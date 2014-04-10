if (Meteor.isClient) {
  
  Template.view2.helpers({  
    palabreria: function() {
      console.log("I Am The Villain of the Story");
      return storyCrashDB.find();     
    }
    
  }); 
  
 Template.view2.events({
    "click #btnPalabra": function () {
      console.log("May the Force be with You");
     
      //console.log(document.getElementById("palabra").value);  
      //storyCrashDB.insert({name: $("#palabra").val()});
      //document.getElementById('palabra').value='';
      
      
      var texto = $("#palabra").val();
      var arr = texto.split(' ');
      console.log(arr[0]);
      storyCrashDB.insert({name: arr[0]});
      document.getElementById('palabra').value='';
      
    } 
    
  }); 
}  
