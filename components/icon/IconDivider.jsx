export default function IconDivider({ color = '', className = '' }) {
    return (
        <div className={className}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58301 1.25H5.41634V8.75H4.58301V1.25Z" fill="currentColor"/>
                <path d="M8.75 4.58301L8.75 5.41634L1.25 5.41634L1.25 4.58301L8.75 4.58301Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.6 5C0.6 7.43005 2.56995 9.4 5 9.4C7.43005 9.4 9.4 7.43005 9.4 5C9.4 2.56995 7.43005 0.6 5 0.6C2.56995 0.6 0.6 2.56995 0.6 5ZM5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0Z" fill="currentColor"/>
            </svg>
        </div>
    )
}
