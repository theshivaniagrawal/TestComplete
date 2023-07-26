function LoginAddingInCart()
{
  var pass, AddtoCartXpath;
  //The password cannot be converted to a script. Use Project Variables to save the password.
  pass = "<input password here>";
  AddtoCartXpath = "/html/body/div[3]/div[4]/div/div[4]/div/div/div/div[2]/a[2]/div/div[3]/div[2]/div";
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://www.hollandandbarrett.com/en-au/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkAccount' link.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount2.linkAccount.Click();
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
  //Clicks the 'textnodeHelloTest' control.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkHelloTest.textnodeHelloTest.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageOverview.FindElement("//h1[.='My Account']") object equals 'My Account'.
  aqObject.CheckProperty(Aliases.browser.pageOverview.FindElement("//h1[.='My Account']"), "contentText", cmpEqual, "My Account");
  //Clicks the 'searchboxQuery' control.
  Aliases.browser.pageOverview.formSearch.searchboxQuery.Click();
  //Sets the text 'Vitamin C' in the 'searchboxQuery' text editor.
  Aliases.browser.pageOverview.formSearch.searchboxQuery.SetText("Vitamin C");
  //Clicks the 'buttonSearch' button.
  Aliases.browser.pageOverview.formSearch.buttonSearch.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageWwwHollandandbarrettComSearc.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageWwwHollandandbarrettComSearc.FindElement("//span[.='Searching  for \"Vitamin C\"']") object equals 'Searching for "Vitamin C"'.
  aqObject.CheckProperty(Aliases.browser.pageWwwHollandandbarrettComSearc.FindElement("//span[.='Searching  for \"Vitamin C\"']"), "contentText", cmpEqual, "Searching for \"Vitamin C\"");
  //Clicks the 'image240' control.
  Aliases.browser.pageWwwHollandandbarrettComSearc.linkBuy1Get1HalfPrice2.image240.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHollandBarrettVitaminC1000mg.Wait();
  //Clicks the 'buttonAddToBasket' button.
  Aliases.browser.pageHollandBarrettVitaminC1000mg.buttonAddToBasket.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHollandBarrettVitaminC1000mg.Wait();
  //Drags the 'searchbox' object.
  Aliases.browser.pageWwwHollandandbarrettComSearc.searchbox.Drag(88, 27, -79, -17);
  //Clicks the 'searchbox' control.
  Aliases.browser.pageWwwHollandandbarrettComSearc.searchbox.Click();
  //Sets the text 'vegan chocolate' in the 'searchbox' text editor.
  Aliases.browser.pageWwwHollandandbarrettComSearc.searchbox.SetText("vegan chocolate");
  //Clicks the 'button' button.
  Aliases.browser.pageWwwHollandandbarrettComSearc.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageWwwHollandandbarrettComSearc.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageWwwHollandandbarrettComSearc.FindElement("//span[.='Searching  for \"vegan chocolate\"']") object equals 'Searching for "vegan chocolate"'.
  aqObject.CheckProperty(Aliases.browser.pageWwwHollandandbarrettComSearc.FindElement("//span[.='Searching  for \"vegan chocolate\"']"), "contentText", cmpEqual, "Searching for \"vegan chocolate\"");
  //Clicks the 'image240' control.
  Aliases.browser.pageWwwHollandandbarrettComSearc.linkBuy1Get1HalfPrice2.image240.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageDoisyDamDDsVeganDarkChocolat.Wait();
  //Clicks the 'buttonAddAnother1InBasket' button.
  Aliases.browser.pageDoisyDamDDsVeganDarkChocolat.buttonAddAnother1InBasket.ClickButton();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://www.hollandandbarrett.com/basket");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Checks whether the 'contentText' property of the Aliases.browser.pageBasket.FindElement("//h1[.='Your basket']") object equals 'Your basket'.
  aqObject.CheckProperty(Aliases.browser.pageBasket.FindElement("//h1[.='Your basket']"), "contentText", cmpEqual, "Your basket");
  //Checks whether the 'contentText' property of the Aliases.browser.pageBasket.FindElement("//article[contains(., 'Doisy & Dam D&Ds Vegan Dark Chocolate Drops 30g')]") object equals '25% off, Save up to 1/2 Price
  //Doisy & Dam D&Ds Vegan Dark Chocolate Drops 30g
  //£0.74
  //£0.99
  //25% off, Save up to 1/2 Price'.
  aqObject.CheckProperty(Aliases.browser.pageBasket.FindElement("//article[contains(., 'Doisy & Dam D&Ds Vegan Dark Chocolate Drops 30g')]"), "contentText", cmpEqual, "25% off, Save up to 1/2 Price\nDoisy & Dam D&Ds Vegan Dark Chocolate Drops 30g\n£0.74\n£0.99\n25% off, Save up to 1/2 Price");
  //Checks whether the 'contentText' property of the Aliases.browser.pageBasket.FindElement("//article[contains(., 'Holland & Barrett Vitamin C 1000mg 120 Tablets')]") object equals 'Buy 1 get 1 half price
  //Add another item & get it half price
  //Holland & Barrett Vitamin C 1000mg 120 Tablets
  //£12.49
  //Buy 1 get 1 half price
  //Add another item & get it half price
  //Deliver one time only
  //Subscribe & Save
  //Get these benefits from your second order onwards:
  //Savings of up to 45%*
  //Free delivery on orders over £10
  //Cancel, skip or pause anytime
  //Deliver every
  //1 month
  //(recommended)
  //2 months
  //3 months
  //4 months
  //5 months
  //6 months
  //Info'.
  aqObject.CheckProperty(Aliases.browser.pageBasket.FindElement("//article[contains(., 'Holland & Barrett Vitamin C 1000mg 120 Tablets')]"), "contentText", cmpEqual, "Buy 1 get 1 half price\nAdd another item & get it half price\nHolland & Barrett Vitamin C 1000mg 120 Tablets\n£12.49\nBuy 1 get 1 half price\nAdd another item & get it half price\nDeliver one time only\nSubscribe & Save\nGet these benefits from your second order onwards:\nSavings of up to 45%*\nFree delivery on orders over £10\nCancel, skip or pause anytime\nDeliver every\n1 month\n(recommended)\n2 months\n3 months\n4 months\n5 months\n6 months\nInfo");
}