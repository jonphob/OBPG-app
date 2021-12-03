const filterList =['all', 'mine', 'development', 'sales', 'marketing', 'design']

export default function ProjectFilter() {
    return (
        <div className='project-filter'>
            <nav>
                {filterList.map((f) => (
                    <button key={f}
                    onClick={() => handleClick(f)}>
                        {f}
                    </button>
                ))}
            </nav>
            
        </div>
    )
}
