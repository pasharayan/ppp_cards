Session.set('currency', 'AUD');
Session.set('currencyTitle', '$');

Template.card1Section2.helpers({

  currency: function(){
    return Session.get('currency');
  },

  currencyTitle: function(){
    return Session.get('currencyTitle');
  }

});

Template.card1Section2.events({
  'change #project-currency': function(){
    var selectedCurrency = $('#project-currency option:selected').text();
    var selectedCurrencyTitle = $('#project-currency option:selected').attr('title');
    Session.set('currency', selectedCurrency);
    Session.set('currencyTitle', selectedCurrencyTitle);
  }
});
