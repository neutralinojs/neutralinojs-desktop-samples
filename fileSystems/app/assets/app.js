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


function createDirectory(direcName) {
    Neutralino.filesystem.createDirectory(direcName,
        () => {
            alert('Directory ' + direcName + ' was created successfully.');
        },
        () => {
            alert('An error has occured. Please try again.');
        }
    );
}

function deleteDirectory(direcName) {
    Neutralino.filesystem.removeDirectory(direcName,
        () => {
            alert('Directory ' + direcName + ' was deleted successfully!');
        },
        () => {
            alert('An error has occured. Please try again.');
        }
    );
}

function writeFile(fileName, text) {
    Neutralino.filesystem.writeFile(fileName, text,
        () => {
            alert('File ' + fileName + ' was written successfully!');
        },
        () => {
            alert('An error has occured. Please try again.');
        }
    );
}

function readFile(fileName) {
    Neutralino.filesystem.readFile(fileName,
        (data) => {
            alert('File ' + fileName + ' contents: ' + data.content);
        },
        () => {
            alert('An error has occured. Please try again.');
        }
    );
}

function deleteFile(fileName) {
    Neutralino.filesystem.removeFile(fileName,
        (data) => {
            alert('File ' + fileName + ' was deleted successfully!');
        },
        () => {
            alert('An error has occured. Please try again.');
        }
    );
}

function validate(type) {
    switch (type) {
        case 1:
            if (document.getElementById('directoryName').value == '') {
                alert('Please fill in the directory name.');
            } else {
                createDirectory(document.getElementById('directoryName').value);
                document.getElementById('directoryName').value = '';
            }
            break;
        case 2:
            if (document.getElementById('directoryName').value == '') {
                alert('Please fill in the directory name.');
            } else {
                deleteDirectory(document.getElementById('directoryName').value);
                document.getElementById('directoryName').value = '';
            }
            break;
        case 3:
            if (document.getElementById('fileName').value == '' || document.getElementById('fileContents').value == '') {
                alert('Please fill in the file name and file contents.');
            } else {
                writeFile(document.getElementById('fileName').value, document.getElementById('fileContents').value);
                document.getElementById('fileName').value = '';
                document.getElementById('fileContents').value = '';
            }
            break;
        case 4:
            if (document.getElementById('fileName').value == '') {
                alert('Please fill in the file name.');
            } else {
                readFile(document.getElementById('fileName').value);
                document.getElementById('fileName').value = '';
            }
            break;
        case 5:
            if (document.getElementById('fileName').value == '') {
                alert('Please fill in the file name.');
            } else {
                deleteFile(document.getElementById('fileName').value);
                document.getElementById('fileName').value = '';
            }
            break;
    }
}

Neutralino.init({
    load: () => {
        //myapp.myfunction();
    },
    pingSuccessCallback: () => {
        console.log("ping success");
    },
    pingFailCallback: () => {
        console.log("ping fail");
    }
});