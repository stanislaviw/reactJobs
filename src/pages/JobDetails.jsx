import React, {useState, useEffect} from 'react';
import {Header} from '../layout/jobDetails/Header';
import {Map} from '../components/jobDetails/Map';
import {MainJobDetails} from '../layout/jobDetails/Main';

function JobDetails () {
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
        .then(response => response.json())
        .then(data => {
            setJobs(data);
        })
    }, [])


    return (
        <div className='container_details'>
            <div className='title_details'>
                <Header />
                <MainJobDetails jobs = {jobs}/>
            </div>
            <div className="map_details">
                <Map />
            </div>
        </div>
    )
}

export {JobDetails};