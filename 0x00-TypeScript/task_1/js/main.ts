interface Teacher {
    readonly firstName: string,
    readonly lastname: string,
    fullTImeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any,
}
