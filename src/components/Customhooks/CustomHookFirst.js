import { useEffect } from 'react';

function useCustomHookFirst(count) {
    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count]);
}

export default useCustomHookFirst;
