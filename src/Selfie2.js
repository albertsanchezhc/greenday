var Selfie2 = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer" id="Selfie2"></span');
  Dancer.apply(this, arguments);
};
Selfie2.prototype = Object.create(Dancer.prototype);

Selfie2.prototype.constructor = Selfie2;

Selfie2.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
