function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // Change to false to see the rejection
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    });
}

fetchData()
    .then(response => console.log(response))
    .catch(error => console.error(error));
