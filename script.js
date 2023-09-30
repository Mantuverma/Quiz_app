// section 1 defining quiz question 

let Quizdata = [
    {
        'question': "What does HTML stand for?",
        'a': "Hyperlinks and Text Markup Language",
        'b': "Hyper Text Markup Language",
        'c': "Hyper transfer Text Markup Language",
        'd': "HyperText Markup Language",
        'correct': 'd'
    },
    {
        'question': "Which HTML tag is used to create a hyperlink?",
        'a': "<a>",
        'b': "<link>",
        'c': "<href>",
        'd': "<url>",
        'correct': 'a'
    },
    {
        'question': "What does CSS stand for?",
        'a': "Cascading Style Sheets",
        'b': "Computer Style Sheets",
        'c': "Creative Style Sheets",
        'd': "Colorful Style Sheets",
        'correct': 'a'
    },
    {
        'question': "How do you include a CSS file in an HTML document?",
        'a': "<style src='mystyle.css'>",
        'b': "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
        'c': "<css src='mystyle.css'>",
        'd': "<stylesheet>mystyle.css</stylesheet>",
        'correct': 'b'
    },
    {
        'question': "What is the correct syntax for commenting in JavaScript?",
        'a': "// This is a comment",
        'b': "' This is a comment",
        'c': "<!-- This is a comment -->",
        'd': "# This is a comment",
        'correct': 'a'
    },
    {
        'question': "Which JavaScript keyword is used to declare a variable?",
        'a': "var",
        'b': "let",
        'c': "variable",
        'd': "int",
        'correct': 'a'
    },
    {
        'question': "How do you display a message in the browser console using JavaScript?",
        'a': "console.log('Hello, world!');",
        'b': "print('Hello, world!');",
        'c': "alert('Hello, world!');",
        'd': "message('Hello, world!');",
        'correct': 'a'
    },
    {
        'question': "Which HTML tag is used to define the structure of an HTML document?",
        'a': "<structure>",
        'b': "<body>",
        'c': "<head>",
        'd': "<html>",
        'correct': 'd'
    },
    {
        'question': "What is the purpose of the CSS property 'font-size'?",
        'a': "To change the text color",
        'b': "To change the font family",
        'c': "To change the font size",
        'd': "To change the text alignment",
        'correct': 'c'
    },
    {
        'question': "How can you add a comment in CSS?",
        'a': "// This is a comment",
        'b': "' This is a comment",
        'c': "/* This is a comment */",
        'd': "# This is a comment",
        'correct': 'c'
    },
    {
        'question': "What is the purpose of the JavaScript function 'parseInt()'?",
        'a': "To parse JSON data",
        'b': "To convert a string to an integer",
        'c': "To round a number to the nearest integer",
        'd': "To concatenate two strings",
        'correct': 'b'
    },
    {
        'question': "Which HTML element is used to define an unordered list?",
        'a': "<ul>",
        'b': "<ol>",
        'c': "<li>",
        'd': "<list>",
        'correct': 'a'
    },
    {
        'question': "What is the correct way to select an HTML element with the id 'myElement' using JavaScript?",
        'a': "getElementById('myElement')",
        'b': "selectElement('myElement')",
        'c': "queryElement('myElement')",
        'd': "get('myElement')",
        'correct': 'a'
    },
    {
        'question': "What is the purpose of the CSS property 'background-color'?",
        'a': "To change the text color",
        'b': "To change the background image",
        'c': "To change the background color",
        'd': "To change the font size",
        'correct': 'c'
    },
    {
        'question': "Which JavaScript operator is used to compare two values for equality?",
        'a': "==",
        'b': "===",
        'c': "!=",
        'd': "!==",
        'correct': 'b'
    },
    {
        'question': "What does the HTML <br> tag represent?",
        'a': "A line break",
        'b': "A paragraph",
        'c': "A heading",
        'd': "A horizontal rule",
        'correct': 'a'
    },
    {
        'question': "What is the purpose of the JavaScript 'for' loop?",
        'a': "To create a function",
        'b': "To define a variable",
        'c': "To repeat a set of statements",
        'd': "To display a message",
        'correct': 'c'
    },
    {
        'question': "Which CSS property is used to add space between the border and the content of an element?",
        'a': "margin",
        'b': "padding",
        'c': "spacing",
        'd': "border-spacing",
        'correct': 'b'
    },
    {
        'question': "How do you declare a JavaScript function?",
        'a': "function myFunction()",
        'b': "declare function myFunction()",
        'c': "def myFunction()",
        'd': "function = myFunction()",
        'correct': 'a'
    },
    {
        'question': "Which HTML element is used to define a hyperlink?",
        'a': "<link>",
        'b': "<href>",
        'c': "<a>",
        'd': "<url>",
        'correct': 'c'
    }
];

let index=0;
let right = 0 ,worng = 0 ;
let questions = document.getElementById('que')
let option = document.querySelectorAll('.answer')
let total=Quizdata.length;

const reset = ()=>{
    option.forEach((index)=>{
        index.checked=false;
    }
    )
}

const end=()=>{
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("box")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"9>  you've scored ${right} / ${total} </h3>
        </div>
    `
}

const loaddata=()=>{
    if(total===index){
        return end();
    }
    reset();
    let data =Quizdata[index]
    questions.innerHTML=`[ ${ index+1 } ]     ${ data.question }`
    option[0].nextElementSibling.innerText=data.a
    option[1].nextElementSibling.innerText=data.b
    option[2].nextElementSibling.innerText=data.c
    option[3].nextElementSibling.innerText=data.d

}
// loaddata();

const getdata=()=>{
    let ans
    option.forEach((input)=>{
        if(input.checked){
            ans = input.value;
        }
    })
    return ans;
}


let getanswer = () =>{
    
    let data=Quizdata[index];
    let ans=getdata();
    if(ans==data.correct){
        right++;
    }
    else{
        worng++;
    }
    index++;
    loaddata(); 


}

loaddata();
	



