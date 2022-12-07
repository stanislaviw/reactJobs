function Header () {

    return (
            <header className="header_details">
                <h2 className="title_details_job">
                    Job Details
                </h2>
                <p className="text_header_details">
                    <i  className="tiny icon_header material-icons">bookmark_border</i>
                    Save to my list
                    <i className="tiny icon_header icon_share material-icons">share</i>
                    Share
                </p>
            </header>
    )
}

export {Header}