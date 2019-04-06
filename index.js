'use strict';

const questionSet = [
    {
        number: 1,
        text: 'What is the Bible verse Jules Winnfield likes to recite?',
        cho1: 'Genesis 3:8',
        cho2: '1 Thessalonians 5:11',
        cho3: 'Ezekiel 25:17',
        cho4: 'Ezra 9:9',
 
    }

    {
        number: 2,
        text: `What is Elmo McElroy's signature piece of clothing?`,
        cho1: 'a kilt',
        cho2: 'an ascot',
        cho3: 'knee high socks',
        cho4: 'nothing - Elmo prefers nudity',
 
    }

    {
        number: 3,
        text: 'In "Jumper", Roland belongs to a group called:',
        cho1: 'The Knights Templar',
        cho2: 'The White Knights',
        cho3: 'The Jumpers',
        cho4: 'The Paladins',
 
    }

    {
        number: 4,
        text: 'In "Captain Marvel", where did Nick Fury say he was born?',
        cho1: 'Latveria',
        cho2: 'Huntsville, Alabama',
        cho3: 'Orange County, California',
        cho4: 'Detroit, Michigan',
 
    }

    {
        number: 5,
        text: `What does Elijah Price's mother use to get Elijah out of the house?`,
        cho1: 'comic books',
        cho2: 'GI Joes',
        cho3: 'basketball cards',
        cho4: 'new sneakers',
 
    }
];

const answers = [
        'Ezekiel 25:17',
        'a kilt',
        'The Paladins',
        'Huntsville, Alabama',
        'comic books',

]

function handleStartButton() {
    $('#startQuizButton').click(function(event) {
        console.log("handleStartButton ran");
    });
}
    

function handleTheQuizApp() {
    handleStartButton();
    //handleSubmitButton();
    //handleNextButton();
    //handleRestartButton();
}

handleTheQuizApp();
