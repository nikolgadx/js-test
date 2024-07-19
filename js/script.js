const reload = document.getElementById('reload');
const enter = document.getElementById('enter');

enter.addEventListener('click', urloriginal);

function urloriginal() {
    var urloriginal = document.getElementById("urloriginal").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(urloriginal);
     urlfinalTextarea = document.getElementById("urlfinal");

    fetch(apiUrl).then(response => response.text()).then(data => {
        urlfinalTextarea.value = data;
    }).catch(error => {
        urlfinalTextarea.value = "Erro: Não foi possivel encurtar!";
    });

}

reload.addEventListener('click', () => {
    location.reload();
});