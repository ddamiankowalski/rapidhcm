import { NewDashletComponent } from "../components/newdashlet"

describe('NewDashlet', () => {
    it('Clicked should output message to the console', () => {
        const comp = new NewDashletComponent();
        expect(comp.isModalToggled)
            .withContext('right now it is not clicked')
            .toBe(false)

        comp.createDashlet();
        expect(comp.isModalToggled)
            .withContext('Now it is clicked')
            .toBe(true)
    })
})