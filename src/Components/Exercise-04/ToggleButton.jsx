import { useState } from 'react'

function ToggleButton() {

    const [isOn, setIsOn] = useState(false)

    const toggle = () => {
        setIsOn(!isOn)
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>

            <button onClick={toggle} style={{ backgroundColor: isOn ? '#4CAF50' : '#F44336', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 8px', fontSize: '26px' }}
            
            >Turn {isOn ? 'ON' : 'OFF'}</button>
            {isOn ? <h1>The Button is ON</h1> : <h1>The Button is OFF</h1>}


        </div>
    )
}
export default ToggleButton;
