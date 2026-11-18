import unittest
from pathlib import Path
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TesteLogin(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        options = webdriver.ChromeOptions()
        # Remova a linha abaixo se quiser visualizar o navegador durante a execução.
        options.add_argument("--headless=new")
        options.add_argument("--window-size=1365,900")
        cls.driver = webdriver.Chrome(options=options)
        arquivo = (Path(__file__).resolve().parents[1] / "sistema-login" / "index.html").as_uri()
        cls.driver.get(arquivo)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def setUp(self):
        self.driver.refresh()

    def test_login_com_credenciais_validas(self):
        self.driver.find_element(By.ID, "usuario").send_keys("admin")
        self.driver.find_element(By.ID, "senha").send_keys("123456")
        self.driver.find_element(By.ID, "entrar").click()
        mensagem = WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.ID, "mensagem"))
        )
        self.assertEqual("Login realizado com sucesso", mensagem.text)

    def test_login_com_senha_incorreta(self):
        self.driver.find_element(By.ID, "usuario").send_keys("admin")
        self.driver.find_element(By.ID, "senha").send_keys("senha-errada")
        self.driver.find_element(By.ID, "entrar").click()
        mensagem = self.driver.find_element(By.ID, "mensagem")
        self.assertEqual("Usuário ou senha inválidos", mensagem.text)

if __name__ == "__main__":
    unittest.main(verbosity=2)
