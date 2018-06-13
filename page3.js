var page3 = {
    lore: 'test output',
    counter: 1,
    pressme: function () {
        this.counter++;
        var page2 = document.getElementById('page3');
        var output = document.getElementById('output');
        var t = document.createTextNode(this.lore); // Create a text node
        output.appendChild(t); // Append the text to <button>
        page2.appendChild(output);
    },
    onStart: function () {
        console.log('page 3 starting');
    },
    onDestroy: function () {
        console.log('page 3 removed');
    }
}