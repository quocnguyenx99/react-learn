function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  function getOrbitalPeriod(avgAlt) {
    return Math.round(
      2 * Math.PI * Math.sqrt((earthRadius + avgAlt) ** 3 / GM)
    );
  }
  return arr.map((obj) => ({
    name: obj.name,
    orbitalPeriod: getOrbitalPeriod(obj.avgAlt),
  }));
}

// a is the orbit's semi-major axis  = The radius of the earth + avgAlt

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
