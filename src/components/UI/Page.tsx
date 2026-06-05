type PageProps = {
    id: string;
    children: React.ReactNode;
};

export default function Page({ id, children }: PageProps) {
    return <div id={id} className="flex min-h-screen">{children}</div>;
}
