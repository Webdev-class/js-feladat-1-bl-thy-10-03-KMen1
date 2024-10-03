const students = require("../students.json");
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon)
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
  const clubs = {};

  students.forEach((student) => {
    if (clubs[student.club]) {
      clubs[student.club]++;
    } else {
      clubs[student.club] = 1;
    }
  });

  return clubs;
}

module.exports = f2;
