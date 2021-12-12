import React from 'react'

export default function SelectDetails(props) {
    return (
        <div>
            <p>Select Details:</p>
            <label>
                <input
                    type="checkbox"
                    defaultChecked
                    onChange={(e) => props.onTitleShow(e.target.checked)}
                ></input>
                Title
            </label>
            <label>
                <input type="checkbox" defaultChecked onChange={(e) => props.onTextShow(e.target.checked)}></input>
                Description
            </label>
            <label>
                <input type="checkbox" defaultChecked onChange={(e) => props.onDateShow(e.target.checked)}></input>
                Date Added
            </label>
        </div>
    )
}
