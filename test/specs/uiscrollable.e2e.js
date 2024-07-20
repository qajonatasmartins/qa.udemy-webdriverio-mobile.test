
describe('Sample Testing', () => {

    it('Sample Testing - scroolable', async () => {
        await driver.startActivity(
            'io.appium.android.apis',
            '.ApiDemos'
        )
        await $('~App').click()
        await $('~Activity').click()

        // await $('android=new UiScrollable(new UiSelector()).scrollToEnd(5, 5)')
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
        await driver.pause(5000)

        expect(await $('~Secure Surfaces').isExisting()).toBe(true)
        // await $('~Secure Surfaces').click()
    })

    it.skip('Sample Testing - scroolable', async () => {
        await driver.startActivity(
            'io.appium.android.apis',
            '.view.Gallery1'
        )
        // Horizontal scroll
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await driver.pause(5000)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
        await driver.pause(5000)
    })
})