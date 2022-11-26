export default function IconDivider({ color, className }) {
    return (
        <div className={className}>
            <svg
                width="92"
                height="80"
                className={`h-8 w-8 text-${color}`}
                viewBox="0 0 92 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                    fill="white"
                />
                <path
                    d="M40 60C40 71.0457 31.0457 80 20 80C8.9543 80 0 71.0457 0 60C0 48.9543 8.9543 40 20 40C31.0457 40 40 48.9543 40 60Z"
                    fill="white"
                />
                <path d="M0 60V20H40V60H0Z" fill="white" />
                <path
                    d="M92 20C92 31.0457 83.0457 40 72 40C60.9543 40 52 31.0457 52 20C52 8.9543 60.9543 0 72 0C83.0457 0 92 8.9543 92 20Z"
                    fill="white"
                />
            </svg>
        </div>
    )
}
