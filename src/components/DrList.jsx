import React from 'react'

export const DrList = () => {
    const myStyle = {
        marginLeft: "44%",
        marginTop:"100px"

    }

    const selectopt = {
        width: "300px",
        height: "40px",
        borderRedus:"10px"
        // color:"red"
    }

    let sukku = 5;
    let ritu = 5;
    let rahul = 5;
    let ankit = 5;
    let sharoof = 5;
    let nisha = 5;
    let shushma = 5;
    let parwez = 5;
    let jane = 5;

    const handlechange = (e) => {

        // console.log(e.target.value);
        if (e.target.value === 'sukku') {
            sukku -= 1
            if (sukku <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs (sukku-5)}`)
            }
            // console.log(sukku, 'sukku');
            
        } else if (e.target.value === 'shushma') {
            shushma -= 1
            if (shushma <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs (shushma-5)}`)
            }
            
        }
        else if (e.target.value === 'ankit') {
            ankit -= 1
            if (ankit <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs (ankit-5)}`)
            }
            
        } else if (e.target.value === 'rahul') {
            rahul -= 1
            if (rahul <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs (rahul-5)}`)
            }
            
        } else if (e.target.value === 'ritu') {
            ritu -= 1
            if (ritu <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs (ritu-5)}`)
            }
        }
        else if (e.target.value === 'jane') {
            jane -= 1;
            if (jane <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs (jane-5)}`)
            }
        }
        else if (e.target.value === 'parwez') {
            parwez -= 1
            if (parwez <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs (parwez-5)}`)
            }
        }
        else if (e.target.value === 'sharoof') {
            sharoof -= 1
            if (sharoof <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs (sharoof-5)}`)
            }
        }
        else if (e.target.value === 'nisha') {
            nisha -= 1
            if (nisha <= 0) {
                alert(`Appointment is full for Today for dr ${e.target.selectedOptions[0].text} please try Tomorrow`)
                // alert(e.target.selectedOptions[0].text)
            } else {
                alert(`Appontment booked successfully for dr ${e.target.selectedOptions[0].text} your Bokking No is ${Math.abs(nisha - 5)}`)
            }
        }

    }
  return (
      <div style={myStyle}>
          <h3 style={{  position: "absolute",marginLeft:"-100px",marginTop:"10px"}}>Dr. List</h3>
          <select name="drname" style={selectopt} onChange = {handlechange} >

              {/* <option value="">Choose Dr.</option> */}
              <option value="dr">Choose Doctor</option>
              <optgroup label='Cardiologists 10 AM - 12PM'>

              <option value="sukku">Sukanya Maurya</option>
                  <option value="shushma">Shushma Maurya</option>
              </optgroup>
              <optgroup label='Dermatologists 11AM -2PM'>
              <option value="ankit">Ankit Gupta</option>
              <option value="rahul">Rahul Gautam</option>
              <option value="ritu">Ritu Bhatt</option>
              </optgroup>
              <optgroup label='Hematologists 1PM - 3PM' style={{borderRadius:"10px"}}>
                  <option value="jane">Janealam Khan</option>
                  <option value="Parwez">Parwez Shaikh</option>
              </optgroup>
              7<optgroup label='Neurologists 7PM - 10PM'>
                  <option value="sharoof">Sharoof Khan</option>
                  <option value="nisha">Nisha Rangi</option>

              </optgroup>
                  
          </select>
    </div>
  )
}
