import React, { useState } from 'react'
import "./style.css"

const Modalka = () => {
    const [ display, setDisplay ] = useState(true)
  return (
    <div>
      { display && <div className="modal">
        <div className="modalka">
          <div className="cell">
            <h2>Navbat olish</h2>
            <div className="modalDetails">
              <div className="question">
                <h4>Shifokor</h4>
                <h4>Mutahasislik</h4>
                <h4>Ish Vaqti</h4>
                <h4>Etaj</h4>
                <h4>Mijozlar Soni</h4>
                <h4>Xozir</h4>
                <h4>5 - mijoz</h4>
              </div>
              <div className="question">
                <p>
                  <b>: Ahmedov Ozod</b>
                </p>
                <p>
                  <b>: Terapevt</b>
                </p>
                <p>
                  <b>: 9:00 - 16:00</b>
                </p>
                <p>: 2</p>
                <p>
                  <b>: Mijozlar 12</b>
                </p>
                <p>
                  <b>: 6</b>
                </p>
                <p>
                  <b>: 32 daqiqa</b>
                </p>
              </div>
            </div>
            <button onClick={ () => { setDisplay( !display ) } }>Bekor Qilish</button>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Modalka