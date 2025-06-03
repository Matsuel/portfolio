export enum NavbarLinkSection {
    Home = "/",
    Services = "#services",
    Projects = "#projets",
    Education = "#parcours",
    Contact = "#contact",
}

export const navbarLinks = [
    { name: "Matheo LANG", sectionId: NavbarLinkSection.Home, },
    { name: "Services", sectionId: NavbarLinkSection.Services, },
    { name: "Projets", sectionId: NavbarLinkSection.Projects, },
    { name: "Parcours", sectionId: NavbarLinkSection.Education, },
    { name: "Contact", sectionId: NavbarLinkSection.Contact, },
];