import {createUseStyles} from 'react-jss'

const formulaStyles = createUseStyles({
    question:{
        position: 'absolute',
        right: '0',
        opacity: '0.8'
    },
    title:{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '0.5rem'
    },
    paperDiv: {
        marginTop: '30vh',
        // marginLeft: '10%',
        // marginRight: '10%',
        // backgroundColor: 'red',
        width: '100vw',
        padding:'1rem',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center'
    },
    insidePaper:{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column'
    },
})

export default formulaStyles;