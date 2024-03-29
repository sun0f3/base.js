(function(window){
//# include events

var Base = {};

//# include version

Base.extend = function(options) {
  var klass = function(params) {
    params = params || {};
    setupDefaults(this, options.defaults);
    setupDefaults(this, params);
    options.initialize.apply(this);
    klass.prototype.constructor = klass;
    eventBinding(this, options.events);
  }

  _.extend(klass.prototype, Base.prototype);
  _.extend(klass.prototype, Events);

  for (var i in options) {
    if ( options.hasOwnProperty(i) ) {
      switch(typeof options[i]) {
        case 'function':
          klass.prototype[i] = options[i];
      }
    }
  }
  return klass;
};

var eventBinding = function(obj, events) {
  events = events || {};
  for (var i in events){
    var selector = i.split(' ')[0],
        action   = i.split(' ')[1],
        method   = events[i];
    obj.$el.find(selector).bind(action, function(e){
      obj[method](e);
    });
  }
};

var setupDefaults = function(obj, defaults) {
  defaults = _.clone(defaults) || {};
  for (var i in defaults) {
    var value = defaults[i];
    if ( defaults.hasOwnProperty(i) ) {
      obj[i] = defaults[i];
    }
  }
  if (obj.el && obj.el.length > 0) {
    obj.$el = jQuery(obj.el);
  }
};

window.Base = Base;

})(this);
