import {Button} from '../../components/jobDetails/Button';
import {EploymentType} from '../../components/jobDetails/EploymentType';
import {Benefits} from '../../components/jobDetails/Benefits';
import {BenefitsItem} from '../../components/jobDetails/BenefitsItem';
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

    const result = description.match(/(?<=\n)[^\n]+/g)?.filter(e => e.length > 2);
    const last = result && result[4].split('.');
    last?.pop();

    return (

        <div className='container_details'>
            <main className="main_details">

                <Button />

                <div className="main_title_first">
                    <div>
                        <h2 className='main_title_first_item'>
                            {title}
                        </h2>
                        <div>
                            <p className='posted'>Posted 2 days ago</p>
                        </div>
                    </div>
                    <div className='main_price'>
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
                        {result[0]}
                    </p>
                </div>

                <div className="main_title">
                    <h3 className='main_title_item'>
                        Responsibilities
                    </h3>
                    <p>
                        {result[2]}
                    </p>
                </div>
                <div className="main_title">
                    <h3 className='main_title_item'>
                        Compensation & Benefits:
                    </h3>
                    <ul type="square">
                        {last.map( item => <BenefitsItem key={item} liItem={item} />)}
                    </ul>
                </div>

                <Button />

                <div className="main_title">
                    <h2 className="main_heading">
                        Additioinal Info
                    </h2>
                    <div>
                        <p className="eployment_type_text">
                            Employment type:
                        </p>
                        <div className='employment_type_container'>
                            {employment_type.map(item => <EploymentType key={item} type={item} />)}
                        </div>
                    </div>
                    <div>
                        <p className='eployment_type_text'>
                            Benefits:
                        </p>
                        <div className='employment_type_container'>
                            {benefits.map(item => <Benefits key={item} type={item} />)}
                        </div>
                    </div>
                </div>
                <div className="main_title">
                    <h2 className="main_heading">
                        Attached Images
                    </h2>
                    <div>
                        <img className="attached_images" src={pictures[0]}  alt="pictures"></img>
                        <img className="attached_images" src={pictures[1]}  alt="pictures"></img>
                        <img className="attached_images" src={pictures[2]} alt="pictures"></img>
                    </div>
                </div>
                <div className='return_button'>
                    <Link className='return_button_link' to="/"> <i className="tiny return_icon material-icons">keyboard_arrow_left</i> RETURN TO JOB BOARD</Link>
                </div>
            </main>
            
        </div>
    )
}

export {JobDetailsItem};