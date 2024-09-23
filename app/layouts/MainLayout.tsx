const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className="max-w-[560px] mx-auto">
            {children}
        </div>
    )
}

export default MainLayout