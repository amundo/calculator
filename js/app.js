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
      this.$screen = this.$el.find('#screen');
    },
  
    documentKeyup : function(ev){ 
      if(ev.which == 13)
          this.calculate()
    },
  
    clear : function(){ 
      this.$screen.val('');
    },
  
    press : function(ev){ 
      this.$screen.get(0).value += ev.target.textContent;
    },
  
    calculate : function(){ 
      this.$screen.val( eval(this.$screen.val()) );
    }
  
  }) 


  app.calculator = new app.Calculator({

    el: '#calculator'

  })


})
