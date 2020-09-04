import prettyNum, { PRECISION_SETTING } from "pretty-num";

var formula = function (type, unit, value, selectedUnit) {
  // console.log(type);
  // console.log(unit);
  // console.log(value);
  // console.log(selectedUnit);
  var result = value;
  var temp = value;
  var units = 0;

  if (selectedUnit > 0 && type == 0) {
    switch (selectedUnit) {
      case 1:
        temp = temp * 1000;
        break;
      case 2:
        temp = temp * 10000;
        break;
      case 3:
        temp = temp * 1000000;
        break;
      case 4:
        temp = temp * 1000000000;
        break;
      case 5:
        temp = temp * 25.4;
        break;
      case 6:
        temp = temp * 25400;
        break;
      case 7:
        temp = temp * 304800;
        break;
      case 8:
        temp = temp * 914400;
        break;
      case 9:
        temp = temp * 1609344000;
        break;
      case 10:
        temp = temp * 1852000000;
        break;
      case 11:
        temp = temp * 1828800;
        break;
      case 12:
        temp = temp * 20116800;
        break;
      case 13:
        temp = temp * 201168000;
        break;
      case 14:
        temp = temp * 9460730473000000000000;
        break;
      default:
        break;
    }
  }

  switch (type) {
    //distance
    case 0: {
      switch (units) {
        //Microns
        case 0:
          {
            switch (unit) {
              //Microns
              case 0:
                result = temp;
                break;

              //Millimeter
              case 1:
                result = temp / 1000;
                break;

              //Centimeter
              case 2:
                result = temp / 10000;
                break;

              //Meter
              case 3:
                result = temp / 1000000;
                break;
              //Kilometer
              case 4:
                result = temp / 1000000000;
                break;

              //Mils/Thou
              case 5:
                result = temp / 25.4;
                break;

              //Inches
              case 6:
                result = temp / 25400;
                break;

              //Feet
              case 7:
                result = temp / 304800;
                break;
              //Yard
              case 8:
                result = temp / 914400;
                break;

              //Miles
              case 9:
                result = temp / 1609344497.89;
                break;
              //Nautical Miles
              case 10:
                result = temp / 1851999325.87;
                break;
              //Fathoms
              case 11:
                result = temp / 1828798.82;
                break;
              //Chains
              case 12:
                result = temp / 20116798.12;
                break;
              //Furlongs
              case 13:
                result = temp / 201168385.98;
                break;
              //Light Years
              case 14:
                result = temp * 0.0000000000000000000001057;
                break;

              default:
                break;
            }
          }
          break;
        default:
          break;
      }
    }

    default:
      break;
  }

  if (selectedUnit === unit) {
    result = Math.round(value);
  }

return result;
};
export default formula;
