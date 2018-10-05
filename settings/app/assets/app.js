// MIT License

// Copyright (c) 2018 Neutralinojs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

let myapp = {
    myfunction: () => {
        Neutralino.settings.getSettings(
            // executes on successfull retrieval of settings
            (settingsData) => {
                document.getElementById('appname').innerHTML = 'App Name: ' + settingsData.appname;
                document.getElementById('appport').innerHTML = 'App Port: ' + settingsData.appport;
                document.getElementById('mode').innerHTML = 'Mode: ' + settingsData.mode;
            },
            // executes when a error occurs
            () => {
                console.log('An error occured while trying to retrieve the settings.');
            }
        );
    }
}

Neutralino.init({
    load: () => {
        myapp.myfunction();
    },
    pingSuccessCallback: () => {
        console.log("ping success");
    },
    pingFailCallback: () => {
        console.log("ping fail");
    }
});