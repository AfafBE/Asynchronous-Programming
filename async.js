//TASK 1 : Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
async function awaitCall() {
   
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: "Mock API response data" });
            }, 2000); //2s delay
        });
    };

    
    try {
        const response = await fetchData();
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

awaitCall();



//TASK2 : Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
async function iterateWithAsyncAwait(array) {
    try {
        for (const value of array) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(value);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}



//TASK 3 : Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.
async function concurrentRequests() {
    try {
    
      const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
      ]);
  
      // Get JSON data
      const data1 = await response1.json();
      const data2 = await response2.json();
  
      const combinedResults = { ...data1, ...data2 };
      console.log(combinedResults);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  concurrentRequests();