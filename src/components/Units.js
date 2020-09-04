import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: "#f9f7d9",
        marginTop: 5,
        scrollBehavior: true
    },
}));

let length = [
    { id: 0, name: "Micons", symbol: "μm" },
    { id: 1, name: "Millimeter", symbol: "mm" },
    { id: 2, name: "Centimeters", symbol: "cm" },
    { id: 3, name: "Meters", symbol: "m" },
    { id: 4, name: "Kilometers", symbol: "km" },
    { id: 5, name: "Mils/Thou", symbol: "mil" },
    { id: 6, name: "Inches", symbol: "in" },
    { id: 7, name: "Feet", symbol: "ft" },
    { id: 8, name: "Yards", symbol: "yd" },
    { id: 9, name: "Miles", symbol: "mi" },
    { id: 10, name: "Nautical Miles", symbol: "nm" },
    { id: 11, name: "Fathoms", symbol: "fm" },
    { id: 12, name: "Chains", symbol: "ch" },
    { id: 13, name: "Furlongs", symbol: "fur" },
    { id: 14, name: "Light Years", symbol: "ly" },
]
let area = [
    { id: 0, name: "Sq. Millimeters", symbol: "mm²" },
    { id: 1, name: "Sq. Centimeters", symbol: "cm²" },
    { id: 2, name: "Sq. Meters", symbol: "m²" },
    { id: 3, name: "Hectares", symbol: "ha" },
    { id: 4, name: "Sq. Kilometers", symbol: "km²" },
    { id: 5, name: "Sq. Inces", symbol: "sq mi" },
    { id: 6, name: "Sq. Feet", symbol: "sq ft" },
    { id: 7, name: "Sq. Yard", symbol: "sq yd" },
    { id: 8, name: "Acres", symbol: "ac" },
    { id: 9, name: "Sq. Miles", symbol: "sq mi" },
]
let volume = [
    { id: 0, name: "Millilitres (cc)", symbol: "ml" },
    { id: 1, name: "Litres", symbol: "l" },
    { id: 2, name: "Cu. Meters", symbol: "m³" },
    { id: 3, name: "Cu. Inches", symbol: "cu in" },
    { id: 4, name: "Cu Feet", symbol: "cu ft" },
    { id: 5, name: "Cu Yards", symbol: "cu yd" },
    { id: 6, name: "Fluid Ounce (Imp)", symbol: "fl oz (Imp)" },
    { id: 7, name: "Pint (Imp)", symbol: "pt" },
    { id: 8, name: "Gallon (Imp)", symbol: "gal (Imp)" },
    { id: 9, name: "Fluid Ounce (US)", symbol: "fl oz (US)" },
    { id: 10, name: "Pint (US)", symbol: "pt (US)" },
    { id: 11, name: "Gallon (US)", symbol: "gal (US)" },
]
let mass = [
    { id: 0, name: "Micrograms", symbol: "μg" },
    { id: 1, name: "Milligrams", symbol: "mg" },
    { id: 2, name: "Grams", symbol: "g" },
    { id: 3, name: "Kilograms", symbol: "kg" },
    { id: 4, name: "Tonnes", symbol: "t" },
    { id: 5, name: "Ounces", symbol: "oz" },
    { id: 6, name: "Pounds", symbol: "lb" },
    { id: 7, name: "Stone", symbol: "st" },
    { id: 8, name: "Hundredweight (US)", symbol: "cwt (US)" },
    { id: 9, name: "Hundredweight (UK)", symbol: "cwt (UK)" },
    { id: 10, name: "Short Tons (US)", symbol: "ton (US)" },
    { id: 11, name: "Long Tons (US)", symbol: "ton (US)" },
]
let speed = [
    { id: 0, name: "Meters per second", symbol: "m/s" },
    { id: 1, name: "Kilometers per hour", symbol: "km/h" },
    { id: 2, name: "Feet per second", symbol: "ft/s" },
    { id: 3, name: "Miles per hour", symbol: "mph" },
    { id: 4, name: "Knots", symbol: "kt" },
]
let time = [
    { id: 0, name: "Nanoseconds", symbol: "ns" },
    { id: 1, name: "Microseconds", symbol: "μg" },
    { id: 2, name: "Milliseconds", symbol: "ms" },
    { id: 3, name: "Seconds", symbol: "s" },
    { id: 4, name: "Minutes", symbol: "min" },
    { id: 5, name: "Hours", symbol: "h" },
    { id: 6, name: "Days", symbol: "d" },
    { id: 7, name: "Weeks", symbol: "wk" },
    { id: 8, name: "Years (Gregorian)", symbol: "yr" },
]
let force = [
    { id: 0, name: "Micronewtons", symbol: "μN" },
    { id: 1, name: "Millinewtons", symbol: "mN" },
    { id: 2, name: "Newtons", symbol: "N" },
    { id: 3, name: "Kilonewtons", symbol: "kN" },
    { id: 4, name: "Kilogram-Force", symbol: "kgf" },
    { id: 5, name: "Pound-Force", symbol: "lbf" },
]
let pressure = [
    { id: 0, name: "Pascal", symbol: "Pa" },
    { id: 1, name: "Hectopascal", symbol: "hPa" },
    { id: 2, name: "Kilopascal", symbol: "kPa" },
    { id: 3, name: "Megapascal", symbol: "MPa" },
    { id: 4, name: "Millibar", symbol: "mbar" },
    { id: 5, name: "Bar", symbol: "bar" },
    { id: 6, name: "Atmosphere (std)", symbol: "atm" },
    { id: 7, name: "Kilogram per sq. cm", symbol: "kg/cm²" },
    { id: 8, name: "Pounds per sq. inch", symbol: "psi" },
    { id: 9, name: "Inches of Mercury (Hg)", symbol: "In Hg" },
    { id: 10, name: "Torr", symbol: "Torr" },
]
let energy = [
    { id: 0, name: "Joules", symbol: "J" },
    { id: 1, name: "Kilojoules", symbol: "kJ" },
    { id: 2, name: "Megajoules", symbol: "MJ" },
    { id: 3, name: "Kilowatt-Hours", symbol: "kWh" },
    { id: 4, name: "Calories", symbol: "cal" },
    { id: 5, name: "Kilocalories", symbol: "kcal" },
    { id: 6, name: "British Thermal Units", symbol: "BTU" },
]
let power = [
    { id: 0, name: "Watts", symbol: "W" },
    { id: 1, name: "Kilowatts", symbol: "kW" },
    { id: 2, name: "Megawatts", symbol: "MW" },
    { id: 3, name: "Calories per sec", symbol: "cal/s" },
    { id: 4, name: "BTUs per hour", symbol: "BTU/h" },
    { id: 5, name: "Horsepower (mech)", symbol: "hp(I)" },
    { id: 6, name: "Horsepower (metric)", symbol: "hp(M)" },
]
let temprature = [
    { id: 0, name: "Celsius", symbol: "°C" },
    { id: 1, name: "Fahrenheit", symbol: "°F" },
    { id: 2, name: "Kelvin", symbol: "K" },
]
let dataSize = [
    { id: 0, name: "Bytes", symbol: "B" },
    { id: 1, name: "Kibibytes", symbol: "KiB" },
    { id: 2, name: "Mebibytes", symbol: "MiB" },
    { id: 3, name: "Gibibytes", symbol: "GiB" },
    { id: 4, name: "Tebibytes", symbol: "TiB" },
    { id: 5, name: "Kilobytes", symbol: "kB" },
    { id: 6, name: "Megabytes", symbol: "MB" },
    { id: 7, name: "Gigabytes", symbol: "GB" },
    { id: 8, name: "Terabytes", symbol: "TB" },
]
export default function Units(props) {
    const classes = useStyles();
    let data = [];
    switch (props.index) {
        case 0:
            data = length;
            break;
        case 1: data = area;
            break;
        case 2: data = volume;
            break;
        case 3: data = mass;
            break;
        case 4: data = speed;
            break;
        case 5: data = time;
            break;
        case 6: data = force;
            break;
        case 7: data = pressure;
            break;
        case 8: data = energy;
            break;
        case 9: data = power;
            break;
        case 10: data = temprature;
            break;
        case 11: data = dataSize;
            break;
        default:
            break;
    }

    const changeResult = (event, index, id) => {
        changeResultState(index);
        console.log(id + " " + props.index);
    };
    const [result, changeResultState] = React.useState(0);
    // const currentData = length[props.index];
    return (
        <div className={classes.root}>
            <List component="nav">

                {result ? <ListItem
                    button
                    onClick={(event) => changeResult(event, 0, '')}
                >
                    <ListItemIcon>
                        <ArrowBackIcon />
                    </ListItemIcon>

                    <ListItemText secondary="To Unit" />
                </ListItem>

                    : <ListItem
                        button
                        onClick={props.goBack}
                    >
                        <ListItemIcon>
                            <ArrowBackIcon />
                        </ListItemIcon>

                        <ListItemText secondary="From Unit" />

                    </ListItem>
                }


                {data.map((item) =>
                    <ListItem
                        button
                        key={item.id}
                        onClick={(event) => changeResult(event, 1, item.id)}
                        onLoad={console.log("hi")}
                    >
                        <ListItemIcon >
                            {item.symbol}
                        </ListItemIcon>
                        {result ?
                            <ListItemText style={{ textAlign: "right" }} primary={props.numberT} secondary={item.name} />
                            : <ListItemText style={{ textAlign: "right" }} secondary={item.name} />
                        }
                    </ListItem>)}
            </List>
        </div>
    );
}