/**
* @file Submit component of the Boggle game
* @author sajalshres
*/

import React from 'react';
import './styles.scss';

function Submit() {
    return (
        <div className="submit">
            <input className="submit__input" type="text" id="name" name="name" />
            <button className="submit__button">Submit</button>
        </div>
    );
}

export default Submit
