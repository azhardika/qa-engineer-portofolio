
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

public class HomePage extends Page {

    private final By cartIcon = By.id("shopping_cart_container");
    private final By productCount = By.className("inventory_item");
    private final By buttonAddCartBackpack = By.id("add-to-cart-sauce-labs-backpack");
    private final By secondHeader = By.className("title");
    private final By cartCountBadge = By.className("shopping_cart_badge");
    private final By buttonRemoveCartBackpack = By.id("remove-sauce-labs-backpack");

    public HomePage(WebDriver driver) {
        super(driver);
    }

    public boolean isCartIconDisplayed() {
        return driver.findElement(cartIcon).isDisplayed();
    }

    public int getProductCount() {
        return driver.findElements(productCount).size();
    }

    public boolean isBackpackButtonDisplayed() {
        try {
            return driver.findElement(buttonAddCartBackpack).isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    public String getHeaderTitle() {
        return driver.findElement(secondHeader).getText();
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public String getPageTitle() {
        return driver.getTitle();
    }

    public void clickAddBackpackButton() {
        driver.findElement(buttonAddCartBackpack).click();
    }

    public boolean isRemoveBackpackButtonDisplayed() {
        return driver.findElement(buttonRemoveCartBackpack).isDisplayed();
    }

    public String getCartCountBadge() {
        return driver.findElement(cartCountBadge).getText();
    }
}
