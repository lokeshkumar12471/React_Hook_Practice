import React, { useRef } from 'react'

const RefFourthExample = () => {
    let arr = new Array(10).fill(null);

    let headings = useRef([]);

    function changeh1style(e) {
        for (let ele of headings.current) {
            ele.classList.remove('primary');
        }
        e.target.classList.add('primary')
    }
    return (
        <>
            <h6>useRef Hook In React, This is Fourth Example</h6>

            {
                arr.map(
                    (ele, i) => {
                        return (
                            <div key={i}>
                                <h1 ref={(el) => headings.current[i] = el} onClick={(e) => {
                                    changeh1style(e)
                                }}>This is Heading {i + 1}</h1>
                            </div>
                        )
                    })
            }
        </>
    )
}

export default RefFourthExample
