var message;
var initialmsg;
function getSetting(){
    Neutralino.settings.getSettings(
        // executes on successfull retrieval of settings
        (settingsData) => {
            document.getElementById('programName').innerText = settingsData.appname;
            document.getElementById('port').innerText = settingsData.appport;
            document.getElementById('mode').innerText = settingsData.mode;
        },
        // executes when a error occurs
        () => {
          console.log('An error occured while trying to retrieve the settings.');
        }
      );

      let key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
      Neutralino.os.getEnvar(key, (data) => {
          document.getElementById('user').innerText = data.value;
      },
      () => {
        console.log('An error occured while trying to retrieve the settings.');
      }
      );
}

function getData(){
    Neutralino.os.runCommand('CD', 
        (data) => {
            initialmsg = data.stdout;
            message = data.stdout;
            document.getElementById('commandText').innerText = message;
    },
        () => {
            console.error('error');
    }
    );
}

function runCommands(){
    var command = document.getElementById("command").value;


    toUpper = command.toUpperCase();

    if(toUpper === 'CLS'){
        message = '';
        console.log("Cleaning");
        commandRunner(command);
    }else{
        commandRunner(command);
    }
}

function commandRunner(command){
    Neutralino.os.runCommand(command, 
        (data) => {
            
            message = message + data.stdout + '\n' + initialmsg;
            document.getElementById('commandText').innerText = message;
            document.getElementById('command').value = '';
            document.getElementById('command').focus;
            
            var objDiv = document.getElementById("terminal");
            objDiv.scrollTop = objDiv.scrollHeight;
    },
        () => {
            console.error('error');
    }
    );
}

Neutralino.init({
    load: () => {
        getSetting();
        getData();
        document.querySelector('#command').addEventListener('keypress', function (e) {
            var key = e.which || e.keyCode;
            if (key === 13) { // 13 is enter
                runCommands();
            }
        })
    }
});