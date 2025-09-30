type BadgeTypes = {
    label: string
    colors: string
} 

function Badge({label, colors}: BadgeTypes) {
    return (
        <div className={`${colors} rounded-2xl px-2`}>
            <p>{label}</p>
        </div>
    )
}

export default Badge;