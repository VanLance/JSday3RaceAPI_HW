const getData = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0,7)
}

const Dom_elements = {
    raceCar_list : '.raceCar-list'
}

const create_list = ( position, name, wins, points, nationality) => {
    const html = `<a href = "#" class="list-group-item list group-item-action list-group-item-light" >  position: ${position} | Name: ${name} | Wins: ${wins} | Points: ${points} |Nationality: ${nationality} </a>`;
    document.querySelector(Dom_elements.raceCar_list).insertAdjacentHTML('beforeend', html)
}

const load_data = async () => {
    const raceCar = await getData();
    
    raceCar.forEach( element => create_list(element.position, element.Driver.givenName, element.wins, element.points, element.Driver.nationality))
}

const clear_data = () => {
    document.querySelector(Dom_elements.raceCar_list).innerHTML = "";
}

