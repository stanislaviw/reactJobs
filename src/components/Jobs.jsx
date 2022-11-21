import { Job } from "./Job";

function Jobs (props) {
    const {jobs = []} = props;

    return (
        <div className="jobs">
            {
                jobs.map(job => (<Job key={job.id} {...job}/>))
            }
        </div>
    )
}

export {Jobs}