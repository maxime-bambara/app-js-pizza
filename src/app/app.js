export class App {

    constructor(){
        console.log('Instanciation de l\'app');
        this.init();
    }

    async init() {
        await fetch("/src/views/header.html")
        .then (res => res.text())
        .then (data => {
            document.body.innerHTML = data;
        });

        await fetch("/src/views/admin.html")
        .then (res => res.text())
        .then (data => {
            document.body.innerHTML += data;
        });

        await fetch("/src/views/footer.html")
        .then(res => res.text())
        .then(data => {
            document.body.innerHTML += data;
        });
    }
}
