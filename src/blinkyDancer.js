var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  Dancer.apply(this, arguments);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
