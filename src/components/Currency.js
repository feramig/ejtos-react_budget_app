import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
    const colorStyles = {
        color:"black",
        backgroundColor:"#8cf292",
        ':focus': {
            color: '#ffffff'
          }
    }
    const selectStyles = {
        color:"white", 
        backgroundColor:"#8cf292", 
        borderColor:"white"
    }
  return (
        <div className='alert alert-secondary'>
            <label>
                Currency
                <select className='alert-success' 
                    name="Currency" 
                    id="Currency" 
                    onChange={event=>changeCurrency(event.target.value)}
                    style={selectStyles}>
                <option value="$" style={colorStyles}>$ Dollar</option>
                <option value="£" style={colorStyles}>£ Pound</option>
                <option value="€" style={colorStyles}>€ Euro</option>
                <option value="₹" style={colorStyles}>₹ Ruppee</option>
            </select>
            </label> 	
        </div>
    );
};

export default Currency;