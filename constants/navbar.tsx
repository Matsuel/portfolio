import Briefcase from "@/components/icons/Briefcase";
import ExternaleDrive from "@/components/icons/ExternaleDrive";
import Quotes from "@/components/icons/Quotes";
import School from "@/components/icons/School";
import Tray from "@/components/icons/Tray";

export enum NavbarLinkSection {
    Home = "home",
    Services = "services",
    Projects = "projets",
    Education = "parcours",
    Contact = "contact",
}

export const home = { name: "Bienvenue", sectionId: NavbarLinkSection.Home, icon: Quotes };
export const services = { name: "Services", sectionId: NavbarLinkSection.Services, icon: Briefcase };
export const projects = { name: "Projets", sectionId: NavbarLinkSection.Projects, icon: ExternaleDrive };
export const parcours = { name: "Parcours", sectionId: NavbarLinkSection.Education, icon: School };
export const contact = { name: "Contact", sectionId: NavbarLinkSection.Contact, icon: Tray };

export const navbarLinks = [
    home,
    services,
    projects,
    parcours,
    contact
];

export const navbarLinksObj = {
    home,
    services,
    projects,
    parcours,
    contact
};

export const mail = "matheolang@icloud.com"