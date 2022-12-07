function EploymentType (props) {
     const {type} = props;
     
    return (
        <div className="eployment_type">
            <span>{type}</span>
        </div>
    )
}

export {EploymentType}