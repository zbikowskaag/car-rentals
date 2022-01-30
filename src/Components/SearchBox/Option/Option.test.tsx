import React from 'react';
import { render } from '@testing-library/react';
import Option from './Option';

describe('<Option>', () => {
    function setup(params: { data: any }) {
        return render(<Option data={params.data} />);
    }

    it('renders component', () => {
        const target = setup({
            data: {
                city: 'Manchester',
                country: 'United Kingdom',
                iata: 'MAN',
                name: 'Manchester Airport',
                region: 'Greater Manchester',
                placeType: 'C',
            },
        });
        expect(target).toMatchSnapshot();
    });
});
