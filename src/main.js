(function () {

  let url = "http://json-data.herokuapp.com/forms";
  let promise = $.getJSON(url);

  promise.then ( function (res) {
    doSomething(res);
  });

  let textInput = function(obj){
    let templateInput =`
    <div class="text-input">
      <input type = "${ obj.type }" placeholder = "${ obj.label }" id = "${ obj.id }">
    </div>
    `;
    return templateInput;
  }  ;

  let textSelect = function(obj){
    let optionsBlock = '';

    obj.options.forEach(function(option) {
      optionsBlock += `<option value ="${ option.value }" label ="${ option.label }"></option>`;
    });

    let templateSelect =`
    <div class="text-select">
      <select type = "${ obj.type }" placeholder = "${ obj.label }" id = "${ obj.id }">
      <option value ="">Select Language...</option>
        ${optionsBlock}
      </select>
    </div>
    `;
    return templateSelect;
  }  ;
  
  //Our do something function 
  let doSomething = function (arr) {
    _.each(arr,function(item){
      let htmlBlock;

      if (item.type == 'text' || item.type == 'email' || item.type == 'tel' || item.type == 'textarea') {
        htmlBlock = textInput(item);
      } else if (item.type == "select") {
        htmlBlock = textSelect(item);
      }

      $('form').append(htmlBlock);
    });
  };

}());
