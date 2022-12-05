import { useParams } from 'react-router-dom';
import {JobDetailsItem} from '../../components/jobDetails/JobDetailsItem'


function MainJobDetails (props) {

    const {jobs = []} = props;

    const {id} = useParams();

    const job = jobs.filter(el => el.id === id);


    return (
        <>
            {
                job.map((item) => <JobDetailsItem key={item.id} {...item} />)
            }
        </>
    )
}

export {MainJobDetails}