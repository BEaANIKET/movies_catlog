import { createContext, useContext, useEffect, useState } from "react";


export const AppContext = createContext();


const ContextProvider = ({children})=>{

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [isError, setIsError] = useState({show: false, msg: ''})
    const [query, setQuery] = useState('hacker')

    const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`;

    const getMovies = async(url)=>{
        setIsLoading(true)
        try {
            const responce = await fetch(url);
            const data = await responce.json();
            console.log(data);
            if(data.Response === "True"){
                setMovies(data.Search);
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg : '',
                })
                setIsLoading(false)
            }
            else{
                setMovies(data.Search);
                setIsError({
                    show: true,
                    msg : data.Error,
                })
            }

        } catch (error) {
            console.log("get movies error -> ", error)
        }
    }

    useEffect(()=>{
        
        let timer = setTimeout(() => {
            getMovies(API_URL);
        }, 1000);

        return ()=> clearTimeout(timer);

    }, [query])


    const allData = {isError, isLoading, movies, query, setQuery}


    return (
        <AppContext.Provider value={allData}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return (
        useContext(AppContext)
    )
}


export default ContextProvider;