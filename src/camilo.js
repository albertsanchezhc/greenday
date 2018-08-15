var camilo = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer" id="camilo"></span');
  Dancer.apply(this, arguments);
};
camilo.prototype = Object.create(Dancer.prototype);

camilo.prototype.constructor = camilo;

camilo.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
