const getButton = document.querySelector("#buttonCargar");
const getText = document.querySelector("#texto1");

const sendData = () => {
    axios.post('http://localhost:3000/automata', {
            linea: getText.value,
        }, {
            'Content-Type': 'application/json'
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}; 

const getData = () => {
    axios.get(url).then(response => {
        console.log("hola");
    })
        .catch(error => {
            console.log(error);
        });
};



function obtenerArchivo(files) {
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var output = document.getElementById("fileOutput");
      output.textContent = e.target.result;
      var string = output.textContent;
      
      var elementotxt = document.getElementById('texto1');
      elementotxt.value = string;
    };
    reader.readAsText(file);
}
getButton.addEventListener('click', sendData);