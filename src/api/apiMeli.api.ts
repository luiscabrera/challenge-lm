export const obtainResultsByQuery = (query: string) => {
    const res = fetch(`https://api.mercadolibre.com/sites/MLA/search?q=​ :${query}`)
        .then(response => response.json())
        .catch(error => console.log("Error search: ", error))
    return res;
}

export const obtainItemById = (id: string) => {
    const res = fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(response => response.json())
        .catch(error => console.log("Error item: ", error))
    return res;
}

export const obtainDescriptionById = (id: string) => {
    const res = fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(response => response.json())
        .catch(error => console.log("Error description: ", error))
    return res;
}