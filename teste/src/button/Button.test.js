describe('test for todo component', () => {
    it('teste Button', async() => {
        const { getByTestId } = render(<Button />)
        const fieldNode = await waitForElement(
            () => getByTestId('button')
        )
        console.log(fieldNode)
    })

})