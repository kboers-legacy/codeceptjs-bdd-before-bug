const {I} = inject()

Before(() => {
  I.say('Running Before() from testTwoSteps.js')
})

Given('I am viewing the CodeceptJS BDD page', () => {
  I.amOnPage('https://codecept.io/bdd/')
})

Then('I should see the link to the Agile Manifesto', () => {
  I.seeElement(locate('a').withText('Agile'))
})
