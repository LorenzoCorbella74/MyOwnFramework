var page3 = {
    lore: 'file caricato dinamicamente',

    pressme: function () {
        const loader = new ScriptLoader('dynamics.js');
        loader.load()
            .then(e => {
                var page3 = document.getElementById('page3');
                var output = document.getElementById('output');
                var t = document.createTextNode(this.lore + test); // test è nel file caricato dinamicamente
                output.appendChild(t);
                page3.appendChild(output);
            })
            .catch(e => console.error(e))

    },
    onStart: function () {
        console.log('page 3 starting');
    },
    onDestroy: function () {
        console.log('page 3 removed');
    }
}