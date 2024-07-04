fetch('assets/html/navigation.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navigation').innerHTML = data;
    });