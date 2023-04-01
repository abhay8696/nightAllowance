import React, {useState, useEffect} from 'react';
import Formula from './formula';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AnimatedNumber from 'react-animated-number';
import CountUp from 'react-countup';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

//styles
import ndaStyles from '../styles/ndaStyles';
const Nda = () => {
    //styles
    const classes = ndaStyles();
    //states
    const
    [ basic, setBasic ] = useState(26300),
    [ timing, setTiming ] = useState('00-08'),
    [ am_pm, setAm_pm ] = useState('12 AM - 08 AM'),
    [ noOfDuties, setNoOfDuties ] = useState(4),
    [ result, setResult ] = useState(705),
    [ footer, setFooter ] = useState(false),
    [ DA, setDA ] = useState(42)

    //functions
    const
    submitForm = evt=> {
        evt.preventDefault();
        console.log("submittttttt")
        let hours, nightt;
        if(timing === "16-00"){
            hours = 2
        }else if(timing === "22-06"){
            hours = 8;
        }else if(timing === "23-07"){
            hours = 7;
        }else if(timing === "00-08"){
            hours = 6;
        }
        // nightt = new ndaData(basic, noOfDuties, hours)
        let data = ndaData(basic, noOfDuties, hours, DA)
        console.log(data.totalAllowance);
        setResult(Number(data.totalAllowance));
        window.localStorage.setItem("basic", basic)
        window.localStorage.setItem("noOfDuties", noOfDuties)
        window.localStorage.setItem("timing", timing)
        window.localStorage.setItem("result", data.totalAllowance)
    },
    ndaData = (basic, numOfNights, dailyHours, dearnessAllowance)=> {
        let payRate = (basic + (basic * dearnessAllowance/100))/200;
        let weightage = dailyHours * 10;
        let totalAllowance = (Math.round(payRate * ((weightage * numOfNights) / 60) * 100) / 100).toFixed(2);
        return {payRate, totalAllowance}
    }

    //life cycle method
    useEffect(()=> {
        let 
        b = Number(window.localStorage.getItem("basic")),
        n = Number(window.localStorage.getItem("noOfDuties")),
        t = window.localStorage.getItem("timing"),
        r = Number(window.localStorage.getItem("result"));
        if(b && n && t && r){
            setBasic(b);
            setNoOfDuties(n);
            setTiming(t);
            setResult(r);
        }
    }, [])
    useEffect(()=> {
        if(footer){
            setTimeout(() => {
                setFooter(false)
            }, 4000);
        }
    }, [footer])
    useEffect(()=> {
        if(timing === "16-00"){
            setAm_pm("04 PM - 12 AM")
        }else if(timing === "22-06"){
            setAm_pm("10 PM - 06 AM")
        }else if(timing === "23-07"){
            setAm_pm("11 PM - 07 AM")
        }else if(timing === "00-08"){
            setAm_pm("12 AM - 08 AM")
        }
    }, [timing])

    return (
        <div className={classes.nda}>
            <h1>Night Duty Allowance</h1>
            <div className={classes.resultDiv}>
                <Formula />
                <h2 className={classes.result}>
                    <CurrencyRupeeIcon fontSize='large'/>
                    {result <= 0 ? result : 
                    <CountUp
                        start={500}
                        end={result}
                        duration={1}
                    /> 
                }
                </h2>
            </div>
            <form className={classes.form}  onSubmit={evt=> submitForm(evt)}>
                <label for='basic' className={classes.lables}>Basic Pay</label>
                <input 
                    value={basic} 
                    id="basic" 
                    variant="outlined" 
                    type="number"
                    onChange={evt=> setBasic(Number(evt.target.value))}
                    required
                    className={classes.basic}
                />
                <label className={classes.lables} for='timing'>Duty Timing</label>
                <Select
                    labelId="demo-simple-select-label"
                    id="timing"
                    value={timing}
                    onChange={evt=> setTiming(evt.target.value)}
                    required
                    className={classes.timing}
                    >
                    <MenuItem value={'16-00'}>16-00</MenuItem>
                    <MenuItem value={'22-06'}>22-06</MenuItem>
                    <MenuItem value={'23-07'}>23-07</MenuItem>
                    <MenuItem value={'00-08'}>00-08</MenuItem>
                </Select>
                <label className={classes.lables} for='noOfDuties'>No Of {am_pm} Duties In a Month</label>
                <input 
                    value={noOfDuties} 
                    id="noOfDuties" 
                    variant="outlined" 
                    type="number"
                    onChange={evt=> setNoOfDuties(Number(evt.target.value))}
                    required
                    className={classes.noOfDuties}
                />
                <label className={classes.lables} for='da'>Dearness Allowance</label>
                <input 
                    value={DA} 
                    id="da" 
                    variant="outlined" 
                    type="number"
                    onChange={evt=> setDA(Number(evt.target.value))}
                    required
                    className={classes.noOfDuties}
                />
                <button className={classes.submitButton}>
                    <span>Calculate</span>
                </button>
            </form>
            {
                footer  ?
                <div className={classes.footer} onClick={()=> setFooter(false)}>Created By {'<abhay_kamble/>'}</div>
                :
                <div className={classes.footer} onClick={()=> setFooter(true)}>{'</>'}</div>
            }
        </div>
    );
};

export default Nda;

// let totalAllowance = (Math.round(payRate * ((weightage * numOfNights) / 60) * 100) / 100).toFixed(2);
        // let totalAllowance = (Math.round(((basic + (basic * 0.34))/200)* (((dailyHours * 10) * numOfNights) / 60) * 100) / 100).toFixed(2);
