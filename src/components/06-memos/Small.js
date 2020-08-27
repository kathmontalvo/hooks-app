import React from 'react'

const Small = React.memo(({ value }) => {

    console.log('me volvi a llamar uwu');

    return (
        <small>
            {value}
        </small>
    )
})

export default Small
