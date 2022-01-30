import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import debouncePromise from 'debounce-promise';
import Option from './Option/Option';
import { fetchSearchResults } from '../../Helpers/fetchSearchResults';

interface Location {
    iata?: string;
    name?: string;
    city?: string;
    region?: string;
    country?: string;
    locationId?: string;
    placeType?: string;
}

const SearchBox = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const formatSearchResults = (searchResults) => {
        let formattedSearchResults: Location[] = [];

        searchResults.forEach((result) => {
            formattedSearchResults.push({
                ...(result.name && { name: result.name }),
                ...(result.locationId && { value: result.locationId }),
                ...(result.iata && { iata: result.iata }),
                ...(result.city && { city: result.city }),
                ...(result.region && { region: result.region }),
                ...(result.country && { country: result.country }),
                ...(result.placeType && { placeType: result.placeType }),
            });
        });

        return formattedSearchResults;
    };

    const getOptions = async (inputValue: string) => {
        if (inputValue.length > 1) {
            const searchResults = await fetchSearchResults(6, inputValue);
            const formattedSearchResults = formatSearchResults(searchResults);
            return formattedSearchResults;
        }
    };

    const handleSelectedOption = (value: Location) => {
        setSelectedOption({ label: formatValue(value) });
    };

    const debouncedGetOptions = debouncePromise(getOptions, 500);

    const formatValue = (value: Location) => {
        const nameIata = value.iata ? `${value.name} (${value.iata})` : value.name;
        const valueArray = [nameIata, value.city, value.country];

        return valueArray.filter((x) => x !== undefined).join(', ');
    };

    const customStyles = {
        input: (provided) => ({
            ...provided,
            height: '64px',
        }),
    };

    return (
        <div className="searchBoxContainer flex itemsCenter">
            <div className="searchBox">
                <AsyncSelect
                    className="pickUpLocation"
                    loadOptions={debouncedGetOptions}
                    placeholder="Pick-Up Location"
                    aria-label="Pick-Up Location"
                    noOptionsMessage={() => 'No search results found'}
                    components={{ Option: Option }}
                    value={selectedOption}
                    onChange={handleSelectedOption}
                    styles={customStyles}
                />
            </div>
        </div>
    );
};

export default SearchBox;
