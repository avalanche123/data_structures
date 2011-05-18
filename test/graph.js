var Graph, intersection, vertices;

Graph = require('./../lib/graph');

vertices = ['AB', 'AC', 'AD', 'BA', 'BC', 'BD', 'DA', 'DB', 'DC', 'EA', 'EB', 'EC', 'ED'];

intersection = new Graph();
intersection.setVertices(vertices);

intersection.edge('AB', 'EA');
intersection.edge('AB', 'DA');
intersection.edge('AB', 'BC');
intersection.edge('AB', 'BD');
intersection.edge('AC', 'EA');
intersection.edge('AC', 'DA');
intersection.edge('AC', 'DB');
intersection.edge('AC', 'EB');
intersection.edge('AC', 'BD');
intersection.edge('AD', 'EA');
intersection.edge('AD', 'EB');
intersection.edge('AD', 'EC');
intersection.edge('BC', 'DB');
intersection.edge('BC', 'EB');
intersection.edge('BD', 'DA');
intersection.edge('BD', 'EB');
intersection.edge('BD', 'EC');
intersection.edge('DA', 'EC');
intersection.edge('DA', 'EB');
intersection.edge('DB', 'EC');

console.log(intersection.greedy());
console.log(intersection.greedy());
console.log(intersection.greedy());
console.log(intersection.greedy());
