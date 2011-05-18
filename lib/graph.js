(function() {

  var Graph, Vertix;

  Graph = function() {
    this.vertices = [];
  }

  Graph.prototype.setVertices = function(vertices) {
    this.vertices = vertices.map(function(vertix) {
      return Graph.prototype.vertix.call(this, vertix);
    });
  }

  Graph.prototype.vertix = function(name) {
    return new Vertix(name);
  }

  Graph.prototype.edge = function(a, b) {
    a = this.find(a);
    b = this.find(b);

    a.edge(b);
  }

  Graph.prototype.find = function(value) {
    return this.vertices.filter(function(vertix) {
      return vertix.value === value;
    })[0] || (function() {
      throw new RangeError('Value ' + value + ' not found');
    })();
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

    return colored.map(function(vertix) {
      return vertix.value;
    });
  }

  Vertix = function(value) {
    this.value = value;
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
