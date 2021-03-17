import {useState, useEffect} from 'react' ; 

// the custom hooks should start with the use keyword
const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url )
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            }
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setdata(data);
            setError(null);
          })
          .catch(err => {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          })

      return () => console.log('clean up')

    }, [url]) ;

    return { data, isPending, error };

}

export default useFetch ;