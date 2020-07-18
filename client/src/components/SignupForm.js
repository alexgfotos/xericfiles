import React from "react";
import { Button, TextField, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import Image from 'material-ui-image'

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function SignupForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [openZone, setOpenZone] = React.useState(false);
    const [openState, setOpenState] = React.useState(false);

    const unitedStatesList = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    const handleCloseZone = () => {
        setOpenZone(false);
    };

    const handleOpenZone = () => {
        setOpenZone(true);
    };
    const handleCloseState = () => {
        setOpenState(false);
    };

    const handleOpenState = () => {
        setOpenState(true);
    };


    return (
        <>
            <Paper>
                <Container >
                    <form>
                        <Grid container spacing={3} item xs={6}>
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom>
                                    Signup
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    value={formObject.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="email"
                                    placeholder="Enter your Email"
                                    helperText="This will be public!"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Username"
                                    value={formObject.username}
                                    name="username"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="username"
                                    placeholder="Enter your Username"
                                    helperText="This will be public!"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    value={formObject.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="password"
                                    placeholder="Enter your password"
                                    helperText="This will be Private!"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="USDA Zone">Zone</InputLabel>
                                <Select
                                    labelId="USDA Zone"
                                    id="zone"
                                    name="zone"
                                    open={openZone}
                                    onClose={handleCloseZone}
                                    onOpen={handleOpenZone}
                                    value={formObject.zone}
                                    onChange={handleInputChange}
                                    
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"1a"}>1a</MenuItem>
                                    <MenuItem value={"1b"}>1b</MenuItem>
                                    <MenuItem value={"2a"}>2a</MenuItem>
                                    <MenuItem value={"2b"}>2b</MenuItem>
                                    <MenuItem value={"3a"}>3a</MenuItem>
                                    <MenuItem value={"3b"}>3b</MenuItem>
                                    <MenuItem value={"4a"}>4a</MenuItem>
                                    <MenuItem value={"4b"}>4b</MenuItem>
                                    <MenuItem value={"5a"}>5a</MenuItem>
                                    <MenuItem value={"5b"}>5b</MenuItem>
                                    <MenuItem value={"6a"}>6a</MenuItem>
                                    <MenuItem value={"6b"}>6b</MenuItem>
                                    <MenuItem value={"7a"}>7a</MenuItem>
                                    <MenuItem value={"7b"}>7b</MenuItem>
                                    <MenuItem value={"8a"}>8a</MenuItem>
                                    <MenuItem value={"8b"}>8b</MenuItem>
                                    <MenuItem value={"9a"}>9a</MenuItem>
                                    <MenuItem value={"9b"}>9b</MenuItem>
                                    <MenuItem value={"10a"}>10a</MenuItem>
                                    <MenuItem value={"10b"}>10b</MenuItem>
                                    <MenuItem value={"11a"}>11a</MenuItem>
                                    <MenuItem value={"11b"}>11b</MenuItem>
                                    <MenuItem value={"12a"}>12a</MenuItem>
                                    <MenuItem value={"12b"}>12b</MenuItem>
                                    <MenuItem value={"13a"}>13a</MenuItem>
                                    <MenuItem value={"13b"}>13b</MenuItem>

                                </Select>
                                <a target="_blank" href="https://planthardiness.ars.usda.gov/PHZMWeb/" color="inherit">
                                    <Typography>Find your zone here
                                    </Typography> </a>
                                {/* <TextField
                                    label="USDA Zone"
                                    value={formObject.zone}
                                    name="zone"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="zone"
                                    placeholder="Enter your zone"
                                    
                                /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="City"
                                    value={formObject.city}
                                    name="city"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="city"
                                    placeholder="Enter your city"
                                    helperText="This will help share plant care for others in the same city"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="State">State</InputLabel>
                                <Select
                                    labelId="State"
                                    id="state"
                                    name="state"
                                    open={openState}
                                    onClose={handleCloseState}
                                    onOpen={handleOpenState}
                                    value={formObject.state}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {unitedStatesList.map(state => <MenuItem value={state}>{state}</MenuItem>)}

                                </Select>
                                {/* <TextField
                                    label="State"
                                    value={formObject.state}
                                    name="state"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="state"
                                    placeholder="Enter your state"
                                    helperText="This will help share plant care for others in the same state"
                                /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Signup
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
            <Grid item xs={3} spacing={1}>
                <Image width="10" src="https://cvws.icloud-content.com/S/ASg_64wE-JeB4dUlRJFGDFZup14J/IMG_1800.JPG?o=AmhVjRRvbZRHRHcCenGEYN7v1zrV3Pf3lRCSWb2NXSBg&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAog4_7yukj6Gwuar58GssTMnkMueXxHXhg8Dd59fvgNEmoSYxDk3sSZti4Y5PXXnrYuIgEAUgRup14JaiTatAT5a1vu5qN-FCBTf36puJDaQU_5mKZCZskKVyAxGSJSUGRyJHRqXVB0zjOGwj5c4m7IeqbnIibf3R3mJSN60Z7zSNUbhnNB9Q&e=1595107834&r=ec0de95a-7e4e-4c3e-825c-e55592621f6e-1&s=l3iFjnqwTwsSC3KxdYkcf-8Dy0E" />
                <Image width="10" src="https://cvws.icloud-content.com/S/AT2-tVcnKQvZkKqDWB5hSjcQloci/IMG_1805.JPG?o=Auu5nCcZSl6m1Ft1Vy4_HUZ6BlIlT5oDeNtw4ZE8F1FG&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAogZ8pPIxCQJ3EsXszpRNAA_gykWe48Y-RoNDesxEYu0KMSYxDRiMWZti4Y0Z_YnrYuIgEAUgQQlociaiTptw77hctrXhfoMNXNsQpoKJBUM_aqFPET4BaSTcSppuk0rGByJDbfO39wd1k5-uMkv3EN0WOIq11VG6wQmQqU2xmL9EekA6GoCA&e=1595107839&r=14b519f1-0f49-48d7-bddd-8e3f295acf96-2&s=_FI6brfgPKADOFTiWOnmx4J-P3A" />
                <Image width="10" src="https://cvws.icloud-content.com/S/AXZiJEuk2EVb_JmZpxDm03JoHhAj/IMG_1811.JPG?o=AgMBmMhhlsQJse7PYmjeth3ENs1bhzrx-KuHlDQRaG2-&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAogyVVGjQbP5XhDewTLAVIesyokLwpP1lMyBc3jkfMn-kcSYxCexcWZti4YntzYnrYuIgEAUgRoHhAjaiStCjuBrNXjoA0YtuqTfBqo5MaD8LSo-WcEj4X2eyMMAR1jCI5yJAbV_qeJkCqOIOOLAvRt62m9_3tnGCFa55urcC4xA8YKAqb65Q&e=1595107847&r=5aca3c86-9b91-42d9-a82f-3ea88d11d549-1&s=kYqG6JPPiVbIOOqYKZwXYfmbAHA" />
            </Grid>


        </>
    )
}

export default SignupForm;