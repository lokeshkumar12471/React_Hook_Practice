import React, { Suspense, lazy, useState } from 'react';
const LazyLoadingSecondExample = () => {
    const [show, setShow] = useState(false);
    const LazyConditionRender = lazy(() => import('./LazyLoadingSubSecondExample'));
    return (
        <div>
            <h4>Lazy Loading By Conditional Rendering</h4>
            <button onClick={() => setShow(true)} className='btn btn-primary btn-sm'>Open</button>
            <div>
                {
                    show === true && <Suspense><LazyConditionRender /></Suspense>
                }
            </div>

        </div>
    );
}

export default LazyLoadingSecondExample;
