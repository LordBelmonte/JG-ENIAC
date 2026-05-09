
# #1
# class Pessoa:
#     def __init__(self, idade):
#         self.idade = idade    


#     def verificar_idade(self):
#         if self.idade <= 14:
#             print('Criança')
#         elif self.idade >=15 and self.idade <= 17:
#             print('adolescente')
#         elif self.idade >= 18 and self.idade <= 34:
#             print('jovem')
#         elif self.idade >= 35 and self.idade <=60:
#             print('Adulto')
#         else:
#             print('idoso')        


# pessoa =  Pessoa(17)
# pessoa.verificar_idade()

# Crie uma classe Pessoa com os atributos nome e idade. Adicione um método apresentar() que exiba "Olá, meu nome é [nome] e tenho [idade] anos." Crie duas pessoas diferentes e chame o método.


# # criei a classe
# class Pessoa:
#     def __init__(self, nome, idade):
#         self.nome = nome
#         self.idade  = idade
# # criei o método
#     def apresentar(self):
#         print(f'Olá, meu nome é {self.nome}, eu tenho {self.idade}')
# # instaciei a classe
# pessoa1 =  Pessoa('Kaio',20)
# pessoa2 =  Pessoa('Maria',22)
# # usei o método na instancia 
# pessoa1.apresentar()
# pessoa2.apresentar()



# ### **2.Classe Retângulo**



# Crie uma classe `Retangulo` com os atributos `largura` e `altura`. Adicione métodos:

# - `calcular_area()` – retorna a área
# - `calcular_perimetro()` – retorna o perímetro
    
#     Crie um retângulo com largura 5 e altura 3 e exiba sua área e perímetro


# class Retangulo:
#     def __init__(self, largura, altura):
#         self.largura = largura
#         self.altura = altura

#     def calcular_area(self):
#         return self.largura * self.altura
    
#     def calcular_perimetro(self):
#         return 2 * (self.largura + self.altura)


# ret = Retangulo(5, 3)

# print("Área:", ret.calcular_area())
# print("Perímetro:", ret.calcular_perimetro())






### **3.   Classe Conta Bancária**

# Crie uma classe `ContaBancaria` com:

# - Atributos: `titular`, `saldo` (inicial 0)
# - Métodos:
#     - `depositar(valor)`: acrescenta ao saldo
#     - `sacar(valor)`: se houver saldo suficiente, subtrai; senão, exibe `"Saldo insuficiente"`
#     - `exibir_saldo()`: mostra o saldo formatado
        
#         Crie uma conta, faça depósitos e saques e exiba o saldo.



# class ContaBancaria:
#     def __init__(self, titular):
#         self.titular = titular
#         self.saldo = 0

#     def depositar(self, valor):
#         self.saldo += valor
#         print(f"Depósito de R${valor:.2f} realizado.")

#     def sacar(self, valor):
#         if valor <= self.saldo:
#             self.saldo -= valor
#             print(f"Saque de R${valor:.2f} realizado.")
#         else:
#             print("Saldo insuficiente")

#     def exibir_saldo(self):
#         print(f"Titular: {self.titular}")
#         print(f"Saldo atual: R${self.saldo:.2f}")



# conta = ContaBancaria("Carlos")


# conta.depositar(500)
# conta.sacar(200)
# conta.sacar(400)


# conta.exibir_saldo()


#4  ### **4. Classe Produto**

# Crie uma classe `Produto` com:

# - Atributos: `nome`, `preco`, `quantidade_estoque`
# - Métodos:
#     - `total_estoque()`: retorna `preco * quantidade_estoque`
#     - `adicionar_estoque(quantidade)`: aumenta a quantidade
#     - `remover_estoque(quantidade)`: diminui, mas não permite ficar negativo
        
#         Crie um produto, altere o estoque e exiba o valor total.


# class Produto:
#     def __init__(self, nome, preco, quantidade_estoque):
#         self.nome = nome
#         self.preco = preco
#         self.quantidade_estoque = quantidade_estoque

#     def total_estoque(self):
#         return self.preco * self.quantidade_estoque

#     def adicionar_estoque(self, quantidade):
#         self.quantidade_estoque += quantidade
#         print(f"{quantidade} unidades adicionadas ao estoque.")

#     def remover_estoque(self, quantidade):
#         if quantidade <= self.quantidade_estoque:
#             self.quantidade_estoque -= quantidade
#             print(f"{quantidade} unidades removidas do estoque.")
#         else:
#             print("Quantidade insuficiente em estoque.")


# # Criando um produto
# produto = Produto("Notebook", 3500.00, 10)

# # Alterando estoque
# produto.adicionar_estoque(5)
# produto.remover_estoque(3)
# produto.remover_estoque(20)  # teste de erro

# # Exibindo valor total do estoque
# print("Produto:", produto.nome)
# print("Valor total em estoque: R$", produto.total_estoque())


### **5. Classe Aluno**

# Crie uma classe `Aluno` com:

# - Atributos: `nome`, `matricula`, `notas` (lista de floats)
# - Métodos:
#     - `adicionar_nota(nota)`: adiciona à lista
#     - `calcular_media()`: retorna a média das notas
#     - `situacao()`: retorna `"Aprovado"` se média >= 7, `"Recuperação"` se >= 5, `"Reprovado"` caso contrário
        
#         Crie um aluno, adicione 3 notas e exiba sua situação.



class Aluno:
    def __init__(self, nome, matricula):
        self.nome = nome
        self.matricula = matricula
        self.notas = []

    def adicionar_nota(self, nota):
        self.notas.append(nota)

    def calcular_media(self):
        if len(self.notas) == 0:
            return 0
        return sum(self.notas) / len(self.notas)

    def situacao(self):
        media = self.calcular_media()

        if media >= 7:
            return "Aprovado"
        elif media >= 5:
            return "Recuperação"
        else:
            return "Reprovado"


# Criando um aluno
aluno = Aluno("João", "2024001")

# Adicionando notas
aluno.adicionar_nota(8)
aluno.adicionar_nota(7)
aluno.adicionar_nota(6)

# Exibindo resultados
print("Aluno:", aluno.nome)
print("Média:", aluno.calcular_media())
print("Situação:", aluno.situacao())