const getButton = document.querySelector("#buttonCargar");

const getData = () => {
    axios.get(url).then(response => {
        console.log("hola");
    })
        .catch(error => {
            console.log(error);
        });
};

getButton.addEventListener('click', obtenerArchivo);

function obtenerArchivo(files) {
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var output = document.getElementById("fileOutput");
      output.textContent = e.target.result;
      var string = output.textContent;
      var o = string.split(/\s+\n*/);
      var elementotxt = document.getElementById('txt');
      elementotxt.value = o;
    };
    reader.readAsText(file);
}