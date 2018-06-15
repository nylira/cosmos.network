# Security

## Object-Capability Model

What does the capabilities model really look like? Only reveal what is necessary to get the work done.

For example, the following code snippet violates the object capabilities principle:

```
type AppAccount struct {...}
var account := &AppAccount{
    Address: pub.Address(),
    Coins: sdk.Coins{{"ATM", 100}},
}
var sumValue := externalModule.ComputeSumValue(account)
```

The method "ComputeSumValue" implies a pure function, yet the implied capability of accepting a pointer value is the capability to modify that value. The preferred method signature should take a copy instead.

```
var sumValue := externalModule.ComputeSumValue(*account)
```

In the Cosmos SDK, you can see the application of this principle in the basecoin examples folder.

```
// File: cosmos-sdk/examples/basecoin/app/init_handlers.go
package app

import (
    "github.com/cosmos/cosmos-sdk/x/bank"
    "github.com/cosmos/cosmos-sdk/x/sketchy"
)

func (app *BasecoinApp) initRouterHandlers() {

    // All handlers must be added here.
    // The order matters.
    app.router.AddRoute("bank", bank.NewHandler(app.accountMapper))
    app.router.AddRoute("sketchy", sketchy.NewHandler())
}
```

In the Basecoin example, the sketchy handler isn't provided an account mapper, which does provide the bank handler with the capability (in conjunction with the context of a transaction run).
