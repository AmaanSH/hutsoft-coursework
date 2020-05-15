// Provides the class for the exercises at the end of each module
class Game {
    constructor(answers) {
        this.answers = answers;
        this.correct = [];
        this.incorrect = [];
    }

    checkAnswers(inputObject) 
    {
        var answerProps = Object.getOwnPropertyNames(this.answers);
        var inputProps = Object.getOwnPropertyNames(inputObject);

        for (var i = 0; i < answerProps.length; i++)
        {
            // get the property name
            var propName = answerProps[i];

            // find the corressponding property on both answer/input objects
            if (answerProps[propName] === inputProps[propName])
            {
                // do they both have the same value?
                if (this.answers[propName] === inputObject[propName])
                {
                    this.correct.push(inputObject[propName]);
                }

                else 
                {
                    this.incorrect.push(this.answers[propName]);
                }
            }
        }

    }

    reset()
    {
        this.correct = [];
        this.incorrect = [];
    }
}