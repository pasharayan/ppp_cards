$('textarea').autogrow();

Template.card1.helpers({

  currency: function(){
    return 'AUX';
  }

});

Template.card1.events({

  'change #project-category': function(){

    items = [
      {value: 'hello', text: 'hello'},
      {value: 'world', text: 'world'}
    ];


    $.each(items, function (i, item) {
      $('#project-subcategory').append($('<option>', {
          value: item.value,
          text : item.text
      }));
    });
  },

  'change #project-subcategory': function() {
    var projectName = $('#project-subcategory').val();
    $('#project-name').val(projectName);
    $('#project-description').focus();
  }

});
