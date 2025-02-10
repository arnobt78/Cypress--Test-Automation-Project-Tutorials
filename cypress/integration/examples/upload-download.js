describe('Upload-download test',()=>
{

it("verify excel upload download",()=>
{
    const replaceNum = 450;
    const searchTextFruit = "Mango";
    const FilePath = Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx"
    cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");
    cy.get("#downloadButton").click();

    cy.task('writeExcelTest',{searchText:searchTextFruit,replaceText:replaceNum,change:{rowChange:0,colChange:2},filePath:FilePath });
    cy.get("#fileinput").selectFile(FilePath);
    cy.contains(searchTextFruit).parent().parent().find("#cell-4-undefined")
    .should('have.text',replaceNum);












})



})