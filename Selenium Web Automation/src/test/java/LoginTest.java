
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

    private WebDriver driver;
    private LoginPage loginPage;
    private HomePage homePage;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "D:\\Code\\selenium\\chromedriver-win64\\chromedriver.exe");
        driver = new ChromeDriver();
        loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
        //open testing website page
        loginPage.open();
    }

    @Test
    public void testValidLogin() {
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLoginButton();
        validateHomePage();
    }

    @Test
    public void testInvalidLogin() {
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("hahaYouWrong");
        loginPage.clickLoginButton();
        Assert.assertEquals("Invalid Error Message!", "Epic sadface: Username and password do not match any user in this service", loginPage.invalidCredential());
    }

    @Test
    public void testAddItemToCart() {
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLoginButton();
        homePage.clickAddBackpackButton();
        validateItemAdded();
    }

    @After
    public void tearDown() {
        // Close the browser after each test
        driver.quit();
    }

    private void validateHomePage() {
        Assert.assertTrue("Cart icon is not displayed!", homePage.isCartIconDisplayed());
        Assert.assertEquals("Product count is incorrect!", 6, homePage.getProductCount());
        Assert.assertTrue("Backpack Add to Cart button is not displayed!", homePage.isBackpackButtonDisplayed());
        Assert.assertEquals("Header title is incorrect!", "Products", homePage.getHeaderTitle());
        Assert.assertEquals("Current URL is incorrect!", "https://www.saucedemo.com/inventory.html", homePage.getCurrentUrl());
        Assert.assertEquals("Page title is incorrect!", "Swag Labs", homePage.getPageTitle());
    }

    private void validateItemAdded() {
        Assert.assertFalse("Backpack Add to Cart button is displayed!", homePage.isBackpackButtonDisplayed());
        Assert.assertTrue("Backpack Remove from Cart button is not displayed", homePage.isRemoveBackpackButtonDisplayed());
        Assert.assertEquals("Cart item count is incorrect!", "1", homePage.getCartCountBadge());
    }
}
