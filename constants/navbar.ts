export enum NavbarLinkSection {
    Home = "/",
    Services = "#services",
    Projects = "#projets",
    Education = "#parcours",
    Contact = "#contact",
}

export const navbarLinks = [
    { name: "Matheo LANG", sectionId: NavbarLinkSection.Home, },
    { name: "Parcours", sectionId: NavbarLinkSection.Education, },
    { name: "Projets", sectionId: NavbarLinkSection.Projects, },
    { name: "Services", sectionId: NavbarLinkSection.Services, },
    { name: "Contact", sectionId: NavbarLinkSection.Contact, },
];

export const mail = "matheolang@icloud.com"