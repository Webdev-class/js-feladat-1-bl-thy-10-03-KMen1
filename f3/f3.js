const students = require("../students.json");
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
const f3 = () => {
  return students.filter(
    (student) =>
      student.freeDormitory === true && student.dormitoryPrice !== null
  ).length;
};
module.exports = f3;
