const {Builder, By, Key} =require ("selenium-webdriver");

async function example(){

    //iniciar navegador
    let driver = await new Builder().forBrowser("firefox").build();

    //navegar por la aplicación 
    await driver.get("https://www.ebay.com/")
    //agregar 
    await driver.findElement(By.id("gh-ac")).sendKeys("Celulares", Key.RETURN);




    //cerrar el navegador
    await driver.quit("cerrar")

}
example()