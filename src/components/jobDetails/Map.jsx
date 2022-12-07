function Map (props) {

    return (
        <div className="map">
            <div className="map_title">
                <h4 className="map_text">
                    Department name.
                </h4>
                <h4 className="map_text">
                    Superplex Hospital.
                </h4>
                <p className="map_text">
                    AKH, 1032 Viena, Austria.
                </p>
                <p className="map_text">
                    +43 (01) 40400-12090,
                </p>
                <p className="map_text">
                    post_akh_diz@akhwien.at
                </p>
            </div>
            <div className="map_image">
                <p><i className="large material-icons">location_on</i></p>
            </div>
        </div>
    )
}

export {Map}