
export const RegisterInputData = [

    {
        id: 2,
        type: "text",
        name: "name",
        label: "Name",
        user: true

    }, {
        id: 3,
        type: "text",
        name: "organisationName",
        label: "Organisation Name",
        oraganisation: true

    }, {
        id: 4,
        type: "text",
        name: "hospitalName",
        label: "Hospital Name",
        hospital: true

    }, {
        id: 5,
        type: "text",
        name: "website",
        label: "Website",

    }, {
        id: 6,
        type: "text",
        name: "address",
        label: "Address",

    }, {
        id: 7,
        type: "number",
        name: "phone",
        label: "Phone No",

    }, {
        id: 8,
        type: "email",
        name: "email",
        label: "E-mail",

    }, {
        id: 9,
        type: "text",
        name: "password",
        label: "Password",

    },
]
export const loginInputData = [
    {
        id: 1,
        type: "email",
        name: "email",
        label: "E-mail",

    }, {
        id: 2,
        type: "text",
        name: "password",
        label: "Password",

    },
]

//sideBar

export const adminSideCtrls = [
    {
        title: "A-Home",
        icon: "fa-solid fa-warehouse",
        href: "/admin",
    },
    {
        title: "Doner-List",
        icon: "fa-solid fa-hand-holding-medical",
        href: "/donerlist",
    },
    {
        title: "Hospital-List",
        icon: "fa-solid fa-hospital",
        href: "/hospitallist",

    },
    {
        title: "Org-List",
        icon: "fa-solid fa-sitemap",
        href: "/orglist",

    },
]