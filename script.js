var cTopicsData = [
    {
        title: "Introduction to C",
        theory: "C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972.",
        code: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
        output: "Hello, World!",
        mcq: { q: "Who developed C language?", options: ["Dennis Ritchie", "Ken Thompson", "Bjarne Stroustrup", "James Gosling"], correct: 0 }
    },
    {
        title: "Variables & Data Types",
        theory: "Variables store data. C has int, float, char, double data types.",
        code: "#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float salary = 45000.50;\n    printf(\"Age: %d\\nSalary: %.2f\", age, salary);\n    return 0;\n}",
        output: "Age: 25\nSalary: 45000.50",
        mcq: { q: "Which data type is for decimal numbers?", options: ["int", "char", "float", "void"], correct: 2 }
    },
    {
        title: "Arrays in C",
        theory: "Arrays store multiple elements of same type. Indexing starts from 0.",
        code: "#include <stdio.h>\n\nint main() {\n    int nums[5] = {10,20,30,40,50};\n    printf(\"First: %d\", nums[0]);\n    return 0;\n}",
        output: "First: 10",
        mcq: { q: "What is the first index of array?", options: ["0", "1", "-1", "Any"], correct: 0 }
    },
    {
        title: "Functions in C",
        theory: "Functions are reusable blocks of code.",
        code: "#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    printf(\"Sum: %d\", add(10,20));\n    return 0;\n}",
        output: "Sum: 30",
        mcq: { q: "What does a function return?", options: ["Value", "Variable", "Loop", "Condition"], correct: 0 }
    },
    {
        title: "Pointers in C",
        theory: "Pointers store memory addresses.",
        code: "#include <stdio.h>\n\nint main() {\n    int num = 100;\n    int *ptr = &num;\n    printf(\"Value: %d\", *ptr);\n    return 0;\n}",
        output: "Value: 100",
        mcq: { q: "What does '*' operator do?", options: ["Address of", "Dereference", "Multiplication", "Pointer"], correct: 1 }
    },
    {
        title: "File Handling in C",
        theory: "File handling allows permanent data storage using fopen(), fclose(), fprintf(), fscanf().",
        code: "#include <stdio.h>\n\nint main() {\n    FILE *file = fopen(\"test.txt\", \"w\");\n    if(file != NULL) {\n        fprintf(file, \"Hello from C!\\n\");\n        fclose(file);\n        printf(\"File created successfully!\\n\");\n    }\n    return 0;\n}",
        output: "File created successfully!",
        mcq: { q: "Which function opens a file?", options: ["open()", "fopen()", "fileopen()", "openfile()"], correct: 1 }
    }
];

var jsTopicsData = [
    {
        title: "Introduction to JavaScript",
        theory: "JavaScript makes websites interactive. Created by Brendan Eich in 1995.",
        code: "console.log(\"Hello, World!\");\nalert(\"Welcome to JavaScript!\");",
        output: "Hello, World!",
        mcq: { q: "Who created JavaScript?", options: ["Brendan Eich", "Dennis Ritchie", "Guido van Rossum", "James Gosling"], correct: 0 }
    },
    {
        title: "Variables in JavaScript",
        theory: "Use let, const, var to declare variables.",
        code: "let name = \"John\";\nconst age = 25;\nvar city = \"New York\";\nconsole.log(name, age, city);",
        output: "John 25 New York",
        mcq: { q: "Which keyword creates constant?", options: ["let", "var", "const", "constant"], correct: 2 }
    },
    {
        title: "Arrays in JavaScript",
        theory: "Arrays store multiple values. Methods: push(), pop(), shift(), unshift().",
        code: "let colors = [\"Red\", \"Green\", \"Blue\"];\ncolors.push(\"Yellow\");\nconsole.log(colors);",
        output: "['Red','Green','Blue','Yellow']",
        mcq: { q: "Method to add to end?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 }
    },
    {
        title: "Functions in JavaScript",
        theory: "Functions are reusable blocks of code.",
        code: "const add = (a,b) => a + b;\nconsole.log(add(10,5));",
        output: "15",
        mcq: { q: "Arrow function syntax?", options: ["function()", "=>", "->", "func"], correct: 1 }
    },
    {
        title: "Loops in JavaScript",
        theory: "Loops repeat code execution.",
        code: "for(let i=1;i<=3;i++) console.log(i);",
        output: "1\n2\n3",
        mcq: { q: "Best loop for arrays?", options: ["for", "while", "for...of", "do-while"], correct: 2 }
    },
    {
        title: "DOM Manipulation",
        theory: "DOM allows JavaScript to interact with HTML.",
        code: "document.getElementById(\"demo\").innerHTML = \"Hello\";",
        output: "Element changed",
        mcq: { q: "Method to get element by ID?", options: ["getElementByClass()", "getElementById()", "querySelector()", "getById()"], correct: 1 }
    }
];


var cPracticeQuestions = [
    { q: "What is the correct way to declare a pointer in C?", options: ["int ptr;", "int *ptr;", "ptr int;", "*int ptr;"], correct: 1 },
    { q: "Which function is used to allocate dynamic memory in C?", options: ["alloc()", "malloc()", "memalloc()", "call()"], correct: 1 },
    { q: "What is the size of 'int' in 32-bit system?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], correct: 1 },
    { q: "Which operator is used to get address of a variable?", options: ["*", "&", "%", "#"], correct: 1 },
    { q: "What does 'stdio.h' stand for?", options: ["Standard Input Output", "Standard Input Only", "Standard Output Only", "Standard Library"], correct: 0 }
];

var jsPracticeQuestions = [
    { q: "What does '=== ' operator check?", options: ["Only value", "Only type", "Value and type", "None"], correct: 2 },
    { q: "Which method converts JSON string to object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], correct: 0 },
    { q: "What is the output of 'typeof null'?", options: ["null", "object", "undefined", "number"], correct: 1 },
    { q: "Which keyword is used to declare a constant?", options: ["let", "var", "const", "constant"], correct: 2 },
    { q: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "None"], correct: 0 }
];

var currentCTopic = 0;
var currentJSTopic = 0;

function displayCTopics() {
    var list = document.getElementById('cTopicList');
    list.innerHTML = '';
    for(var i = 0; i < cTopicsData.length; i++) {
        var div = document.createElement('div');
        div.className = 'topic-item';
        div.textContent = cTopicsData[i].title;
        div.onclick = (function(idx) { 
            return function() { 
                currentCTopic = idx; 
                showCTopicContent(idx); 
                highlightActiveTopic('c', idx); 
            }; 
        })(i);
        list.appendChild(div);
    }
    showCTopicContent(0);
}

function showCTopicContent(idx) {
    var t = cTopicsData[idx];

    var practiceHtml = '';
    if(idx === cTopicsData.length - 1) {
        practiceHtml = `
            <div class="practice-questions-section">
                <h3 class="practice-title"> Practice Questions</h3>
                <div id="cPracticeContainer"></div>
                <button class="start-btn" onclick="submitCPracticeAnswers()" style="margin-top: 20px; width: 100%;">Submit All Answers</button>
                <div id="cPracticeResult" class="mcq-result" style="margin-top: 15px;"></div>
            </div>
        `;
    }
    
    var html = `<h2 class="topic-title">${t.title}</h2>
                <div class="topic-theory">${t.theory}</div>
                <h3> Code Example:</h3>
                <pre class="code-block">${escapeHtml(t.code)}</pre>
                <button class="run-btn" onclick="runCCode()"> Run C Code</button>
                <div id="cOutput" class="output"></div>
                <div class="topic-mcq">
                    <h4> Quick Quiz</h4>
                    <div class="mcq-question">${t.mcq.q}</div>
                    ${t.mcq.options.map((opt,i)=>`<label class="mcq-option"><input type="radio" name="cTopicMcq" value="${i}"> ${opt}</label>`).join('')}
                    <button class="mcq-submit" onclick="checkTopicMcq('c', ${t.mcq.correct})">Submit</button>
                    <div id="cTopicMcqResult" class="mcq-result"></div>
                </div>
                ${practiceHtml}`;
    document.getElementById('cTopicContent').innerHTML = html;
    
    if(idx === cTopicsData.length - 1) {
        loadCPracticeQuestions();
    }
}

function loadCPracticeQuestions() {
    var container = document.getElementById('cPracticeContainer');
    if(!container) return;
    var html = '';
    for(var i = 0; i < cPracticeQuestions.length; i++) {
        html += `<div class="practice-question">
                    <p>Q${i+1}. ${cPracticeQuestions[i].q}</p>
                    ${cPracticeQuestions[i].options.map((opt,j)=>`<label class="practice-option"><input type="radio" name="cPractice_${i}" value="${j}"> ${opt}</label>`).join('')}
                </div>`;
    }
    container.innerHTML = html;
}

function submitCPracticeAnswers() {
    var score = 0;
    for(var i = 0; i < cPracticeQuestions.length; i++) {
        var radios = document.querySelectorAll(`input[name="cPractice_${i}"]`);
        for(var j = 0; j < radios.length; j++) {
            if(radios[j].checked && parseInt(radios[j].value) === cPracticeQuestions[i].correct) {
                score++;
            }
        }
    }
    var resultDiv = document.getElementById('cPracticeResult');
    resultDiv.innerHTML = ` Your Score: ${score} out of ${cPracticeQuestions.length} (${Math.round((score/cPracticeQuestions.length)*100)}%)`;
    resultDiv.style.padding = '12px';
    resultDiv.style.background = score === cPracticeQuestions.length ? '#d4edda' : (score >= 3 ? '#fff3cd' : '#f8d7da');
    resultDiv.style.color = score === cPracticeQuestions.length ? '#155724' : (score >= 3 ? '#856404' : '#721c24');
    resultDiv.style.borderRadius = '12px';
}

function displayJSTopics() {
    var list = document.getElementById('jsTopicList');
    list.innerHTML = '';
    for(var i = 0; i < jsTopicsData.length; i++) {
        var div = document.createElement('div');
        div.className = 'topic-item';
        div.textContent = jsTopicsData[i].title;
        div.onclick = (function(idx) { 
            return function() { 
                currentJSTopic = idx; 
                showJSTopicContent(idx); 
                highlightActiveTopic('js', idx); 
            }; 
        })(i);
        list.appendChild(div);
    }
    showJSTopicContent(0);
}

function showJSTopicContent(idx) {
    var t = jsTopicsData[idx];
    var practiceHtml = '';
    if(idx === jsTopicsData.length - 1) {
        practiceHtml = `
            <div class="practice-questions-section">
                <h3 class="practice-title"> Practice Questions</h3>
                <div id="jsPracticeContainer"></div>
                <button class="start-btn" onclick="submitJSPracticeAnswers()" style="margin-top: 20px; width: 100%;">Submit All Answers</button>
                <div id="jsPracticeResult" class="mcq-result" style="margin-top: 15px;"></div>
            </div>
        `;
    }
    
    var html = `<h2 class="topic-title">${t.title}</h2>
                <div class="topic-theory">${t.theory}</div>
                <h3> Code Example:</h3>
                <pre class="code-block">${escapeHtml(t.code)}</pre>
                <button class="run-btn" onclick="runJSCode()"> Run JS Code</button>
                <div id="jsOutput" class="output"></div>
                <div class="topic-mcq">
                    <h4> Quick Quiz</h4>
                    <div class="mcq-question">${t.mcq.q}</div>
                    ${t.mcq.options.map((opt,i)=>`<label class="mcq-option"><input type="radio" name="jsTopicMcq" value="${i}"> ${opt}</label>`).join('')}
                    <button class="mcq-submit" onclick="checkTopicMcq('js', ${t.mcq.correct})">Submit</button>
                    <div id="jsTopicMcqResult" class="mcq-result"></div>
                </div>
                ${practiceHtml}`;
    document.getElementById('jsTopicContent').innerHTML = html;
    
    if(idx === jsTopicsData.length - 1) {
        loadJSPracticeQuestions();
    }
}

function loadJSPracticeQuestions() {
    var container = document.getElementById('jsPracticeContainer');
    if(!container) return;
    var html = '';
    for(var i = 0; i < jsPracticeQuestions.length; i++) {
        html += `<div class="practice-question">
                    <p>Q${i+1}. ${jsPracticeQuestions[i].q}</p>
                    ${jsPracticeQuestions[i].options.map((opt,j)=>`<label class="practice-option"><input type="radio" name="jsPractice_${i}" value="${j}"> ${opt}</label>`).join('')}
                </div>`;
    }
    container.innerHTML = html;
}

function submitJSPracticeAnswers() {
    var score = 0;
    for(var i = 0; i < jsPracticeQuestions.length; i++) {
        var radios = document.querySelectorAll(`input[name="jsPractice_${i}"]`);
        for(var j = 0; j < radios.length; j++) {
            if(radios[j].checked && parseInt(radios[j].value) === jsPracticeQuestions[i].correct) {
                score++;
            }
        }
    }
    var resultDiv = document.getElementById('jsPracticeResult');
    resultDiv.innerHTML = ` Your Score: ${score} out of ${jsPracticeQuestions.length} (${Math.round((score/jsPracticeQuestions.length)*100)}%)`;
    resultDiv.style.padding = '12px';
    resultDiv.style.background = score === jsPracticeQuestions.length ? '#d4edda' : (score >= 3 ? '#fff3cd' : '#f8d7da');
    resultDiv.style.color = score === jsPracticeQuestions.length ? '#155724' : (score >= 3 ? '#856404' : '#721c24');
    resultDiv.style.borderRadius = '12px';
}

function highlightActiveTopic(lang, idx) {
    var items = document.querySelectorAll(lang==='c'?'#cTopicList .topic-item':'#jsTopicList .topic-item');
    for(var i=0;i<items.length;i++) { 
        items[i].classList.remove('active'); 
        if(i===idx) items[i].classList.add('active'); 
    }
}

function checkTopicMcq(lang, correct) {
    var radios = document.querySelectorAll(lang==='c'?'input[name="cTopicMcq"]':'input[name="jsTopicMcq"]');
    var sel=null;
    for(var i=0;i<radios.length;i++) if(radios[i].checked) { sel=parseInt(radios[i].value); break; }
    var d = document.getElementById(lang==='c'?'cTopicMcqResult':'jsTopicMcqResult');
    if(sel===null) { 
        d.innerHTML=' Select an answer!'; 
        d.style.background='#f8d7da'; 
        d.style.color='#721c24'; 
    }
    else if(sel===correct) { 
        d.innerHTML=' Correct! Great job!'; 
        d.style.background='#d4edda'; 
        d.style.color='#155724'; 
    }
    else { 
        d.innerHTML=' Wrong! Keep learning!'; 
        d.style.background='#f8d7da'; 
        d.style.color='#721c24'; 
    }
}

function escapeHtml(t) { 
    var d=document.createElement('div'); 
    d.textContent=t; 
    return d.innerHTML; 
}

function runCCode() { 
    var out=document.getElementById('cOutput'); 
    out.style.display='block'; 
    out.innerHTML=' C Program Output:<br> ' + cTopicsData[currentCTopic].output.replace(/\n/g, '<br> '); 
    out.style.background='#faf4ed'; 
}

function runJSCode() { 
    var t=jsTopicsData[currentJSTopic], out='', old=console.log; 
    console.log=function(m){out+=m+'<br>';}; 
    try{ eval(t.code); }catch(e){out='Error: '+e.message; } 
    console.log=old; 
    var d=document.getElementById('jsOutput'); 
    d.style.display='block'; 
    d.innerHTML=' JavaScript Output:<br>' + (out||t.output).replace(/\n/g, '<br>'); 
    d.style.background='#faf4ed'; 
}

function scrollToSection(s) { 
    document.getElementById(s).scrollIntoView({behavior:'smooth'}); 
}

function updateActive(active){
    var btns = ['homeBtn','cNavBtn','jsNavBtn','aboutBtn'];
    for(var i=0;i<btns.length;i++){
        var btn = document.getElementById(btns[i]);
        if(active === btns[i]){
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

document.getElementById('homeBtn').onclick = function(){
    window.scrollTo({top:0,behavior:'smooth'}); 
    updateActive('homeBtn');
};
document.getElementById('cNavBtn').onclick = function(){
    scrollToSection('cSection'); 
    updateActive('cNavBtn');
};
document.getElementById('jsNavBtn').onclick = function(){
    scrollToSection('jsSection'); 
    updateActive('jsNavBtn');
};
document.getElementById('aboutBtn').onclick = function(){
    scrollToSection('aboutSection'); 
    updateActive('aboutBtn');
};

window.scrollToSection = scrollToSection;
window.runCCode = runCCode;
window.runJSCode = runJSCode;
window.checkTopicMcq = checkTopicMcq;
window.submitCPracticeAnswers = submitCPracticeAnswers;
window.submitJSPracticeAnswers = submitJSPracticeAnswers;

displayCTopics();
displayJSTopics();
