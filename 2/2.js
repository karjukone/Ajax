const kalle = {name: "Kalle",
        job: "Siivooja",
        email: "kalle@mail"};


async function fetchData() {
    try{

        const response = await fetch("https://reqres.in/api/users", {
            method: 'POST',
            headers: {
            'x-api-key': 'reqres-free-v1',
            'content-Type': 'application/json'
            },
            body: JSON.stringify(kalle)

        });

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }
        console.log(response);
        return response.json();

    }
    catch(error){
        console.log(error);

    }
}

fetchData();