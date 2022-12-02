import {Button} from '../../components/jobDetails/Button'


function Main (props) {
    const {jobs = []} = props;

    const {
        title
    } = jobs


    console.log(title)

    return (
        <main className="main_details">

            <Button />

            <div className="main_title">
                <h2>

                </h2>
                <div>
                    <p>

                    </p>
                    <p>
                        Brutto, per year
                    </p>
                </div>
                <div>
                    Posted 2 days ago
                </div>
            </div>
            <div className="main_title">
                <h2>
                    Responsibilities
                </h2>
                <p>

                </p>
            </div>
            <div className="main_title">
                <h2>
                    Compensation & Benefits
                </h2>
                <p>

                </p>
            </div>

            <Button />

            <div className="main_title">
                <h2>
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
                <h2>
                    Attached Images
                </h2>
            </div>
            <div>
                <a className='return_button' href="http://localhost:3000/">RETURN TO JOB BOARD</a>
            </div>
        </main>
    )
}

export {Main}