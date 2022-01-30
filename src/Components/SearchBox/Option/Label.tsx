import React from 'react';

export interface LabelProps {
    iata?: string;
    name?: string;
    city?: string;
    region?: string;
    country?: string;
}

const Label = (props: LabelProps) => {
    const getPrimaryLabel = () => {
        return props.iata ? `${props.name} (${props.iata})` : props.name;
    };
    const getSecondaryLabel = () => {
        const secondaryLabelArray = [props.city, props.region, props.country];
        return secondaryLabelArray.filter((x) => x !== undefined).join(', ');
    };
    return (
        <div className="label">
            <div className="label-primary">{getPrimaryLabel()}</div>
            <div className="label-secondary font-12">{getSecondaryLabel()}</div>
        </div>
    );
};

export default Label;
