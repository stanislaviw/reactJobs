function Benefits (props) {
    const {type} = props;
    
   return (
       <div className="benefits_item">
           <span>{type}</span>
       </div>
   )
}

export {Benefits}