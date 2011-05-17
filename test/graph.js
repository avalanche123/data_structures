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

turns.AB.edge(turns.EA);
turns.AB.edge(turns.DA);
turns.AB.edge(turns.BC);
turns.AB.edge(turns.BD);

turns.AC.edge(turns.EA);
turns.AC.edge(turns.DA);
turns.AC.edge(turns.DB);
turns.AC.edge(turns.EB);
turns.AC.edge(turns.BD);

turns.AC.edge(turns.EA);
turns.AC.edge(turns.EB);
turns.AC.edge(turns.EC);

turns.BC.edge(turns.AB);
turns.BC.edge(turns.DB);
turns.BC.edge(turns.EB);

turns.BD.edge(turns.AB);
turns.BD.edge(turns.AC);
turns.BD.edge(turns.DA);
turns.BD.edge(turns.EB);
turns.BD.edge(turns.EC);

turns.DA.edge(turns.AB);
turns.DA.edge(turns.AC);
turns.DA.edge(turns.BD);
turns.DA.edge(turns.EC);
turns.DA.edge(turns.EB);

turns.DB.edge(turns.AC);
turns.DB.edge(turns.BC);
turns.DB.edge(turns.EC);

turns.EA.edge(turns.AB);
turns.EA.edge(turns.AC);
turns.EA.edge(turns.AD);

turns.EB.edge(turns.DA);
turns.EB.edge(turns.BC);
turns.EB.edge(turns.AC);
turns.EB.edge(turns.AD);
turns.EB.edge(turns.BD);

turns.EC.edge(turns.DA);
turns.EC.edge(turns.DB);
turns.EC.edge(turns.BD);
turns.EC.edge(turns.AD);

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