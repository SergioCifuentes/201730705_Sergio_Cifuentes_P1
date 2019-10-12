const getButton = document.querySelector("#buttonCargar");
const getButtonToken = document.querySelector("#getToken");
const Reset = document.querySelector("#Reset");
const getText = document.querySelector("#texto1");
const getText2= document.getElementById("resultados");

const url = "http://localhost:3300/resultado";
const sendData = () => {
    axios.post('http://localhost:3300/automata', {
            lineas: getText.value,
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
        getText2.innerHTML = getText2.innerHTML  +"<tr> <td>"+response.data.id+"</td>  <td>"+response.data.token+"</td></tr> ";
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
getButtonToken.addEventListener('click', getData);
