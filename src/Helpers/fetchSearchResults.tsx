export const fetchSearchResults = async (numberOfResultsRequired: Number, searchTerm: String) => {
    const endpoint = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResultsRequired}&solrTerm=${searchTerm}`;
    return fetch(endpoint)
        .then((res) => {
            return res.json();
        })
        .then(
            (result) => {
                return result.results.docs;
            },
            (error) => {
                console.log(error);
            },
        );
};
