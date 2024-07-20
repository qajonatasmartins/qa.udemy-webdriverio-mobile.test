
describe.skip('Sample Testing', () => {

    it('Sample Testing - Acessibility ID', async () => {
        await driver.startActivity(
            'io.appium.android.apis',
            '.ApiDemos'
        )
        const acessibility = $("~Access'ibility")
        await driver.pause(5000)
    })
})

