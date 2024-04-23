type company = {
    name: string;
    email: string;
    cnpj: string;
    country: string;
    state: string;
    cep: string;
    descripition: string;
    jobVacancies?: jobVacancies[] | [];
};