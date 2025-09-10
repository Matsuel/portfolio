import Briefcase from "@/components/icons/Briefcase";
import ExternaleDrive from "@/components/icons/ExternaleDrive";
import House from "@/components/icons/House";
import School from "@/components/icons/School";
import Write from "@/components/icons/Write";

export enum NavbarLinkSection {
    Home = "/",
    Services = "#services",
    Projects = "#projets",
    Education = "#parcours",
    Contact = "#contact",
}

export const homeSection = { name: "Matheo LANG", sectionId: NavbarLinkSection.Home, icon: <House /> };
export const servicesSection = { name: "Services", sectionId: NavbarLinkSection.Services, icon: <Briefcase /> };
export const projectsSection = { name: "Projets", sectionId: NavbarLinkSection.Projects, icon: <ExternaleDrive /> };
export const educationSection = { name: "Parcours", sectionId: NavbarLinkSection.Education, icon: <School /> };
export const contactSection = { name: "Contact", sectionId: NavbarLinkSection.Contact, icon: <Write /> };

export const navbarLinks = [
    homeSection,
    servicesSection,
    projectsSection,
    educationSection
];

export const mail = "matheolang@icloud.com"