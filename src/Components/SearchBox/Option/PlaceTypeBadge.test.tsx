import React from 'react';
import { render } from '@testing-library/react';
import PlaceTypeBadge from './PlaceTypeBadge';

describe('<PlaceTypeBadge>', () => {
    function setup(params: { placeType: string }) {
        return render(<PlaceTypeBadge placeType={params.placeType} />);
    }

    it('renders the blue badge', () => {
        const target = setup({
            placeType: 'C',
        });

        expect(target).toMatchSnapshot();
    });

    it('renders the orange badge', () => {
        const target = setup({
            placeType: 'A',
        });

        expect(target).toMatchSnapshot();
    });
});
