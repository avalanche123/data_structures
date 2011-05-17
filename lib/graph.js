(function() {
  
  var Graph, Vertix;

  Graph = function() {
    this.vertices = [];
  }

  Graph.prototype.vertix = function(name) {
    var vertix = new Vertix(name);

    this.vertices.push(vertix);

    return vertix;
  }

  Graph.prototype.edge = function(a, b) {
    a.edge(b);
  }

  Graph.prototype.greedy = function() {
    var colored = [];

    this.vertices.filter(function(vertix) {
      return !vertix.colored;
    }).forEach(function(vertix) {
      var found = false;

      colored.forEach(function(marked) {
        if (vertix.edges.indexOf(marked) !== -1) {
          found = true;
        }
      });

      if (!found) {
        vertix.colored = true;
        colored.push(vertix);
      }
    });

    return colored;
  }

  Vertix = function(name) {
    this.name = name;
    this.edges = [];
    this.colored = false;
  }

  Vertix.prototype.edge = function(vertix) {
    if (this.edges.indexOf(vertix) === -1) {
      this.edges.push(vertix);
      vertix.edges.push(this);
    }
  }

  module.exports = Graph;
})();
