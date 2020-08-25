const {I} = inject()

Before(() => {
  I.say('Running Before() from testOneSteps.js')
})

Given('I am viewing the CodeceptJS homepage', () => {
  I.amOnPage('https://codecept.io/')
})

Then('I should see the text "Cucumber-like BDD"', () => {
  I.see('Cucumber-like BDD')
})
