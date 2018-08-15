var Ddog = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer" id="Ddog"></span');
  Dancer.apply(this, arguments);
};
Ddog.prototype = Object.create(Dancer.prototype);

Ddog.prototype.constructor = Ddog;

Ddog.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
