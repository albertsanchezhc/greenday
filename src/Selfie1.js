var Selfie1 = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer" id="Selfie1"></span');
  Dancer.apply(this, arguments);
};
Selfie1.prototype = Object.create(Dancer.prototype);

Selfie1.prototype.constructor = Selfie1;

Selfie1.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
