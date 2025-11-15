//const apiKey = {headers: {'x-api-key': 'reqres-free-v1',}, }

async function fetchData() {
    try{
        const response = await fetch("https://reqres.in/api/users/8", {
            headers: {
            'x-api-key': 'reqres-free-v1',
            },
        });

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data)

    }
    catch(error){
        console.log(error);

    }
}

fetchData();