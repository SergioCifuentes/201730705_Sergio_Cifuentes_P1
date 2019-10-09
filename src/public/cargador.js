const getButton = document.querySelector("#buttonCargar");

const getData = () => {
    axios.get(url).then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};

getButton.addEventListener('click', getData);