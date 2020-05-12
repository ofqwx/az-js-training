/* Javascript Best practices
  - Functions names in camelCase
  - Functions arguments in camelCase
  - Break line between constiable definitions and statements and returns
  - Better to write code always in English
*/

function calculateValueforUnit(unit, value) {
  switch (unit) {
    // Temp
    case "F":
      return (value - 273.15) * 1.8 + 32;
    case "C":
      return value - 273.15;
    // Pres
    case "hPa":
      return value / 100;
    case "psi":
      return value * 0.000145038;
    case "in Hg":
      return value * 0.0002953;
    // Speed
    case "km/h":
      return value * 3.6;
    case "mph":
      return value * 2.236936292;
    case "kt":
      return value * 1.943844492;
    // Dist
    case "ft":
      return value * 3.280839895;

    default:
      return value;
  }
}

function airTemp(unit) {
  //supuestamente lo lee del USB
  const k = 273.15 + 15;

  return calculateValueforUnit(unit, k);
}

function airStatPres(unit) {
  //supuestamente lo lee del USB
  const p = 96200;

  return calculateValueforUnit(unit, p);
}

function airTotPres(unit) {
  //supuestamente lo lee del USB
  const p = 97000;

  return calculateValueforUnit(unit, p);
}

function cas(unit) {
  const s =
  (2/airStatPres("Pa")*(airTotPres("Pa")-airStatPres("Pa"))*287*airTemp("K"))**0.5;

  return calculateValueforUnit(unit, s);
}

function alt(unit) {
  const h = (((288.15*(airStatPres("hPa")/1013)**(-0.0065*287/-9.80665))-288.15)/-0.0065+0);

  return calculateValueforUnit(unit, h);
}

console.clear();
const velocidadEn = "m/s";
const altitudEn = "m";
const temperaturaEn = "C";
const presionesEn = "hPa";

var i=0;

while (i<10){


i++;
    console.log(i.toFixed(0));
    console.log("TotPres:" + airTotPres(presionesEn).toFixed(2).toString() + " " + presionesEn);
    console.log("StatPres:" + airStatPres(presionesEn).toFixed(2).toString() + " " + presionesEn);
    console.log( "CAS:" + cas(velocidadEn).toFixed(1).toString() + " " + velocidadEn);
    console.log("Alt:" + alt(altitudEn).toFixed(0).toString() + " " + altitudEn);
    console.log("AirTemp:" + airTemp(temperaturaEn).toFixed(1).toString() + " " + temperaturaEn);
}