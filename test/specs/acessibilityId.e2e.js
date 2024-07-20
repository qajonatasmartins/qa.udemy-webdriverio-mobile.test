
describe('Sample Testing', () => {

    it('Sample Testing - Acessibility ID', async () => {
        await driver.startActivity(
            'io.appium.android.apis',
            '.ApiDemos'
        )
        const acessibility = $("~Access'ibility")
        // await acessibility.click()
        await driver.pause(5000)
        expect(await acessibility.isExisting()).toBe(true)
    })
})

