'use strict';

const questionSet = [
    {
        number: 1,
        text: 'What is the Bible verse Jules Winnfield likes to recite?',
        cho1: 'Genesis 3:8',
        cho2: '1 Thessalonians 5:11',
        cho3: 'Ezekiel 25:17',
        cho4: 'Ezra 9:9',
 
    },

    {
        number: 2,
        text: `What is Elmo McElroy's signature piece of clothing?`,
        cho1: 'a kilt',
        cho2: 'an ascot',
        cho3: 'knee high socks',
        cho4: 'nothing - Elmo prefers nudity',
 
    },

    {
        number: 3,
        text: 'In "Jumper", Roland belongs to a group called:',
        cho1: 'The Knights Templar',
        cho2: 'The White Knights',
        cho3: 'The Jumpers',
        cho4: 'The Paladins',
 
    },

    {
        number: 4,
        text: 'In "Captain Marvel", where did Nick Fury say he was born?',
        cho1: 'Latveria',
        cho2: 'Huntsville, Alabama',
        cho3: 'Orange County, California',
        cho4: 'Detroit, Michigan',
 
    },

    {
        number: 5,
        text: `What does Elijah Price's mother use to get Elijah out of the house?`,
        cho1: 'comic books',
        cho2: 'GI Joes',
        cho3: 'basketball cards',
        cho4: 'new sneakers',
 
    },
];

const answers = [
        'Ezekiel 25:17',
        'a kilt',
        'The Paladins',
        'Huntsville, Alabama',
        'comic books',

];

//renderQuestion creates the template of each question
function renderQuestion() {
    return `
    <section id="question-page" role="main">
    <h2 id="question">${question.text}</h2>
    
    <form>
      <fieldset>
        <label>
          <input class="answer" type="radio" name="option" checked></input>
          <span>${question.cho1}</span>
        </label>
  
        <label>
          <input class="answer" type="radio" name="option"></input>
          <span>${question.cho2}</span>
        </label>
  
        <label>
          <input class="answer" type="radio" name="option"></input>
          <span>${question.cho3}</span>
        </label>
  
        <label>
          <input class="answer" type="radio" name="option"></input>
          <span>${question.cho4}</span>
        </label>
      </fieldset>  
      <button id="js-submit-button">Submit</button>

    </form>

    <div id="status-bar">
      <span id="question-count">Question: ${question.number}/10</span>
      <span id="score-count">Score: ${correctAnswers}/${questionsAnswered}</span>
    </div>
  </section>
  `;
    

}    

function handleStartButton() {
    $('#startQuizButton').click(function(event) {
        console.log("handleStartButton ran");
        renderQuestion();
    });
}
    

function handleTheQuizApp() {
    handleStartButton();
    /*handleSubmitButton();
      1.event listener for submit button
      2.check for if answer is right
      3.right answer goes to rightAnswerView; wrong answer goes to wrongAnswerView*/
    //handleNextButton();
    //handleRestartButton();
}

handleTheQuizApp();
