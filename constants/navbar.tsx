import Briefcase from "@/components/icons/Briefcase";
import ExternaleDrive from "@/components/icons/ExternaleDrive";
import Person from "@/components/icons/Person";
import School from "@/components/icons/School";
import Write from "@/components/icons/Write";

export enum NavbarLinkSection {
    Home = "/",
    Services = "#services",
    Projects = "#projets",
    Education = "#parcours",
    Contact = "#contact",
}

export const navbarLinks = [
    { name: "Matheo LANG", sectionId: NavbarLinkSection.Home, icon: <Person /> },
    { name: "Parcours", sectionId: NavbarLinkSection.Education, icon: <School /> },
    { name: "Projets", sectionId: NavbarLinkSection.Projects, icon: <ExternaleDrive /> },
    { name: "Services", sectionId: NavbarLinkSection.Services, icon: <Briefcase /> },
    { name: "Contact", sectionId: NavbarLinkSection.Contact, icon: <Write /> },
];

export const mail = "matheolang@icloud.com"