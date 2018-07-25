// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag

    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition (top, left);
    };
    Dancer.prototype.step = function() {
      setTimeout(this.step.bind(this), this.timeBetweenSteps);
    };
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

    Dancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
