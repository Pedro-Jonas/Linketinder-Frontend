const nameCompanyRegex = new RegExp(/[A-Za-zà-ü]+(?: [A-za-zà-ü]+)*/);
const emailCompanyRegex = new RegExp(/[\w\.]+@[\w]+\.[a-zA-Z]{2,}/);
const cnpjRegex = new RegExp(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/);
const cepCompanyRegex = new RegExp(/\d{5}-\d{3}/);


function validateFormCompany(company: company): boolean{

   console.log(company.cnpj)

   if (!nameCompanyRegex.test(company.name)) {
      alert("Insira um nome no formato válido")
      return false
   };
 
   if (!emailCompanyRegex.test(company.email)) {
      alert("Insira um email no formato válido")
      return false
   };
 
   if (!cnpjRegex.test(company.cnpj)) {
      alert("Insira um CNPJ no formato válido");
      return false;
   };
 
   if (!cepCompanyRegex.test(company.cep)) {
      alert("Insira um CEP no formato válido");
      return false;
   };

    
   return true;
}