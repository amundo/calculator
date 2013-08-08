$(function(){

  app = {};
  
  app.Calculator = Backbone.View.extend({
  
    events : { 
      'click #clear': "clear",
      'click #enter': "calculate",
      'click td button': "press",
    },
  
    initialize : function(){ 
      _.bindAll(this, 'calculate', 'documentKeyup', 'clear', 'press');
      $(document).on('keyup', this.documentKeyup)
    },
  
    documentKeyup : function(ev){ 
      var key = ev.which;
      switch(key){
        case 13:
          this.calculate();
      }
    },
  
    clear : function(){ 
      this.$el.find('#screen').val('');
    },
  
    press : function(ev){ 
      $('#screen').get(0).value += ev.target.textContent;
    },
  
    calculate : function(){ 
      var $screen = this.$el.find('#screen');
      var answer = eval( $screen.val() );
      $screen.val(answer);
    }
  
  }) 


  app.calculator = new app.Calculator({

    el: '#calculator'

  })


})
