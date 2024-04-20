export function Snippet() {
    return (
      <pre className=" dark:bg-neutral-800 max-w-full overflow-x-auto rounded border bg-gray-100   dark:text-neutral-200  px-4 py-1 font-mono text-sm text-black">
        {`[ 
    {
      title: "Dashboard",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      title: "Projects",
      icon: <ProjectIcon />,
      link: "/admin/projects",
    },
  ]
  `}
      </pre>
    );
  }