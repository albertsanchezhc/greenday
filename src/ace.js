var ace = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer" id="ace"></span');
  Dancer.apply(this, arguments);
};
ace.prototype = Object.create(Dancer.prototype);

ace.prototype.constructor = camilo;

ace.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
