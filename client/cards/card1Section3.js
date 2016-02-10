Template.card1Section3.helpers({

  currency: function(){
    return Session.get('currency');
  },

  currencyTitle: function(){
    return Session.get('currencyTitle');
  }

});

Template.card1Section3.events({
  'click .view-hidden-upgrades': function(e) {
    e.preventDefault();
    $('.hidden-cards').show();
    $(e.target).hide();
  },

  'click .upgrade-block': function(e) {
    
  }
});
