export const scrollToSection = (sectionId: string) => {
    sectionId = sectionId.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};