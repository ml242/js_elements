

  var make$Element = function(options){
    var $el = $('<div>');

    if (options) {
      if (options.tagName){
        var tag = options.tagName;
        $el = $('<' + tag + '>');
      }
      if (options.className) {
        var claw = options.className;
        $el.addClass(claw);
      }
      if (options.id) {
        var idd = options.id;
        $el.attr('id', idd);
      }
    }
    return $el;
  };

  function Model(options) {
    this.options = options || {};
    this.get = function(opt) {};
  }


