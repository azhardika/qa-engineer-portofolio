
import org.openqa.selenium.WebDriver;

public class Page {

    protected WebDriver driver;

    public Page(WebDriver driver) {
        this.driver = driver;
    }

    public void open(String path) {
        driver.get("https://www.saucedemo.com/" + path);
    }
}
