"use strict";
/*
  Co-authored-by: danthek <abraham8507@gmail.com>
  Co-authored-by: Hugoneytor <halvarez0@ucol.mx>
  Co-authored-by: Ernesto2899 <eramirez28@ucol.mx>
*/

const Grid = require("./src/models/Grid");

const grid = new Grid(4, 4);

grid.createArray();
grid.printGrid();
grid.printArray();
grid.newGrid();
grid.printGrid();
