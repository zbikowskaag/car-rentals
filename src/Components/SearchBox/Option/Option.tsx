import React from 'react';
import Label from './Label';
import PlaceTypeBadge from './PlaceTypeBadge';

const Option = (props) => {
    const { innerProps, innerRef } = props;

    return (
        <div ref={innerRef} {...innerProps} className="option flex font12">
            <PlaceTypeBadge placeType={props.data.placeType} />
            <Label
                name={props.data.name}
                iata={props.data.iata}
                city={props.data.city}
                region={props.data.region}
                country={props.data.country}
            />
        </div>
    );
};

export default Option;
