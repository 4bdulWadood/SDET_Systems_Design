import pytest
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class DashboardPage:
    def __init__(self, driver):
        self.driver = driver

    def register(self):
        time.sleep(3)
        # Click the Sign up button
        self.driver.find_element(By.XPATH, "//a[@href='/signup']").click()

        time.sleep(3)

        # Fill the Name field
        self.driver.find_element(By.NAME, "name").send_keys("John Dove Doe")

        # Fill the Email Address field
        self.driver.find_element(By.NAME, "email").send_keys("john1.doe@example.com")

        # Fill the Password field
        self.driver.find_element(By.NAME, "password").send_keys("SecurePassword123@")

    def verify_dashboard(self):
        assert "Task Manager" in self.driver.title

@pytest.mark.parametrize("browser", ["chrome", "firefox"])
def test_mern_dashboard(browser):
    if browser == "chrome":
        options = webdriver.ChromeOptions()
        driver = webdriver.Remote(
            command_executor="http://localhost:4444/wd/hub",
            options=options
        )
    elif browser == "firefox":
        options = webdriver.FirefoxOptions()
        driver = webdriver.Remote(
            command_executor="http://localhost:4444/wd/hub",
            options=options
        )

    driver.get("http://host.docker.internal:61320")

    dashboard_page = DashboardPage(driver)
    dashboard_page.register()
    dashboard_page.verify_dashboard()

    driver.quit()
