interface DotProps {
    active?: boolean
    setActive?: () => void
}

const Dot = ({
    active = false,
    setActive,
}: DotProps) => {
    return (
        <button className={`${active ? "w-4 h-4 bg-carouselactive" : "w-3 h-3 bg-carouselinactive"} rounded-full`} onClick={setActive} />
    )
}

export default Dot