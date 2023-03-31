export interface Bio {
    greet: String,
    name: String,
    oneliner: String,
    description: String,
    currentOrg: undefined | CurrentOrg
}

interface CurrentOrg {
    webpage: String,
    name: String,
    onelinerJD: String
}