import {useState, useEffect} from 'react' ; 

// the custom hooks should start with the use keyword
const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal} )
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
            if (err.name ===  'AbortError'){
                console.log('Fetch Aborted');
            }else {
              setIsPending(false);
              setError(err.message);
            }
            
          })

      return () => abortCont.abort();

    }, [url]) ;

    return { data, isPending, error };

}

export default useFetch ;