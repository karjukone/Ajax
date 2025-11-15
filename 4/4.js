async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error:', error);
    throw error;
  }
}

async function sendData() {
 try {
     const user = {
       name: 'John Doe',
       job: 'Developer'
     };
     const url = 'https://reqres.in/api/users';
     const options = {
       method: 'POST',
       headers: {
           'x-api-key': 'reqres-free-v1',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(user)
     }
     const userData = await fetchData(url, options);
     console.log('data:', userData);
   } catch (error) {
     console.error('An error occurred:', error);
   }
}  

sendData();
 