export const getCountry = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json();
    return data
}

export const getCurrentCountry = async (id) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)
    const data = await response.json();
    return data
}
