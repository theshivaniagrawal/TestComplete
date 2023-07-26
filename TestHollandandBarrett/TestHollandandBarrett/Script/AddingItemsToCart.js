function AddingItemsToCart()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://www.hollandandbarrett.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeAccount' control.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount2.linkAccount.textnodeAccount.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogin.FindElement("//p[.='Sign in to your account, for the best experience']") object equals 'Sign in to your account, for the best experience'.
  aqObject.CheckProperty(Aliases.browser.pageLogin.FindElement("//p[.='Sign in to your account, for the best experience']"), "contentText", cmpEqual, "Sign in to your account, for the best experience");
  //Clicks the 'textboxEmailAddress' control.
  Aliases.browser.pageLogin.sectionMyAccount.formEmailAddress.textboxEmailAddress.Click();
  //Sets the text 'testlast@gmail.com' in the 'textboxEmailAddress' text editor.
  Aliases.browser.pageLogin.sectionMyAccount.formEmailAddress.textboxEmailAddress.SetText("testlast@gmail.com");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageLogin.sectionMyAccount.formEmailAddress.passwordboxPassword.Click();
  //Sets the text Project.Variables.Password2 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLogin.sectionMyAccount.formEmailAddress.passwordboxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonAction' button.
  Aliases.browser.pageLogin.sectionMyAccount.formEmailAddress.buttonAction.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.Wait();
  //Drags the 'linkVitaminsSupplements' object.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.sectionMenopauseHub.navMenopauseHub.linkVitaminsSupplements.Drag(4, 8, 144, 5);
  //Clicks the 'panelVitaminC' control.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.sectionMenopauseHub.navMenopauseHub.textnodeVitaminsSupplements.panelVitaminC.Click();
  //Drags the 'linkVitaminsSupplements' object.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.sectionMenopauseHub.navMenopauseHub.linkVitaminsSupplements.Drag(88, 27, 12, 10);
  //Drags the 'linkVitaminsSupplements' object.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.sectionMenopauseHub.navMenopauseHub.linkVitaminsSupplements.Drag(88, 27, 12, 10);
  //Clicks the 'buttonAddToBasket' button.
  Aliases.browser.pageVitaminCTabletsSupplementsSh.linkBuy1Get1HalfPrice2.buttonAddToBasket.ClickButton();
  //Clicks the 'buttonAddToBasket' button.
  Aliases.browser.pageVitaminCTabletsSupplementsSh.linkBuy1Get1HalfPrice2.buttonAddToBasket.ClickButton();
  //Drags the 'searchbox' object.
  Aliases.browser.pageVitaminCTabletsSupplementsSh.searchbox.Drag(170, 25, 150, -8);
  //Sets the text 'vegan chocolate' in the 'searchbox' text editor.
  Aliases.browser.pageVitaminCTabletsSupplementsSh.searchbox.SetText("vegan chocolate");
  //Clicks the 'button' button.
  Aliases.browser.pageVitaminCTabletsSupplementsSh.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageWwwHollandandbarrettComSearc.Wait();
  //Clicks the 'buttonAddToBasket2' button.
  Aliases.browser.pageWwwHollandandbarrettComSearc.linkBuy1Get1HalfPrice2.buttonAddToBasket2.ClickButton();
  //Clicks the 'buttonAddToBasket2' button.
  Aliases.browser.pageWwwHollandandbarrettComSearc.linkBuy1Get1HalfPrice2.buttonAddToBasket2.ClickButton();
  //Clicks the 'buttonAddToBasket2' button.
  Aliases.browser.pageWwwHollandandbarrettComSearc.linkBuy1Get1HalfPrice2.buttonAddToBasket2.ClickButton();
  //Drags the 'buttonAddToBasket2' object.
  Aliases.browser.pageWwwHollandandbarrettComSearc.linkBuy1Get1HalfPrice2.buttonAddToBasket2.Drag(117, 15, 237, 3);
  //Clicks the 'textnodeBasket' control.
  Aliases.browser.pageWwwHollandandbarrettComSearc.link2.textnodeBasket.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageBasket.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageBasket.FindElement("//h1[.='Your basket']") object equals 'Your basket'.
  aqObject.CheckProperty(Aliases.browser.pageBasket.FindElement("//h1[.='Your basket']"), "contentText", cmpEqual, "Your basket");
  //Clicks the 'textnode' control.
  Aliases.browser.pageBasket.textnode.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageBasket.FindElement("//span[contains(text(), '(')]") object equals '(
  //5 items
  //)'.
  aqObject.CheckProperty(Aliases.browser.pageBasket.FindElement("//span[contains(text(), '(')]"), "contentText", cmpEqual, "(\n5 items\n)");
}