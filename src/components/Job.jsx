function Job (props) {
    const {
        id,
        name,
        title,
        updateAt,
        pictures,
    } = props;

    return (
        <div className="job">
            <div className="img">
                <img src={pictures[2]} alt="house"/>
            </div>
            <div className="job_distription">
                <div className="job_info">
                    <h2 className="title">{title}</h2>
                    <p className="name">Department name {name}</p>
                    <p className="location">Viena</p>
                </div>
            </div>
            <div>
                starts
            </div>
            <div>
                <p>Flex</p>
            </div>
        </div>
    )
}

export {Job}