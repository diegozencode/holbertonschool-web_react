interface Teacher {
    readonly firstName: string,
    readonly lastname: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any,
}

interface Directors extends Teacher {
    numberOfReports: number,
}
