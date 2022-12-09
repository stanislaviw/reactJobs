import { Link } from 'react-router-dom';

function Job (props) {


    const {
        id,
        name,
        title,
        pictures,
    } = props;

    return (
       <Link to={`/reactJobs/details/${id}`}> 
            <div className="job">
                <div className="img">
                    <img  src={pictures.map(item => item + `?random=${id}`)} alt="pictures"/>
                </div>
                <div className="job_distription">
                    <div className="job_info">
                        <h2 className="title">{title}</h2>
                        <p className="name">Department name • {name} - AKH</p>
                        <p className="location"><i className="tiny location_icon material-icons">location_on</i>Viena, Austria</p>
                    </div>
                </div>
                <div className="stars">
                    <i className="tiny star material-icons">star</i>
                    <i className="tiny star material-icons">star</i>
                    <i className="tiny star material-icons">star</i>
                    <i className="tiny star material-icons">star</i>
                    <i className="tiny star material-icons">star</i>
                </div>
                <div className="date_bookmark">
                    <div>
                        <i className="tiny bookmark_icon material-icons">bookmark_border</i>
                    </div>
                    <div className="date_posted">
                        <p>Posted 2 days ago</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export {Job}