var getUsername = function () {
    var key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
    Neutralino.os.getEnvar(key, function (data) {
        document.getElementById('name').innerText = data.value;
    },
    function () {
        //handle error
    }
    );
        
}

Neutralino.init({
    load: function () {
        getUsername();
    }
});
