import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('<Label>', () => {
    function setup(params: {
        city?: string;
        country?: string;
        iata?: string;
        name?: string;
        region?: string;
    }) {
        return render(
            <Label
                city={params.city}
                country={params.country}
                iata={params.iata}
                name={params.name}
                region={params.region}
            />,
        );
    }

    it('renders component with all location info provided', () => {
        const target = setup({
            city: 'Manchester',
            country: 'United Kingdom',
            iata: 'MAN',
            name: 'Manchester Airport',
            region: 'Greater Manchester',
        });
        expect(target).toMatchSnapshot();
    });

    it('renders component with not all location info provided', () => {
        const target = setup({
            country: 'United Kingdom',
            name: 'Manchester Airport',
            region: 'Greater Manchester',
        });
        expect(target).toMatchSnapshot();
    });
});
