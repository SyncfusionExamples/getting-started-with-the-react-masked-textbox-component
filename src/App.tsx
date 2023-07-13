import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useState } from 'react';
import './App.css';

function App() {
  const[mask,setMask]=useState('9999');
  function change(){
    setMask('2323');
  }
  return (
    <div className='wrapper'>
      {/* <div className='label'>Mobile Number</div> */}
      {/* add mask='00:00 >PM' customCharacters={{ P: 'P,A,p,a', M: 'M,m' }} placeholder='Time (ex: 10:00 PM)'
          in the below code to add custom mask value*/}
      <MaskedTextBoxComponent value={mask} mask='[0-9][0-9][0-9][0-9]' floatLabelType='Auto'
      placeholder='Enter pin code' promptChar={'#'}>

      </MaskedTextBoxComponent>
      <button className='e-btn e-info' onClick={change}>Click</button>
    </div>
  );
}

export default App;
