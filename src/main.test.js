beforeAll(async function () {
  // NOTE: nearlib and nearConfig are made available by near-cli/test_environment
  const near = await nearlib.connect(nearConfig)
  window.accountId = nearConfig.contractName
  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ['say_hello', 'say'],
    changeMethods: [],
    sender: window.accountId
  })
})

test('say_hello', async () => {
  const message = await window.contract.say_hello({ name: 'foo' })
  expect(message).toEqual('Hello foo!')
})

test('say', async () => {
  const message = await window.contract.say({ name: 'foo', greeting: 'Howdy' })
  expect(message).toEqual('Howdy foo!')
})
