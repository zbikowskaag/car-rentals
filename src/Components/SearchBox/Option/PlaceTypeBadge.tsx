import React from 'react';

interface PlaceTypeBadgeProps {
    placeType: string;
}

const PlaceTypeBadge = (props: PlaceTypeBadgeProps) => {
    let text: string;
    let className: string;

    switch (props.placeType) {
        case 'A':
            text = 'Airport';
            className = 'orange';
            break;
        case 'C':
            text = 'City';
            className = 'blue';
            break;
        case 'T':
            text = 'Station';
            className = 'blue';
            break;
        case 'D':
            text = 'Station';
            className = 'blue';
            break;
        default:
            text = 'Other';
            className = 'blue';
    }

    return (
        <div className="placeTypeBadge flex itemsCenter">
            <span className={`placeTypeBadgeText placeTypeBadgeText-${className}`}>{text}</span>
        </div>
    );
};

export default PlaceTypeBadge;
