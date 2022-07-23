export const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0IiwiaWF0IjoxNjU4NDI0MDg3LCJzdWIiOiJmbGxhbm9zQGdtYWlsLmNvbSIsImlzcyI6Ik1haW4iLCJleHAiOjE2NTkwMjg4ODd9.2sK9x6RSJlS8S-3KS1fQuRvmoja-HLOBGlIcYD163k8'

}

export const getAll = () => 
    fetch (`http://localhost:8090/Api/users`, {method : 'GET', headers})
    .then((res) => res.json ())
    .then((data) => data);
    
