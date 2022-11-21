import React, {useState, useEffect} from 'react';
import {Jobs} from '../components/Jobs'

function Main () {
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
        .then(response => response.json())
        .then(data => {
            setJobs(data);
        })
    }, [])
    

    return (
        <div className='container'>
            <main className='main'>
                <Jobs jobs = {jobs}/>
            </main>
        </div>
    )
}

export {Main}