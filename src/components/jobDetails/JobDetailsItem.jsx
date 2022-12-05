import {Button} from '../../components/jobDetails/Button';
import {Link} from 'react-router-dom';

function JobDetailsItem (props) {

    const {
        id,
        benefits,
        description,
        employment_type,
        location,
        name,
        phone,
        pictures,
        salary,
        title,
    } = props;

    console.log(description.split('').indexOf('Responsopilities'))


    return (
        <main className="main_details">

            <Button />

            <div className="main_title_first">
                <div>
                    <h2>
                        {title}
                    </h2>
                    <div>
                        <p className='posted'>Posted 2 days ago</p>
                    </div>
                </div>
                <div>
                    <h3 className='price'>
                        &#8364; {salary.replace(/k/g, '000')}
                    </h3>
                    <p>
                        Brutto, per year
                    </p>
                </div>
            </div>
            <div className='main_title'>
                <p>
                    {description}
                </p>
            </div>

            <div className="main_title">
                <h3 className='main_title_item'>
                    Responsibilities
                </h3>
                <p>
                    {description}
                </p>
            </div>
            <div className="main_title">
                <h3 className='main_title_item'>
                    Compensation & Benefits:
                </h3>
                <p>

                </p>
            </div>

            <Button />

            <div className="main_title">
                <h2 className="main_heading">
                    Additioinal Info
                </h2>
                <div>
                    <p>
                        Employment type
                    </p>
                </div>
                <div>
                    <p>
                        Benefits
                    </p>
                </div>
            </div>
            <div className="main_title">
                <h2 className="main_heading">
                    Attached Images
                </h2>
                <div>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
            <div className='return_button'>
                <Link className='return_button_link' to="/"> <i className="tiny return_icon material-icons">keyboard_arrow_left</i> RETURN TO JOB BOARD</Link>
            </div>
        </main>
    )
}

export {JobDetailsItem};