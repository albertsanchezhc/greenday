var Wdog = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer" id="Wdog"></span');
  Dancer.apply(this, arguments);
};
Wdog.prototype = Object.create(Dancer.prototype);

Wdog.prototype.constructor = Wdog;

Wdog.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
