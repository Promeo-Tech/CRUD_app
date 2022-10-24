var app = new function() {                        // This is where all of my functions are coming from 
    this.el = document.getElementById('tasks');  //  The tasks is pulling the data from html where table is 
  
    this.tasks = [];
  
    
    
    this.FetchAll = function() {                                                                                // this displays everything  (read)
      var data = '';
  
      if (this.tasks.length > 0) {                                                                              //In this function I am going to create html codes using javascrip  
        for (i = 0; i < this.tasks.length; i++) {                                                               // I am going to use this for loop to loop through my array and create my table 
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';       // I used bootstrap to change the colors of the buttons 
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.tasks.length);                                                                        
      return this.el.innerHTML = data;
    };
   
    this.Add = function () {                                                 // (create)
      el = document.getElementById('add-todo');
     
      var task = el.value;
  
      if (task) {
       
        this.tasks.push(task.trim());
       
        el.value = '';
       
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {                                                 //(update)
      var el = document.getElementById('edit-todo');
     
      el.value = this.tasks[item];
      
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
    
        var task = el.value;
  
        if (task) {
          
          self.tasks.splice(item, 1, task.trim());
        
          self.FetchAll();
          
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {                                                   //(delete)
      
      this.tasks.splice(item, 1);
      
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Tasks';
  
      if (data) {
          if(data ==1){
              name = 'Task'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();             //so we are always updating
  
  function CloseInput() {     // this closed the edit box
    document.getElementById('edit-box').style.display = 'none';
  }
 