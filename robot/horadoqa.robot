*** Settings ***
Library  SeleniumLibrary


*** Variables ***

${url}    http://54.174.75.247/
${frameworks}    //*[@id="select-itens"]/option[3]
${verificação}    //h1[contains(text(), "Obrigado por sua participação !!!")]


*** Keywords ***
Given que o usuário acessou o site
    Open Browser    ${url}    chrome
    Sleep    5s

And inseriu os dados pessoais
    Input Text    //*[@id="root"]/div/div/form/div[1]/label/input    Hora do QA
    Input Text    //*[@id="root"]/div/div/form/div[2]/label/input    horadoqa@gmail.com
    Input Text    //*[@id="root"]/div/div/form/div[3]/label/input    219876543210

And clicar em "Enviar"
    Click Element    //*[@id="root"]/div/div/form/button
    Sleep    5s

And a mensagem de confirmação será exibida
    Wait Until Element Is Visible    ${verificação}    10
    Element Should Be Visible    ${verificação}
    Sleep    5s

Then o site será fechado
    Close Browser


*** Test Cases ***
Cenário1: Enviar dados pelo site
    Given que o usuário acessou o site
    And inseriu os dados pessoais
    And clicar em "Enviar"
    # And a mensagem de confirmação será exibida
    Then o site será fechado

# Cenário: Enviar dados pelo site
#     Dado que o usuário acessou o site
#     E escolheu um item da lista de frameworks
#     E digitou algo sobre a escolha
#     E inseriu os dados pessoais
#     E informou o país de origem
#     Quando clicar em "Send"
#     E a mensagem de confirmação será exibida
#     Então o site será fechado