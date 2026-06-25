type PageProps = {
    children: React.ReactNode
}

export default function Page({children}: PageProps) {
    return (
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    )
}