package com.example.Services;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.stereotype.Service;

@Service

public class SeleniumPracticeService {

    public String loginToNaukri(String user_email, String userpasswordNaukri) {

        WebDriver driver = new ChromeDriver();

        try {
            System.err.println(user_email + " " + userpasswordNaukri);
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));

            driver.get("https://login.naukri.com/nLogin/Login.php");

            System.out.println("Page title: " + driver.getTitle());

            // Find email field
            WebElement useremail = wait.until(
                    ExpectedConditions.visibilityOfElementLocated(
                            By.id("usernameField")));

            useremail.sendKeys(user_email);

            // Find password field
            WebElement userpassword = wait.until(
                    ExpectedConditions.visibilityOfElementLocated(
                            By.id("passwordField")));
            userpassword.sendKeys(userpasswordNaukri);
            ((JavascriptExecutor) driver).executeScript(
                    "arguments[0].disabled = true; arguments[1].disabled = true;",
                    useremail, userpassword);
            // Find the Login button using CSS classes
            WebElement loginButton = wait.until(
                    ExpectedConditions.elementToBeClickable(
                            By.cssSelector("#loginForm button[type='submit']:not(.otpButton)")));

            loginButton.click();

            System.out.println("Current URL: " + driver.getCurrentUrl());
            System.err.println("er");
            // Check the page after login; do not assume success.
            Thread.sleep(3000);

            System.out.println("Page title after login: " + driver.getTitle());
            String currentUrl = driver.getCurrentUrl();

            if (currentUrl.toLowerCase().contains("nlogin")) {
                System.out.println("Login failed or verification is required.");
                return "invalid";
            }

            System.out.println("Login may be successful.");
            return "Login valid";

        } catch (Exception e) {
            e.printStackTrace();
            return "Login failed or needs verification: " + e.getMessage();

        } finally {
            driver.quit();
        }
    }
}
