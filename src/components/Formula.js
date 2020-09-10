var formula = function (type, unit, value, selectedUnit, mode) {
  // console.log(type);
  // console.log(unit);
  // console.log(value);
  // console.log(selectedUnit);
  var result = value;
  var temp = value;
  var units = 0;
  //distance
  function type0() {
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
  //area
  function type1() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 100;
        break;
      case 2:
        temp = temp * 1000000;
        break;
      case 3:
        temp = temp * 10000000000;
        break;
      case 4:
        temp = temp * 1000000000000;
        break;
      case 5:
        temp = temp * 645.16;
        break;
      case 6:
        temp = temp * 92903.04;
        break;
      case 7:
        temp = temp * 836127.36;
        break;
      case 8:
        temp = temp * 4046856422;
        break;
      case 9:
        temp = temp * 2589988110000;
        break;
      default:
        break;
    }
  }
  //volume
  function type2() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 1000;
        break;
      case 2:
        temp = temp * 1000000;
        break;
      case 3:
        temp = temp * 16.387064;
        break;
      case 4:
        temp = temp * 28316.84659;
        break;
      case 5:
        temp = temp * 764554.858;
        break;
      case 6:
        temp = temp * 28.4130625;
        break;
      case 7:
        temp = temp * 568.26125;
        break;
      case 8:
        temp = temp * 4546.09;
        break;
      case 9:
        temp = temp * 29.57352956;
        break;
      case 10:
        temp = temp * 473.176473;
        break;
      case 11:
        temp = temp * 3785.411784;
        break;
      default:
        break;
    }
  }
  //mass
  function type3() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 1000;
        break;
      case 2:
        temp = temp * 1000000;
        break;
      case 3:
        temp = temp * 1000000000;
        break;
      case 4:
        temp = temp * 1000000000000;
        break;
      case 5:
        temp = temp * 28349523.13;
        break;
      case 6:
        temp = temp * 453592370;
        break;
      case 7:
        temp = temp * 6350293180;
        break;
      case 8:
        temp = temp * 45359237000;
        break;
      case 9:
        temp = temp * 50802345440;
        break;
      case 10:
        temp = temp * 907184740000;
        break;
      case 11:
        temp = temp * 1016046909000;
        break;

      default:
        break;
    }
  }

  //speed
  function type4() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 0.277777778;
        break;
      case 2:
        temp = temp * 0.3048;
        break;
      case 3:
        temp = temp * 0.44704;
        break;
      case 4:
        temp = temp * 0.514444444;
        break;

      default:
        break;
    }
  }

  //time
  function type5() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 1000;
        break;
      case 2:
        temp = temp * 1000000;
        break;
      case 3:
        temp = temp * 1000000000;
        break;
      case 4:
        temp = temp * 60000000000;
        break;
      case 5:
        temp = temp * 3600000000000;
        break;
      case 6:
        temp = temp * 86400000000000;
        break;
      case 7:
        temp = temp * 604800000000000;
        break;
      case 8:
        temp = temp * 31557600000000000;
        break;
      case 9:
        temp = temp * 31556952000000000;
        break;
      default:
        break;
    }
  }
  //force
  function type6() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 1000;
        break;
      case 2:
        temp = temp * 1000000;
        break;
      case 3:
        temp = temp * 1000000000;
        break;
      case 4:
        temp = temp * 9806650;
        break;
      case 5:
        temp = temp * 4448221.62;
        break;
      default:
        break;
    }
  }
  //time
  function type7() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 100;
        break;
      case 2:
        temp = temp * 1000;
        break;
      case 3:
        temp = temp * 1000000;
        break;
      case 4:
        temp = temp * 100;
        break;
      case 5:
        temp = temp * 100000;
        break;
      case 6:
        temp = temp * 101325;
        break;
      case 7:
        temp = temp * 98066.5;
        break;
      case 8:
        temp = temp * 6894.75729;
        break;
      case 9:
        temp = temp * 3386.389;
        break;
      case 10:
        temp = temp * 133.3223684;
        break;
      default:
        break;
    }
  }
  //Energy
  function type8() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 1000;
        break;
      case 2:
        temp = temp * 1000000;
        break;
      case 3:
        temp = temp * 3600000;
        break;
      case 4:
        temp = temp * 4.1868;
        break;
      case 5:
        temp = temp * 4186.8;
        break;
      case 6:
        temp = temp * 1055.055853;
        break;
      default:
        break;
    }
  }
  //Power
  function type9() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 1000;
        break;
      case 2:
        temp = temp * 1000000;
        break;
      case 3:
        temp = temp * 4.1868;
        break;
      case 4:
        temp = temp * 0.29307107;
        break;
      case 5:
        temp = temp * 745.699872;
        break;
      case 6:
        temp = temp * 735.49875;
        break;
      default:
        break;
    }
  }
  //Temprature
  function type10() {
    switch (selectedUnit) {
      case 1:
        temp = ((temp - 32) * 5) / 9;
        break;
      case 2:
        temp = temp - 273.15;
        break;
      default:
        break;
    }
  }
  //data
  function type11() {
    switch (selectedUnit) {
      case 1:
        temp = temp * 1024;
        break;
      case 2:
        temp = temp * 1048576;
        break;
      case 3:
        temp = temp * 1073741824;
        break;
      case 4:
        temp = temp * 1099511628000;
        break;
      case 5:
        temp = temp * 1000;
        break;
      case 6:
        temp = temp * 1000000;
        break;
      case 7:
        temp = temp * 1000000000;
        break;
      case 8:
        temp = temp * 1000000000000;
        break;
      default:
        break;
    }
  }
  switch (type) {
    //distance
    case 0:
      {
        type0();
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
      break;
    //Area
    case 1:
      {
        type1();
        switch (units) {
          //sq mil
          case 0:
            {
              switch (unit) {
                //sq mil
                case 0:
                  result = temp;
                  break;

                //sq cm
                case 1:
                  result = temp / 100;
                  break;

                //sq m
                case 2:
                  result = temp / 1000000;
                  break;

                //hectares
                case 3:
                  result = temp / 10000000000;
                  break;
                //sq km
                case 4:
                  result = temp / 1000000000000;
                  break;

                //sq in
                case 5:
                  result = temp / 645.16;
                  break;

                //sq ft
                case 6:
                  result = temp / 92903.04;
                  break;

                //sq yd
                case 7:
                  result = temp / 836127.36;
                  break;
                //acres
                case 8:
                  result = temp / 4046856422;
                  break;

                //sq miles
                case 9:
                  result = temp / 2589988110000;
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
      break;
    //Volume
    case 2:
      {
        type2();
        switch (units) {
          //Millilitres cc
          case 0:
            {
              switch (unit) {
                //millilitres cc
                case 0:
                  result = temp;
                  break;

                //litres
                case 1:
                  result = temp / 1000;
                  break;

                //cu. m
                case 2:
                  result = temp / 1000000;
                  break;

                //cu. in
                case 3:
                  result = temp / 16.387064;
                  break;
                //cu ft.
                case 4:
                  result = temp / 28316.84659;
                  break;

                //cu yd
                case 5:
                  result = temp / 764554.858;
                  break;

                //fluid ounce
                case 6:
                  result = temp / 28.4130625;
                  break;

                //pt imp
                case 7:
                  result = temp / 568.26125;
                  break;
                //gal imp
                case 8:
                  result = temp / 4546.09;
                  break;

                //fl oz
                case 9:
                  result = temp / 29.57352956;
                  break;
                //pt us
                case 10:
                  result = temp / 473.176473;
                  break;
                //gal us
                case 11:
                  result = temp / 3785.411784;
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
      break;
    //Mass
    case 3:
      {
        type3();
        switch (units) {
          //Micrograms
          case 0:
            {
              switch (unit) {
                //micrograms
                case 0:
                  result = temp;
                  break;

                //milligrams
                case 1:
                  result = temp / 1000;
                  break;

                //grams
                case 2:
                  result = temp / 1000000;
                  break;

                //kilograms
                case 3:
                  result = temp / 1000000000;
                  break;
                //tonnes
                case 4:
                  result = temp / 1000000000000;
                  break;

                //ounces
                case 5:
                  result = temp / 28349523.13;
                  break;

                //pounds
                case 6:
                  result = temp / 453592370;
                  break;

                //stone
                case 7:
                  result = temp / 6350293180;
                  break;
                //Hundredweight us
                case 8:
                  result = temp / 45359237000;
                  break;

                //Hundredweight uk
                case 9:
                  result = temp / 50802345440;
                  break;
                //short tons us
                case 10:
                  result = temp / 907184740000;
                  break;
                //long tons uk
                case 11:
                  result = temp / 1016046909000;
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
      break;

    //Speed
    case 4:
      {
        type4();
        switch (units) {
          //mps
          case 0:
            {
              switch (unit) {
                //mps
                case 0:
                  result = temp;
                  break;

                //kmph
                case 1:
                  result = temp / 0.277777778;
                  break;

                //ftps
                case 2:
                  result = temp / 0.3048;
                  break;

                //mph
                case 3:
                  result = temp / 0.44704;
                  break;
                //kt
                case 4:
                  result = temp / 0.514444444;
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
      break;

    //Time
    case 5:
      {
        type5();
        switch (units) {
          //ns
          case 0:
            {
              switch (unit) {
                //ns
                case 0:
                  result = temp;
                  break;
                //microsec
                case 1:
                  result = temp / 1000;
                  break;
                //millisec
                case 2:
                  result = temp / 1000000;
                  break;
                //sec
                case 3:
                  result = temp / 1000000000;
                  break;
                //min
                case 4:
                  result = temp / 60000000000;
                  break;
                //hr
                case 5:
                  result = temp / 3600000000000;
                  break;
                //days
                case 6:
                  result = temp / 86400000000000;
                  break;
                //wk
                case 7:
                  result = temp / 604800000000000;
                  break;
                //yr gregorian
                case 8:
                  result = temp / 31557600000000000;
                  break;
                //years julian
                case 9:
                  result = temp / 31556952000000000;
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
      break;
    //Force
    case 6:
      {
        type6();
        switch (units) {
          //microN
          case 0:
            {
              switch (unit) {
                //microN
                case 0:
                  result = temp;
                  break;
                //milliN
                case 1:
                  result = temp / 1000;
                  break;
                //N
                case 2:
                  result = temp / 1000000;
                  break;
                //kN
                case 3:
                  result = temp / 1000000000;
                  break;
                //kgf
                case 4:
                  result = temp / 9806650;
                  break;
                //lbf
                case 5:
                  result = temp / 4448221.62;
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
      break;
    //Pressure
    case 7:
      {
        type7();
        switch (units) {
          //pascal
          case 0:
            {
              switch (unit) {
                //pascal
                case 0:
                  result = temp;
                  break;
                //hectopascal
                case 1:
                  result = temp / 100;
                  break;
                //kilopascal
                case 2:
                  result = temp / 1000;
                  break;
                //megapascal
                case 3:
                  result = temp / 1000000;
                  break;
                //millibar
                case 4:
                  result = temp / 100;
                  break;
                //bar
                case 5:
                  result = temp / 100000;
                  break;
                //atm
                case 6:
                  result = temp / 101325;
                  break;
                //kg per sq cm
                case 7:
                  result = temp / 98066.5;
                  break;
                //kg per sq in
                case 8:
                  result = temp / 6894.75729;
                  break;
                //in hg
                case 9:
                  result = temp / 3386.389;
                  break;
                //Torr
                case 10:
                  result = temp / 133.3223684;
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
      break;
    //Energy
    case 8:
      {
        type8();
        switch (units) {
          //Joules
          case 0:
            {
              switch (unit) {
                //joules
                case 0:
                  result = temp;
                  break;
                //kJ
                case 1:
                  result = temp / 1000;
                  break;
                //MJ
                case 2:
                  result = temp / 1000000;
                  break;
                //kWh
                case 3:
                  result = temp / 3600000;
                  break;
                //cal
                case 4:
                  result = temp / 4.1868;
                  break;
                //kcal
                case 5:
                  result = temp / 4186.8;
                  break;
                //BTU
                case 6:
                  result = temp / 1055.055853;
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
      break;
    //Energy
    case 9:
      {
        type9();
        switch (units) {
          //Watts
          case 0:
            {
              switch (unit) {
                //watts
                case 0:
                  result = temp;
                  break;
                //kW
                case 1:
                  result = temp / 1000;
                  break;
                //MW
                case 2:
                  result = temp / 1000000;
                  break;
                //cal/s
                case 3:
                  result = temp / 4.1868;
                  break;
                //BTUph
                case 4:
                  result = temp / 0.29307107;
                  break;
                //hp I
                case 5:
                  result = temp / 745.699872;
                  break;
                //hp M
                case 6:
                  result = temp / 735.49875;
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
      break;
    //Temprature
    case 10:
      {
        type10();
        switch (units) {
          //Celcius
          case 0:
            {
              switch (unit) {
                //C
                case 0:
                  result = temp;
                  break;
                //F
                case 1:
                  result = (temp * 9) / 5 + 32;
                  break;
                //K
                case 2:
                  result = parseFloat(temp) + 273.15;
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
      break;
    //Data
    case 11:
      {
        type11();
        switch (units) {
          //Bytes
          case 0:
            {
              switch (unit) {
                //bytes
                case 0:
                  result = temp;
                  break;
                //Kibi
                case 1:
                  result = temp / 1024;
                  break;
                //Mebi
                case 2:
                  result = temp / 1048576;
                  break;
                //Gibi
                case 3:
                  result = temp / 1073741824;
                  break;
                //Tebi
                case 4:
                  result = temp / 1099511628000;
                  break;
                //Kilo
                case 5:
                  result = temp / 1000;
                  break;
                //Mega
                case 6:
                  result = temp / 1000000;
                  break;
                //Giga
                case 7:
                  result = temp / 1000000000;
                  break;
                //Tera
                case 8:
                  result = temp / 1000000000000;
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
      break;
    default:
      break;
  }
  if (selectedUnit === unit) {
    result = value;
  }
  if (mode) {
    if (result < 1 && selectedUnit !== unit ) {
      console.log("hi");
      return result.toFixed(23);
      
    }
    else 
    return result.toLocaleString("en");
  } else {
    return result;
  }
};
export default formula;
