describe('my-component', () => {
  it('using HTMLUListElement works', async () => {
    const unorderedList = document.createElement('ul');
    console.log(unorderedList instanceof HTMLUListElement);
  });
});
