import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: "#f9f7d9",
        marginTop: 5,
        scrollBehavior: true
    },
}));

export default function SelectedListItem() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        1
          </ListItemIcon>
                    <ListItemText secondary="Distance" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        2
                    </ListItemIcon>
                    <ListItemText secondary="Area" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        3
                    </ListItemIcon>
                    <ListItemText secondary="Volume" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        4
                    </ListItemIcon>
                    <ListItemText secondary="Mass" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemIcon>
                        5
                    </ListItemIcon>
                    <ListItemText secondary="Speed" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                >
                    <ListItemIcon>
                        6
                    </ListItemIcon>
                    <ListItemText secondary="Time" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                >
                    <ListItemIcon>
                        7
                    </ListItemIcon>
                    <ListItemText secondary="Force" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                >
                    <ListItemIcon>
                        8
                    </ListItemIcon>
                    <ListItemText secondary="Pressure" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                >
                    <ListItemIcon>
                        9
                    </ListItemIcon>
                    <ListItemText secondary="Energy" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 9}
                    onClick={(event) => handleListItemClick(event, 9)}
                >
                    <ListItemIcon>
                        10
                    </ListItemIcon>
                    <ListItemText secondary="Power" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 10}
                    onClick={(event) => handleListItemClick(event, 10)}
                >
                    <ListItemIcon>
                        11
                    </ListItemIcon>
                    <ListItemText secondary="Temprature" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 11}
                    onClick={(event) => handleListItemClick(event, 11)}
                >
                    <ListItemIcon>
                        12
                    </ListItemIcon>
                    <ListItemText secondary="Data Size" />
                </ListItem>
            </List>

        </div>
    );
}