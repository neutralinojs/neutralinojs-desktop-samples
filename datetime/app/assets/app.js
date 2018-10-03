let myapp = {
    loadProcesses : () => {
	let key = NL_OS == 'Windows' ? 'echo %date% %time%' : 'date'; //check os and set command
	
	Neutralino.os.runCommand(key, 
		(data) => {
			document.getElementById('name').innerHTML=data.stdout; //display date to user
		},
		() => {
			console.error('error');
		}
	);
	}
};

Neutralino.init({
    load: () => {
        myapp.loadProcesses();
		setInterval(() => {myapp.loadProcesses();},1000); //refresh every 1 second
    },
    pingSuccessCallback : () => {
        console.log("ping success");
    },
    pingFailCallback : () => {
        console.log("ping fail");
    }
});