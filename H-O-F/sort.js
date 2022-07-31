const companies = [
    {name: "Company One", category: "Finance", start: 1982, end: 2002},
    {name: "Company Two", category: "Retail", start: 1992, end: 2006},
    {name: "Company Three", category: "Auto", start: 1999, end: 2012},
    {name: "Company Four", category: "Technology", start: 2009, end: 2020},
    {name: "Company Five", category: "Finance", start: 1987, end: 2000},
    {name: "Company Six", category: "Retail", start: 1986, end: 2014},
    {name: "Company Seven", category: "Auto", start: 2011, end: 2021},
    {name: "Company Eight", category: "Technology", start: 1981, end: 2011},
    {name: "Company Nine", category: "Retail", start: 1982, end: 1999},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]

const sortCompanies = companies.sort((c1, c2) => {
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
})
console.log(sortCompanies)

const sortedCompanies = companies.sort((a, b)=> (a.start > b.start ? 1 : -1))
console.log(sortedCompanies)

const sortAge = ages.sort((a, b) => (a - b)) //ascending order
console.log(sortAge)
const descAge = ages.sort((a, b) => (b - a)) //descending order
console.log(descAge)