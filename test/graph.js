var Graph, intersection, turns;

Graph = require('./../lib/graph');

intersection = new Graph();

turns = {
  AB: intersection.vertix('AB'),
  AC: intersection.vertix('AC'),
  AD: intersection.vertix('AD'),
  BA: intersection.vertix('BA'),
  BC: intersection.vertix('BC'),
  BD: intersection.vertix('BD'),
  DA: intersection.vertix('DA'),
  DB: intersection.vertix('DB'),
  DC: intersection.vertix('DC'),
  EA: intersection.vertix('EA'),
  EB: intersection.vertix('EB'),
  EC: intersection.vertix('EC'),
  ED: intersection.vertix('ED')
}

intersection.edge(turns.AB, turns.EA);
intersection.edge(turns.AB, turns.DA);
intersection.edge(turns.AB, turns.BC);
intersection.edge(turns.AB, turns.BD);
intersection.edge(turns.AC, turns.EA);
intersection.edge(turns.AC, turns.DA);
intersection.edge(turns.AC, turns.DB);
intersection.edge(turns.AC, turns.EB);
intersection.edge(turns.AC, turns.BD);
intersection.edge(turns.AD, turns.EA);
intersection.edge(turns.AD, turns.EB);
intersection.edge(turns.AD, turns.EC);
intersection.edge(turns.BC, turns.DB);
intersection.edge(turns.BC, turns.EB);
intersection.edge(turns.BD, turns.DA);
intersection.edge(turns.BD, turns.EB);
intersection.edge(turns.BD, turns.EC);
intersection.edge(turns.DA, turns.EC);
intersection.edge(turns.DA, turns.EB);
intersection.edge(turns.DB, turns.EC);

console.log(intersection.greedy().map(function(vertix) {
  return vertix.name;
}));
console.log(intersection.greedy().map(function(vertix) {
  return vertix.name;
}));
console.log(intersection.greedy().map(function(vertix) {
  return vertix.name;
}));
console.log(intersection.greedy().map(function(vertix) {
  return vertix.name;
}));