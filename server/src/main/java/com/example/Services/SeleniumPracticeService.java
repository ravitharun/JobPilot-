package com.example.Services;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Model.JobSearchPreferences;
import com.example.Model.NaukiriLoginModel;
import com.example.Repository.JobSearchPreferencesRepo;
import com.example.Repository.NaukiriRepo;
import com.example.demo.Controller.PasswordConfig;

import io.opentelemetry.internal.shaded.jctools.queues.MessagePassingQueue.WaitStrategy;

@Service

public class SeleniumPracticeService {

    @Autowired
    NaukiriRepo naukriRepo;
    @Autowired
    PasswordConfig PasswordConfig;

    @Autowired
    JobSearchPreferencesRepo job;

    public String loginToNaukri(String user_email, String userpasswordNaukri, WebDriver driver) {

        // WebDriver driver = new ChromeDriver();

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

        }
    }

    public String StartAutomation(long userid) {

        JobSearchPreferences job_pref = job.findByUserApplicationId(userid);

        NaukiriLoginModel n = naukriRepo.findByApplicationuserid(userid);

        if (n == null) {
            return "There is no Naukri account connected";
        }

        WebDriver driver = new ChromeDriver();

        try {
            String s_login = loginToNaukri(
                    n.getNaukiriEmail(),
                    "tharun2005",
                    driver);

            System.out.println(s_login);

            if ("Login valid".equals(s_login)) {

                System.out.println("Opening new tab for job search");

                // Open a new tab in the same browser session
                driver.switchTo().newWindow(WindowType.TAB);

                driver.get("https://www.naukri.com/mnjuser/homepage");

                WebDriverWait wait = new WebDriverWait(
                        driver, Duration.ofSeconds(30));

                wait.until(ExpectedConditions.elementToBeClickable(
                        By.className("nI-gNb-sb__expand"))).click();

                return "Job search opened successfully";
            }

            return s_login;

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getMessage() + "Autoamtion");
            return "Automation failed: " + e.getMessage();
        }
    }

    // naukri Profile update
    public String UpdateNaukriProfile() {

        WebDriver driver = new ChromeDriver();
        String s_login = loginToNaukri(
                "tr565003@gmail.com",
                "tharun2005",
                driver);
        try {
            if ("Login valid".equals(s_login)) {

                driver.get("https://www.naukri.com/mnjuser/profile?id=&altresid");

                WebDriverWait wait = new WebDriverWait(
                        driver, Duration.ofSeconds(30));

                String Rsumeurl = "";

                WebElement fileInput = wait.until(
                        ExpectedConditions.presenceOfElementLocated(
                                By.cssSelector("input.upload-input[type='file']")));

                // 2. Upload the resume using its absolute path
                fileInput.sendKeys(
                        Rsumeurl);

                WebElement Update = wait
                        .until(ExpectedConditions.elementToBeClickable(By.className("upload-button")));
                Update.click();
            } else {
                System.err.println("Login failed");
            }
        } catch (Exception e) {
            // TODO: handle exception
            System.err.println(e.getMessage() + "Profile Update Automation Issue");
        } finally {
            driver.quit();
        }
        return "naukri profile update.";
    }

}
