export enum NavbarLinkSection {
    Home = "/",
    Services = "#services",
    Projects = "#projets",
    Education = "#parcours",
    CV = "matheolang.pdf",
}

export const navbarLinks = [
    { name: "Matheo LANG", sectionId: NavbarLinkSection.Home, },
    { name: "Parcours", sectionId: NavbarLinkSection.Education, },
    { name: "Projets", sectionId: NavbarLinkSection.Projects, },
    { name: "Services", sectionId: NavbarLinkSection.Services, },
    // { name: "CV", sectionId: "/" + NavbarLinkSection.CV }
];

export const mail = "matheolang@icloud.com"