'use strict';

(function () {

  var url = "http://json-data.herokuapp.com/forms";
  var promise = $.getJSON(url);

  promise.then(function (res) {
    doSomething(res);
  });

  var textInput = function textInput(obj) {
    var templateInput = '\n    <div class="text-input">\n      <input type = "' + obj.type + '" placeholder = "' + obj.label + '" id = "' + obj.id + '">\n    </div>\n    ';
    return templateInput;
  };

  var textSelect = function textSelect(obj) {
    var templateSelect = '\n    <div class="text-select">\n      <select type = "' + obj.type + '" placeholder = "' + obj.label + '" id = "' + obj.id + '">\n        <option value ="">Select Language...</option>\n        <option value ="' + obj.options[0].value + '" label ="' + obj.options[0].label + '"></option>\n        <option value ="' + obj.options[1].value + '" label ="' + obj.options[1].label + '"></option>\n        <option value ="' + obj.options[2].value + '" label ="' + obj.options[2].label + '"></option>\n        <option value ="' + obj.options[3].value + '" label ="' + obj.options[3].label + '"></option>\n        <option value ="' + obj.options[4].value + '" label ="' + obj.options[4].label + '"></option>\n      </select>\n    </div>\n    ';
    return templateSelect;
  };

  //Our do something function
  var doSomething = function doSomething(arr) {
    _.each(arr, function (item) {
      var htmlBlock = undefined;

      if (item.type == 'text' || item.type == 'email' || item.type == 'tel' || item.type == 'textarea') {
        htmlBlock = textInput(item);
      } else if (item.type == "select") {
        htmlBlock = textSelect(item);
      }

      $('form').append(htmlBlock);
    });
  };
})();