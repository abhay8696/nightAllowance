import {createUseStyles} from 'react-jss'

const ndaStyles = createUseStyles({
    nda:{
        color: 'white',
        display: 'flex',
        height: '80vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    resultDiv:{
        boxSizing: 'border-box',
        background: 'white',
        width:'75vw',
        borderRadius: '10px',
        width: '500px',
        color: '#252c33',
        position: 'relative'
    },
    result: {
        fontSize: '3rem',
        color: '#282c34'
    },
    form:{
        display: 'flex',
        padding: '1rem 0',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        '& input': {
            marginBottom: '1rem',
        },
        '& > *': {
            width: '500px',
            boxSizing: 'border-box',
        }
    },
    lables:{
        textAlign: 'left',
        marginBottom: '0.3rem',
    },
    basic: {
        color: 'white',
        border: '1px solid white',
        borderRadius: '5px',
        backgroundColor: 'inherit',
        padding: '1rem',
        maxWidth: '95vw',
        fontSize: '1rem',
    },
    timing:{
        color: 'white !important',
        border: '1px solid white',
        borderRadius: '5px',
        textAlign: 'left',
        boxSizing: 'border-box',
        marginBottom: '1rem',
        fontSize: '1rem',
    },
    noOfDuties:{
        color: 'white',
        border: '1px solid white',
        borderRadius: '5px',
        backgroundColor: 'inherit',
        padding: '1rem',
        maxWidth: '95vw',
        fontSize: '1rem',
    },
    submitButton:{
        border: '1px solid white',
        padding: '0.5rem',
        maxWidth: '250px',
        borderRadius: '5px',
    },
    footer:{
        position: 'fixed',
        bottom: '0.5rem',
        right: '0.5rem',
        fontSize: '0.8rem',
        border: '1px solid white',
        borderRadius: '5px',
        padding: '0.2rem 0.3rem',
        cursor: 'pointer'
    },
    //phones
    '@media only screen and (max-width: 768px)': {
        form:{
            '& > *': {
                width: '90vw',
                maxWidth: '500px',
            }
        },
        resultDiv: {
            width: '90vw',
            maxWidth: '500px',
        },
        submitButton:{
            width: '45vw',
            '&:active':{
                backgroundColor: 'white',
                color: '#282c34'
            },
        },
        footer:{
            '&:active':{
                backgroundColor: 'white',
                color: '#282c34'
            },
        },
    },
    //small height phones
    '@media only screen and (max-height: 660px)': {
        // resultDiv: {
        //     backgroundColor: 'red',
        // },
        result: {
            fontSize: '2.5rem',
        },
        nda:{
            '& h1':{
                fontSize: '28px',
                margin: '0.8rem 0'
            }
        }
    },
    //small height phones
    '@media only screen and (max-height: 610px)': {
        // resultDiv: {
        //     backgroundColor: 'red',
        // },
        result: {
            fontSize: '2.4rem',
        },
        nda:{
            '& h1':{
                fontSize: '24px',
                margin: '0.6rem 0'
            }
        },
        form:{
            '& input': {
                marginBottom: '0.5rem',
            }
        }
    },
    //pc
    '@media only screen and (min-width: 768px)': {
        submitButton:{
            '&:hover':{
                backgroundColor: 'white',
                color: '#282c34'
            },
        },
        footer:{
            '&:hover':{
                backgroundColor: 'white',
                color: '#282c34'
            },
        },
    },
})

export default ndaStyles;