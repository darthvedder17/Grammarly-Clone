 // Check if file is of the txt format or not
 $(document).ready(function(){

    $('input[type="file"]').change(function(e){

        var fileName = e.target.files[0].name;
        if (fileName.split(".")[1]!='txt'){
            alert('Hey Man! Only text files allowed!');
            $('#files').val('');
        }

        else{
            var insideText = $('#inputBox').val(fileName);
        }


    })



})
//  Taking input to display on the textArea


// NOTE : Error catching for text displayed on uploading different file formats.

let input = document.getElementById("files");
let textArea = document.getElementById("displayField")
let inputBox = $('#inputBox').val();
console.log(inputBox);

    input.addEventListener('change', () => { 
    let files = input.files; 
  
    if (files.length == 0) return; 
  

   var file = files[0]; 
  
    let reader = new FileReader(); 
  
    reader.onload = (e) => { 
        var file = e.target.result; 
  
        // This is a regular expression to identify carriage  
        // Returns and line breaks 
        const lines = file.split(/\r\n|\n/); 
        textArea.value = lines.join('\n'); 
  
    }; 
  
    reader.onerror = (e) => alert(e.target.error.name); 
  
    reader.readAsText(file); 
}); 



