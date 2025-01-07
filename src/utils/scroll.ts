export const scrollToPercentage = (percentage: number) => {
    const scrollPosition = (document.body.scrollHeight - window.innerHeight) * (percentage / 100);
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
    });
};

export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}