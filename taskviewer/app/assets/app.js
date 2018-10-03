let myapp = {
    loadProcesses : () => {
	let key = NL_OS == 'Windows' ? 'tasklist /FI "STATUS eq RUNNING"' : 'ps aux --sort -rss'; //check os and set command
	let pn = NL_OS == 'Windows' ? 0 : 10; //set index of process name based on OS
	//Process ID is the same index in both Operating Systems
	let mUse = NL_OS == 'Windows' ? 4 : 3; //memory usage index based on OS
	let mUnit = NL_OS == 'Windows' ? 'KB' : '%';

	Neutralino.os.runCommand(key, 
		(data) => {
			document.getElementById('name').innerText=data.stdout; //this formats the data into html ,omitting any aditional whitespaces between the process data retrieved
			var result=document.getElementById('name').innerText.split(/\n/);//split process rows
			
			var out='<table class="minimalistBlack"><thead><tr><th>Process Name</th><th>Process ID</th><th>Memory Usage</th></thead>'; //display header of table
			
			for(var i=3;i<result.length-1;i++) { //ommit the table header produced by CMD
				out+="<tr>";
				var col=result[i].split(" ");
				out +="<td>"+col[pn]+"</td>"+"<td>"+col[1]+"</td>"+"<td>"+col[mUse]+" "+mUnit+"</td>"; 
				out +="</tr>"; 
			};

			out+="</table>";

			console.log(data.stdout); //display process table in console
			
			document.getElementById('name').innerHTML=out; //display table to user
			
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
		setInterval(() => {myapp.loadProcesses();},5000); //refresh every 5 seconds
    },
    pingSuccessCallback : () => {
        console.log("ping success");
    },
    pingFailCallback : () => {
        console.log("ping fail");
    }
});