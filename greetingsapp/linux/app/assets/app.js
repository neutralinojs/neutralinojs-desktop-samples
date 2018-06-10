let getUsername = () => {
    let key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
    Neutralino.os.getEnvar(key, (data) => {
        document.getElementById('name').innerText = data.value;
    },
    () => {
        //handle error
    }
    );
        
}

Neutralino.init({
    load: () => {
        getUsername();
    }
});